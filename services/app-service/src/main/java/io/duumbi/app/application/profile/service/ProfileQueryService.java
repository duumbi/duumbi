package io.duumbi.app.application.profile.service;

import org.springframework.lang.NonNull;

import io.duumbi.app.application.profile.model.ProfileEntity;
import io.duumbi.app.framework.auth0.Auth0ManagementService;
import io.duumbi.app.framework.stereotype.service.QueryService;
import reactor.core.publisher.Mono;

@QueryService
public class ProfileQueryService {
    private final Auth0ManagementService auth0ManagementService;

    public ProfileQueryService(Auth0ManagementService auth0ManagementService) {
        this.auth0ManagementService = auth0ManagementService;
    }

    @NonNull
    public Mono<ProfileEntity> getProfile(String id) {
        return Mono.justOrEmpty(auth0ManagementService.getUser(id));
    }

}
