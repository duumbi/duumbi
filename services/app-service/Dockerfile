FROM maven:3.9-eclipse-temurin-21 AS builder
LABEL stage=builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src src
RUN mvn package -Dtest.skipUnitTest=true
RUN java -Djarmode=layertools -jar target/app-service.jar extract

FROM eclipse-temurin:21-jre-alpine
RUN addgroup -S duumbi && adduser -S duumbi -G duumbi
USER duumbi
WORKDIR /app
COPY --from=builder app/dependencies/ ./
COPY --from=builder app/spring-boot-loader/ ./
COPY --from=builder app/snapshot-dependencies/ ./
COPY --from=builder app/application/ ./

COPY --from=builder app/target/newrelic/newrelic.jar ./newrelic.jar
COPY --from=builder app/target/newrelic/newrelic.yml ./newrelic.yml

ENTRYPOINT ["java",\
	"-javaagent:newrelic.jar",\
	"org.springframework.boot.loader.launch.JarLauncher"\
]
