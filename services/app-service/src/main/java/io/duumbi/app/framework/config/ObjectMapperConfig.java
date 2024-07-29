package io.duumbi.app.framework.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.fasterxml.jackson.databind.ObjectMapper;

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
