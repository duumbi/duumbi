We use Docker Compose for local application development.
## Local development

> [!info] [Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/)
### Build and run your app with Compose

```shell
# Pull images
> docker compose pull

# Start services
> docker compose up -d

# Start services and remove or rename unused services
> docker compose up -d --remove-orphans
```

Docker Compose with Doppler:
```shell
# Pull images
> doppler run -- docker compose pull

# Start services
> doppler run -- docker compose up -d

# Start selected services
> doppler run -- docker compose up -d [service...]

# Start services and remove or rename unused services
> doppler run -- docker compose up -d --remove-orphans
```

### Stops and removes

```shell
# Stops and removes the containers
> doppler run -- docker-compose down

# Remove unused network
> docker network ls
```

### Accessing the Container Shell

```shell
> docker compose exec -ti <container_name> <shell>

# Examples
> docker compose exec -ti maildev sh
> docker compose exec -ti maildev bash
> docker compose exec -ti maildev /bin/bash
```

## Configuration

```shell
# Network
> cat /etc/resolv.conf
> apt update && apt install dnsutils
>
```

## Dockerfile

Mounting of a persistent cache layer when running the RUN instruction at the build phase.

`RUN --mount=type=cache,target=/root/.m2 mvn package`

