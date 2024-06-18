package io.duumbi.site.application.user.controller;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;

import io.duumbi.site.application.api.UserApi;
import io.duumbi.site.application.model.UserData;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping(path = "api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin("*")
@Slf4j
public class UserController  implements UserApi {

    @GetMapping("/me")
    String me(@AuthenticationPrincipal Jwt jwt) {
        jwt.getClaims().forEach((k, v) -> log.info("{}: {}", k, v));
        jwt.getAudience().forEach(a -> log.info("Audience: {}", a));

        return String.format("{\"subject:\" \"%s\"}", jwt.getSubject());
    }


    @Override
    @PreAuthorize("hasAuthority('SCOPE_read:profile')")
    public Mono<ResponseEntity<UserData>> getUserData(ServerWebExchange exchange) {
        SecurityContext context = SecurityContextHolder.getContext();
        //User user = (User) authentication.getPrincipal();
        //log.info("User: {}", user.getUsername());
        var token = exchange.getRequest().getHeaders().get("authorization");
        log.info("Token: {}", token);

        //exchange.getRequest().getHeaders().

        var ud = new UserData();
        ud.setName("Demo");
        log.trace("trace");
        log.debug("debug");
        log.info("info");
        log.warn("warn");
        log.error("error");
        return Mono.just(ResponseEntity.ok(ud));
    }


}
