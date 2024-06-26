package io.duumbi.site.framework.config;

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

import io.duumbi.site.framework.property.ApplicationProperty;

/**
 * Configuration class for the application.
 */
@Configuration
@EnableCaching
@EnableConfigurationProperties({ ApplicationProperty.class })
@ComponentScan({
        "io.duumbi.site.application.**.controller",
        "io.duumbi.site.application.**.service"
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
