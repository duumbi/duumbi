package io.duumbi.site.framework.auth0;

import java.util.Optional;

import org.springframework.stereotype.Service;

import kong.unirest.core.Unirest;
import kong.unirest.core.json.JSONObject;

@Service
public class Auth0ManagementService {

    private String getToken() {
        var response = Unirest.post("https://duumbi-dev.eu.auth0.com/oauth/token")
                .header("content-type", "application/json")
                .body("{\"client_id\":\"cqw0gdGKjlF39rZweFnUbrCo3fPAac1o\",\"client_secret\":\"2Q5GqqsVQXs4UhdKUvUT-4WJqyN_RgFBewrQpr8xYLmGgf_IM4t4AHQLhEg7fFVR\",\"audience\":\"https://duumbi-dev.eu.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}")
                .asJson();

        if (response.isSuccess()) {
            final JSONObject object = response.getBody().getObject();
            return object.getString("access_token");
        }

        return "";
    }

    public Optional<JSONObject> getUser(String id) {
        var response = Unirest.get("https://duumbi-dev.eu.auth0.com/api/v2/users/{id}")
                .routeParam("id", id)
                .header("Accept", "application/json")
                .header("Authorization", "Bearer " + getToken())
                .asJson();

        if (response.isSuccess()) {
            return Optional.of(response.getBody().getObject());
            // return object.getString("email");
        }

        return Optional.empty();
    }

}