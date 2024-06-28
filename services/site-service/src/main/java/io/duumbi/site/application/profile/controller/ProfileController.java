package io.duumbi.site.application.profile.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;

import io.duumbi.site.application.api.ProfileApi;
import io.duumbi.site.application.model.Profile;
import io.duumbi.site.application.profile.mapper.ProfileMapper;
import io.duumbi.site.application.profile.service.ProfileQueryService;
import io.duumbi.site.framework.stereotype.AuditData;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(path = "api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProfileController implements ProfileApi {

    private final ProfileQueryService profileQueryService;
    private final ProfileMapper profileMapper;

    public ProfileController(ProfileQueryService profileQueryService, ProfileMapper profileMapper) {
        this.profileQueryService = profileQueryService;
        this.profileMapper = profileMapper;
    }

    @Override
    @AuditData("User profile")
    public Mono<ResponseEntity<Profile>> getProfile(String id, Jwt jwt, ServerWebExchange exchange) {
        if (!jwt.getSubject().equals(id)) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
        return profileQueryService.getProfile(id)
                .map(profileMapper::convertToDto)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
