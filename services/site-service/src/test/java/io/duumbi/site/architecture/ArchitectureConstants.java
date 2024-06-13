package io.duumbi.site.architecture;

import com.tngtech.archunit.core.importer.ImportOption;
import com.tngtech.archunit.core.importer.Location;

public class ArchitectureConstants {
    // Suffixes
    public static final String CONTROLLER_SUFFIX = "Controller";
    public static final String REPOSITORY_SUFFIX = "Repository";
    public static final String MAPPER_SUFFIX = "Mapper";
    public static final String EXCEPTION_SUFFIX = "Exception";
    public static final String SPECIFICATION_SUFFIX = "Specification";
    public static final String COMMAND_SERVICE_SUFFIX = "CommandService";
    public static final String QUERY_SERVICE_SUFFIX = "QueryService";
    public static final String DOMAIN_COMMAND_SERVICE_SUFFIX = "DomainCommandService";
    public static final String DOMAIN_QUERY_SERVICE_SUFFIX = "DomainQueryService";

    // Packages
    public static final String CONTROLLER_PACKAGE = "..controller..";
    public static final String LISTENER_PACKAGE = "..listener..";
    public static final String REPOSITORY_PACKAGE = "..repository..";
    public static final String MAPPER_PACKAGE = "..mapper..";
    public static final String SERVICE_PACKAGE = "..service";
    public static final String DOMAIN_SERVICE_PACKAGE = "..service.domainservice";
    public static final String EXCEPTION_PACKAGE = "..exception..";
    public static final String SPECIFICATION_PACKAGE = "..specification..";
    public static final String MODEL_PACKAGE = "..model";
    public static final String DTO_PACKAGE = "..dto..";
    public static final String EVENT_PACKAGE = "..event..";
    public static final String HELPER_PACKAGE = "..helper..";

    // Package to scan
    public static final String DEFAULT_PACKAGE = "io.duumbi.site";
    public static final String APPLICATION_PACKAGE = "io.duumbi.site.application";

     // Explanations
     public static final String ANNOTATED_EXPLANATION = "Classes in %s package should be annotated with %s";

     public static final class DoNotIncludeGenerated implements ImportOption {
        public DoNotIncludeGenerated() {
        }

        public boolean includes(Location location) {
            return !(location.contains("generated") || location.contains("_.") || location.contains("MapperImpl"));
        }
    }

    public static final class DoNotIncludeMapper implements ImportOption {
        public DoNotIncludeMapper() {
        }

        public boolean includes(Location location) {
            return !(location.contains("Mapper"));
        }
    }

    private ArchitectureConstants() {
    }
}
