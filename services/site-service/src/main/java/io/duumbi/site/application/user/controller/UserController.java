package io.duumbi.site.application.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.duumbi.site.framework.property.ApplicationProperty;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(path = "user", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin("*")
public class UserController {

    @Autowired
    ApplicationProperty applicationProperty;

    @GetMapping(value = "/public")
    public Mono<String> publicEndpoint() {
        return Mono.just("All good. You DO NOT need to be authenticated to call /api/public."
                + applicationProperty.getEnvironment());
    }
}
