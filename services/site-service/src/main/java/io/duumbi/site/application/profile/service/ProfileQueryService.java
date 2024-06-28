package io.duumbi.site.application.profile.service;

import org.springframework.lang.NonNull;

import io.duumbi.site.application.profile.model.ProfileEntity;
import io.duumbi.site.framework.auth0.Auth0ManagementService;
import io.duumbi.site.framework.stereotype.service.QueryService;
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
