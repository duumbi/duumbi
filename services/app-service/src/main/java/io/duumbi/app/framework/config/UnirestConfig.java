package io.duumbi.app.framework.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.core.JsonProcessingException;

import jakarta.annotation.PostConstruct;
import kong.unirest.core.ObjectMapper;
import kong.unirest.core.Unirest;


@Configuration
public class UnirestConfig {
    @Autowired
    private com.fasterxml.jackson.databind.ObjectMapper mapper;

    @PostConstruct
    public void postConstruct() {
        Unirest.config().setObjectMapper(new ObjectMapper() {

            @Override
            public <T> T readValue(String value, Class<T> valueType) {
                try {
                    return mapper.readValue(value, valueType);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }

            @Override
            public String writeValue(Object value) {
                try {
                    return mapper.writeValueAsString(value);
                } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                }
            }

        });
    }



}
