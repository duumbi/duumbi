package io.duumbi.site.framework.stereotype.service.domainservice;

import org.springframework.core.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.validation.annotation.*;

import java.lang.annotation.*;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
@Validated
public @interface DomainCommandService {
    @AliasFor(annotation = Component.class)
    String value() default "";
}
