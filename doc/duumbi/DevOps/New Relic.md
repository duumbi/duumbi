### Requirements
- [New Relic CLI](https://docs.newrelic.com/docs/new-relic-solutions/tutorials/new-relic-cli/)
## Installation
```shell
> brew install newrelic-cli
```

Now, verify the Doppler CLI was installed by checking its version.
```shell
> newrelic --version
```
``






**Add the Java agent argument**

To pass the -javaagent argument on Spring Boot, add it to the command line in which you start your app. Make sure to add it before the -jar argument:

```shell
java -javaagent:/full/path/to/newrelic.jar -jar app.jar
```

**Connect your logs and infrastructure**
Run this command on your host to enable infrastructure and logs metrics:


