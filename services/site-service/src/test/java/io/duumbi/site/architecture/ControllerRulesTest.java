package io.duumbi.site.architecture;

import static io.duumbi.site.architecture.ArchitectureConstants.ANNOTATED_EXPLANATION;
import static io.duumbi.site.architecture.ArchitectureConstants.CONTROLLER_SUFFIX;
import static io.duumbi.site.architecture.ArchitectureConstants.CONTROLLER_PACKAGE;
import static io.duumbi.site.architecture.CommonRules.componentAnnotationIsNotAllowedRule;
import static io.duumbi.site.architecture.CommonRules.fieldsShouldNotBePublic;
import static io.duumbi.site.architecture.CommonRules.publicConstructorsRule;
import static io.duumbi.site.architecture.CommonRules.beanMethodsAreNotAllowedRule;
import static io.duumbi.site.architecture.CommonRules.privateMethodsAreNotAllowedRule;
import static io.duumbi.site.architecture.CommonRules.staticMethodsAreNotAllowedRule;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.methods;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import com.tngtech.archunit.core.importer.ImportOption;
import com.tngtech.archunit.core.importer.ImportOption.DoNotIncludeJars;

@AnalyzeClasses(packages = ArchitectureConstants.DEFAULT_PACKAGE, importOptions = {
        ImportOption.DoNotIncludeTests.class, DoNotIncludeJars.class, ArchitectureConstants.DoNotIncludeGenerated.class
})
public class ControllerRulesTest {
    // Classes
    @ArchTest
    static final ArchRule component_annotation_is_not_allowed = componentAnnotationIsNotAllowedRule(CONTROLLER_PACKAGE);

    @ArchTest
    static final ArchRule classes_should_be_annotated = classes()
            .that().resideInAPackage(CONTROLLER_PACKAGE).should()
            .beAnnotatedWith(RestController.class)
            .andShould().notBeAnnotatedWith(Controller.class)
            .because(String.format(ANNOTATED_EXPLANATION, CONTROLLER_SUFFIX, "@RestController")
                    + ", and not with @Controller");

    // Fields
    @ArchTest
    static final ArchRule fields_should_not_be_public = fieldsShouldNotBePublic(CONTROLLER_PACKAGE);

    // Constructors
    @ArchTest
    static final ArchRule constructors_should_not_be_private = publicConstructorsRule(CONTROLLER_PACKAGE);

    // Methods
    @ArchTest
    static final ArchRule bean_methods_are_not_allowed = beanMethodsAreNotAllowedRule(CONTROLLER_PACKAGE);

    @ArchTest
    static final ArchRule private_methods_are_not_allowed = privateMethodsAreNotAllowedRule(CONTROLLER_PACKAGE);

    @ArchTest
    static final ArchRule static_methods_are_not_allowed = staticMethodsAreNotAllowedRule(CONTROLLER_PACKAGE);

    @ArchTest
    static final ArchRule methods_should_return_response_entity = methods()
            .that().arePublic().and()
            .areDeclaredInClassesThat().resideInAPackage(CONTROLLER_PACKAGE).should()
            .haveRawReturnType(Flux.class).orShould().haveRawReturnType(Mono.class)
            .because("Controller endpoints should return a ResponseEntity object");
}
