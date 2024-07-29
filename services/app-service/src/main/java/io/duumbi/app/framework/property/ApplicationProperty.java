package io.duumbi.app.framework.property;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Initial properties for the application.
 */
@Getter
@Setter
@Validated
@ConfigurationProperties(prefix=PropertyPrefix.APPLICATION)
public class ApplicationProperty {

    /**
     * The installation environment of the application.
     */
    @NotNull
    @NotEmpty
    private String environment;

    /**
     * The URL of the client used to make it an allowed CORS origin.
     */
    @NotNull
    @NotEmpty
    private String clientOriginUrl;
}
