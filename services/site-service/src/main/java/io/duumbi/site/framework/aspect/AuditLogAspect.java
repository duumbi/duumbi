package io.duumbi.site.framework.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import io.duumbi.site.framework.stereotype.AuditData;

import java.lang.reflect.Method;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class AuditLogAspect {

    @Before("execution(* io.duumbi.site.application..*Controller.*(..)) && args(..,jwt, exchange)")
    public void controllerAudit(JoinPoint joinPoint, Jwt jwt, ServerWebExchange exchange) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        AuditData auditDataAnnotation = method.getAnnotation(AuditData.class);
        String auditData = auditDataAnnotation.value();

        log.info("Access: [data:{}, userId: {}, client: {}]", auditData, jwt.getSubject(),
                exchange.getRequest().getHeaders().get("Origin"));
    }
}
