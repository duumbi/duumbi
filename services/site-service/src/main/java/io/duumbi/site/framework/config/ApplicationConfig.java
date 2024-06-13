package io.duumbi.site.framework.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import io.duumbi.site.framework.property.ApplicationProperty;

@Configuration
@EnableCaching
@EnableConfigurationProperties({ ApplicationProperty.class })
@ComponentScan({
                "io.duumbi.site.application.**.controller"
})
public class ApplicationConfig {

}
