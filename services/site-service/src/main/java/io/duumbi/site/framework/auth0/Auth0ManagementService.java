package io.duumbi.site.framework.auth0;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import io.duumbi.site.application.profile.model.ProfileEntity;
import io.duumbi.site.framework.property.Auth0ManagementApiProperty;
import kong.unirest.core.Unirest;
import kong.unirest.core.json.JSONObject;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class Auth0ManagementService {

    @Autowired
    private Auth0ManagementApiProperty auth0ManagementApiProperty;

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
                .email(Optional.of(object.optString("email", "")))
                .picture(Optional.of(object.getString("picture")))
                .build();
    }

    @Cacheable("profile")
    public ProfileEntity getUser(String id) {
        var apiUrl = String.format("https://%s/api/v2/", auth0ManagementApiProperty.getDomain());
        var accessToken = fetchAccessToken();

        return accessToken.map(token -> {
            var response = Unirest.get(apiUrl + "users/{id}")
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

}