package io.duumbi.site.application.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;

import io.duumbi.site.application.api.UserApi;
import io.duumbi.site.application.model.UserData;
import io.duumbi.site.framework.property.ApplicationProperty;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping(path = "v1", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin("*")
@Slf4j
public class UserController  implements UserApi {

    @Override
    public Mono<ResponseEntity<UserData>> getUserData(ServerWebExchange exchange) {
        var ud = new UserData();
        ud.setName("Demo");
        log.trace("trace");
        log.debug("debug");
        log.info("info");
        log.warn("warn");
        log.error("error");
        return Mono.just(ResponseEntity.ok(ud));
    }

   /*  @Autowired
    ApplicationProperty applicationProperty;

    @GetMapping(value = "/public")
    public Mono<String> publicEndpoint() {
        return Mono.just("All good. You DO NOT need to be authenticated to call /api/public."
                + applicationProperty.getEnvironment());
    } */
}
