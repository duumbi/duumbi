package io.duumbi.site.architecture;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;

import org.springframework.web.bind.annotation.RestController;

import com.tngtech.archunit.core.importer.ImportOption;
import com.tngtech.archunit.core.importer.ImportOption.DoNotIncludeJars;

@AnalyzeClasses(packages = ArchitectureConstants.DEFAULT_PACKAGE, importOptions = {
                ImportOption.DoNotIncludeTests.class, DoNotIncludeJars.class,
                ArchitectureConstants.DoNotIncludeGenerated.class
})
public class NamingConventionTest {
        @ArchTest
        static ArchRule controller_should_be_prefixed = classes()
                        .that().resideInAPackage(ArchitectureConstants.CONTROLLER_PACKAGE)
                        .and().areAnnotatedWith(RestController.class)
                        .should().haveSimpleNameEndingWith(ArchitectureConstants.CONTROLLER_SUFFIX);

        @ArchTest
        static ArchRule classes_named_controller_should_be_in_a_controller_package = classes()
                        .that().haveSimpleNameContaining(ArchitectureConstants.CONTROLLER_SUFFIX)
                        .should().resideInAPackage(ArchitectureConstants.CONTROLLER_PACKAGE);

}
