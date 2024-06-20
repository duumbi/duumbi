package io.duumbi.site.application.user.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;

import io.duumbi.site.application.api.UserApi;
import io.duumbi.site.application.model.UserData;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(path = "api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@Slf4j
public class UserController implements UserApi {

    @Override
    //@PreAuthorize("hasAuthority('read:profile')")
    //@PreAuthorize("hasAuthority('SCOPE_profile')")
    public Mono<ResponseEntity<UserData>> getUserData(Jwt jwt, ServerWebExchange exchange) {
        jwt.getClaims().forEach((k, v) -> log.info("{}: {}", k, v));
        jwt.getAudience().forEach(a -> log.info("Audience: {}", a));

        var ud = new UserData();
        ud.setName(jwt.getSubject());
        log.trace("trace");
        log.debug("debug");
        log.info("info");
        log.warn("warn");
        log.error("error");
        return Mono.just(ResponseEntity.ok(ud));
    }

}
