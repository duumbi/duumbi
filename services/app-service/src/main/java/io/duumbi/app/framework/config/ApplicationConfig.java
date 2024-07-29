package io.duumbi.app.framework.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import io.duumbi.app.framework.property.ApplicationProperty;
import io.duumbi.app.framework.property.Auth0ManagementApiProperty;

/**
 * Configuration class for the application.
 */
@Configuration
@EnableCaching
@EnableConfigurationProperties({ ApplicationProperty.class, Auth0ManagementApiProperty.class })
@ComponentScan({
        "io.duumbi.app.application.**.controller",
        "io.duumbi.app.application.**.service"
})
@Import({
        ResponseHeadersFilter.class
})
public class ApplicationConfig {

    @Autowired
    private ApplicationProperty applicationProperty;

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedOrigins(List.of(applicationProperty.getClientOriginUrl()));
        corsConfig.setAllowedMethods(
                List.of(
                        HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.PATCH.name(),
                        HttpMethod.DELETE.name()));
        corsConfig.setAllowedHeaders(
                List.of(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE));
        corsConfig.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return source;
    }

    @Bean
    CorsWebFilter corsWebFilter() {
        final var configSource = this.corsConfigurationSource();

        return new CorsWebFilter(configSource);
    }
}
