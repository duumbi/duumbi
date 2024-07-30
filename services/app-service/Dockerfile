# JAVA_VERSION sets the Java version for the build
ARG JAVA_VERSION=21

# MAVEN_VERSION sets the Maven version for the build
ARG MAVEN_VERSION=3.9

# builder is the base stage for building the project
FROM maven:${MAVEN_VERSION}-eclipse-temurin-${JAVA_VERSION} AS builder
LABEL stage=builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src src
RUN mvn package -Dtest.skipUnitTest=true
RUN java -Djarmode=layertools -jar target/app-service.jar extract

FROM eclipse-temurin:${JAVA_VERSION}-jre-alpine
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
