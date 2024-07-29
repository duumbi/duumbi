package io.duumbi.app.architecture;

import java.util.Arrays;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.constructors;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.fields;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.methods;
import static com.tngtech.archunit.lang.conditions.ArchConditions.notBeStatic;
import static com.tngtech.archunit.core.domain.JavaModifier.*;
import static com.tngtech.archunit.lang.conditions.ArchConditions.haveModifier;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.tngtech.archunit.core.domain.JavaMethod;
import com.tngtech.archunit.lang.ArchCondition;
import com.tngtech.archunit.lang.ArchRule;

import io.duumbi.app.framework.stereotype.service.CommandService;
import io.duumbi.app.framework.stereotype.service.QueryService;

public class CommonRules {
    //Classes
    static ArchRule interfacesAreOnlyAllowedRule(String packageName, String... excludedPackages) {
        return classes().that()
                .resideInAPackage(packageName)
                .and().resideOutsideOfPackages(excludedPackages)
                .should().beInterfaces()
                .because(String.format("Resources should be interfaces in %s", packageName));
    }

    static ArchRule componentAnnotationIsNotAllowedRule(String packageName) {
        return classes().that()
                .resideInAPackage(packageName)
                .should().notBeAnnotatedWith(Component.class)
                .because(String.format("Component annotation is not allowed in %s", packageName));
    }

    static ArchRule springAnnotationsClassesAreNotAllowedRule(String... packageNames) {
        return classes().that()
                .resideInAnyPackage(packageNames)
                .should().notBeAnnotatedWith(Service.class)
                .andShould().notBeAnnotatedWith(Component.class)
                .andShould().notBeAnnotatedWith(Configuration.class)
                .andShould().notBeAnnotatedWith(ConfigurationProperties.class)
                .andShould().notBeAnnotatedWith(Bean.class)
                .andShould().notBeAnnotatedWith(Controller.class)
                .andShould().notBeAnnotatedWith(RestController.class)
                .andShould().notBeAnnotatedWith(Repository.class)
                .andShould().notBeAnnotatedWith(QueryService.class)
                .andShould().notBeAnnotatedWith(CommandService.class)
                .because(String.format("Classes in %s should not be annotated with Spring annotations",
                        Arrays.toString(packageNames)));
    }

    //Fields
    static ArchRule fieldsShouldNotBePublic(String packageName) {
        return fields().that()
                .areDeclaredInClassesThat().resideInAPackage(packageName)
                .should().notBePublic()
                .because(String.format("Public fields are not allowed in %s", packageName));
    }

    static ArchRule publicAndFinalFieldsAreNotAllowedRule(String... packageNames) {
        return fields().that()
                .areDeclaredInClassesThat().resideInAnyPackage(packageNames).and()
                .areDeclaredInClassesThat().areNotEnums()
                .and().doNotHaveName("serialVersionUID")
                .should().notBeFinal()
                .andShould().notBePublic()
                .because(String.format("Fields with public and final modifiers are not allowed in %s", Arrays.toString(packageNames)));
    }

    //Constructors
    static ArchRule publicConstructorsRule(String packageName) {
        return constructors().that()
                .areDeclaredInClassesThat().resideInAPackage(packageName).and()
                .areDeclaredInClassesThat().areNotAnonymousClasses()
                .should().bePublic()
                .because(String.format("Public constructors are only allowed in %s", packageName));
    }

    //Methods
    static ArchRule beanMethodsAreNotAllowedRule(String packageName) {
        return methods().that()
                .areDeclaredInClassesThat().resideInAPackage(packageName)
                .should().notBeAnnotatedWith(Bean.class)
                .because(String.format("Bean methods are not allowed in %s", packageName));
    }

    static ArchRule privateMethodsAreNotAllowedRule(String packageName) {
        return methods().that()
                .areDeclaredInClassesThat().resideInAPackage(packageName)
                .should(notBeStaticIfUserCreated())
                .because(String.format("Private methods are not allowed in %s", packageName));
    }

    static ArchRule staticMethodsAreNotAllowedRule(String packageName) {
        return methods()
                .that().areDeclaredInClassesThat().resideInAPackage(packageName)
                .should(notBeStaticIfUserCreated())
                .because(String.format("Static methods are not allowed in %s", packageName));
    }

    static ArchCondition<? super JavaMethod> notBeStaticIfUserCreated() {
        return notBeStatic().or(haveModifier(SYNTHETIC))
                .as("not be static if user-created");
    }

}
