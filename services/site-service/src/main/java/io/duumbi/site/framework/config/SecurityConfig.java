package io.duumbi.site.framework.config;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class SecurityConfig {

    @Bean
    SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        /*
         * This is where we configure the security required for our endpoints and setup
         * our app to serve as
         * an OAuth2 Resource Server, using JWT validation.
         */
        return http
                .authorizeExchange((auth) -> {
                    auth
                            .pathMatchers("/actuator/health", "/actuator/info").permitAll()
                            .pathMatchers("/api/v1/*").authenticated();
                    // .pathMatchers("/api/v1/*").hasAuthority("SCOPE_read:profile");
                })
                .cors(withDefaults())
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(withDefaults()))
                .build();
    }
}
