package io.duumbi.site.framework.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import kong.unirest.core.Unirest;
import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class ObjectMapperConfig {

    @Bean
    @Primary
    public ObjectMapper objectMapper() {
        var mapper = new ObjectMapper();
        // objectMapper.registerModule(new Jdk8Module());
        // objectMapper.registerModule(new JavaTimeModule());
        // objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        // objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);

        // objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        // objectMapper.setPropertyNamingStrategy(new PropertyNamingStrategies.SnakeCaseStrategy());
        mapper.findAndRegisterModules();
        log.info("ObjectMapper configured");

        return mapper;
    }


}
