package io.duumbi.app.architecture;

import com.tngtech.archunit.core.importer.*;
import com.tngtech.archunit.core.importer.ImportOption.*;
import com.tngtech.archunit.junit.*;
import com.tngtech.archunit.lang.*;

import static com.tngtech.archunit.library.GeneralCodingRules.*;

@AnalyzeClasses(
        packages = ArchitectureConstants.APPLICATION_PACKAGE,
        importOptions = {
                ImportOption.DoNotIncludeTests.class,
                DoNotIncludeJars.class,
                ArchitectureConstants.DoNotIncludeGenerated.class,
                ArchitectureConstants.DoNotIncludeMapper.class
        }
)
public class CodingRulesTest {
    @ArchTest
    private final ArchRule no_field_injection = NO_CLASSES_SHOULD_USE_FIELD_INJECTION;
}
