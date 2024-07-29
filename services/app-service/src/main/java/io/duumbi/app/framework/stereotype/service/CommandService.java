package io.duumbi.app.framework.stereotype.service;

import org.springframework.stereotype.*;

import java.lang.annotation.*;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface CommandService {

    String value() default "";

}
