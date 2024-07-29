package io.duumbi.app.framework.property;

/**
 * Create property groups using prefixes
 */
public class PropertyPrefix {
    private PropertyPrefix() {
        throw new IllegalStateException("PropertyPrefix class");
    }

    public static final String APPLICATION = "application";
    public static final String AUTH0_MANAGEMENT_API = "auth0.management.api";
}
