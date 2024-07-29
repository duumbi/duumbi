package io.duumbi.app.framework.auth0;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import io.duumbi.app.application.profile.model.ProfileEntity;
import io.duumbi.app.framework.property.Auth0ManagementApiProperty;
import kong.unirest.core.JsonNode;
import kong.unirest.core.Unirest;
import kong.unirest.core.json.JSONObject;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class Auth0ManagementService {

    @Autowired
    private Auth0ManagementApiProperty auth0ManagementApiProperty;

    private record ApiAccess(String apiUrl, Optional<String> accessToken) {}

    private ApiAccess getApiAccess() {
        return new ApiAccess(
            String.format("https://%s/api/v2/", auth0ManagementApiProperty.getDomain()),
            fetchAccessToken()
        );
    }

    private Optional<String> fetchAccessToken() {
        var apiUrl = String.format("https://%s/oauth/token", auth0ManagementApiProperty.getDomain());
        var apiBody = String.format(
                "{\"client_id\":\"%s\",\"client_secret\":\"%s\",\"audience\":\"%s\",\"grant_type\":\"client_credentials\"}",
                auth0ManagementApiProperty.getClientId(),
                auth0ManagementApiProperty.getClientSecret(),
                auth0ManagementApiProperty.getIdentifier());

        var response = Unirest.post(apiUrl)
                .header("content-type", "application/json")
                .body(apiBody)
                .asJson();

        if (response.isSuccess()) {
            final JSONObject object = response.getBody().getObject();

            return Optional.of(object.getString("access_token"));
        } else {
            log.error("Failed to fetch access token (status: {}, message: {})", response.getStatus(),
                    response.getStatusText());

            return Optional.empty();
        }
    }

    private ProfileEntity translateProfileEntity(JSONObject object) {
        return ProfileEntity.builder()
                .name(object.getString("name"))
                .email(Optional.ofNullable(object.optString("email", null)))
                .picture(Optional.ofNullable(object.optString("picture", null)))
                .build();
    }

    @Cacheable(value = "profile", key = "#id")
    public ProfileEntity getUser(String id) {
        var apiAccess = getApiAccess();

        return apiAccess.accessToken.map(token -> {
            var response = Unirest.get(apiAccess.apiUrl + "users/{id}")
                    .routeParam("id", id)
                    .header("Accept", "application/json")
                    .header("Authorization", "Bearer " + token)
                    .asJson();

            if (response.isSuccess()) {
                log.info("Accessed the remote user profile.");
                var object = response.getBody().getObject();
                return translateProfileEntity(object);
            } else {
                log.error("Failed to fetch user profile (status: {}, message: {})", response.getStatus(),
                        response.getStatusText());
                return ProfileEntity.empty();
            }
        }).orElse(ProfileEntity.empty());
    }

    @CacheEvict(value = "profile", key = "#id")
    public int deleteUser(String id) {
        var apiAccess = getApiAccess();

        return apiAccess.accessToken.map(token -> {
            var response = Unirest.delete(apiAccess.apiUrl + "users/{id}")
                    .routeParam("id", id)
                    .header("Authorization", "Bearer " + token)
                    .asJson();

            if (response.isSuccess()) {
                log.info("Deleted the remote user profile.");
                return HttpStatus.NO_CONTENT.value();
            } else {
                log.error("Failed to delete user profile (status: {}, message: {})", response.getStatus(),
                        response.getStatusText());
                return response.getStatus();
            }
        }).orElse(HttpStatus.BAD_REQUEST.value());
    }

    @CacheEvict(value = "profile", key = "#id")
    public ProfileEntity updateUser(String id, ProfileEntity profile) {
        var apiAccess = getApiAccess();

        var apiBodyParam = String.format("\"name\":\"%s\"", profile.getName());

        if (profile.getEmail().isPresent()) {
            apiBodyParam += String.format(",\"email\":\"%s\"", profile.getEmail().get());
        }
        if (profile.getPicture().isPresent()) {
            apiBodyParam += String.format(",\"picture\":\"%s\"", profile.getPicture().get());
        }

        var apiBody =  new JsonNode(String.format("{%s}", apiBodyParam));

        return apiAccess.accessToken.map(token -> {
            var response = Unirest.patch(apiAccess.apiUrl + "users/{id}")
                    .routeParam("id", id)
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .header("Authorization", "Bearer " + token)
                    .body(apiBody)
                    .asJson();

            if (response.isSuccess()) {
                log.info("Updated the remote user profile.");
                var object = response.getBody().getObject();
                return translateProfileEntity(object);
            } else {
                log.error("Failed to update user profile (status: {}, message: {})", response.getStatus(),
                response.getBody().getObject().optString("message"));

                return ProfileEntity.empty();
            }
        }).orElse(ProfileEntity.empty());
    }
}