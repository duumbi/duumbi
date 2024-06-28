package io.duumbi.site.framework.property;

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
@ConfigurationProperties(prefix = PropertyPrefix.AUTH0_MANAGEMENT_API)
public class Auth0ManagementApiProperty {

    /**
     * The domain name of the Auth0 Management API.
     */
    @NotNull
    @NotEmpty
    private String domain;

    /**
     * Client ID value of the Machine-to-Machine Application.
     */
    @NotNull
    @NotEmpty
    private String clientId;

    /**
     * Client Secret value of the Machine-to-Machine Application.
     */
    @NotNull
    @NotEmpty
    private String clientSecret;

    /**
     * Identifier value of the Auth0 Management API.
     */
    @NotNull
    @NotEmpty
    private String identifier;
}
