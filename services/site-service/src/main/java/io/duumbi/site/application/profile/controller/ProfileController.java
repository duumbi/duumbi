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
import io.duumbi.site.application.profile.service.ProfileCommandService;
import io.duumbi.site.application.profile.service.ProfileQueryService;
import io.duumbi.site.framework.stereotype.AuditData;
import jakarta.validation.Valid;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(path = "api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProfileController implements ProfileApi {

    private final ProfileQueryService profileQueryService;
    private final ProfileCommandService profileCommandService;
    private final ProfileMapper profileMapper;

    public ProfileController(ProfileQueryService profileQueryService, ProfileCommandService profileCommandService,
            ProfileMapper profileMapper) {
        this.profileQueryService = profileQueryService;
        this.profileCommandService = profileCommandService;
        this.profileMapper = profileMapper;
    }

    @Override
    @AuditData("User profile")
    public Mono<ResponseEntity<Profile>> getProfile(String id, Jwt jwt, ServerWebExchange exchange) {
        if (!jwt.getSubject().equals(id)) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
        return profileQueryService.getProfile(id)
                .map(profileMapper::toDto)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @Override
    public Mono<ResponseEntity<Void>> deleteProfile(String id, Jwt jwt, ServerWebExchange exchange) {
        if (!jwt.getSubject().equals(id)) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
        return Mono.just(ResponseEntity.status(profileCommandService.deleteProfile(id)).build());
    }

    @Override
    @AuditData("User profile")
    public Mono<ResponseEntity<Profile>> updateProfile(String id, @Valid Mono<Profile> profile, Jwt jwt,
            ServerWebExchange exchange) {
        if (!jwt.getSubject().equals(id)) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
        return profile.map(profileMapper::toEntity).map(entity -> {
            return profileCommandService.updateProfile(id, entity);
        }).map(profileMapper::toDto)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
