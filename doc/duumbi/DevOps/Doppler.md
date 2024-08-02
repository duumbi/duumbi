Secret Management
> [!info] Doppler Documentation: [Welcome 👋 (doppler.com)](https://docs.doppler.com/docs/start)

## Installation
The Doppler CLI provides access to your secrets in every environment, from local development, CI/CD, staging, and production.
```shell
# Prerequisite. gnupg is required for binary signature verification
> brew install gnupg

# Next, install using brew (use `doppler update` for subsequent updates)
> brew install dopplerhq/cli/doppler
```

Now, verify the Doppler CLI was installed by checking its version.
```shell
> doppler --version
```
``
You can also upgrade the CLI to the latest version at any time.
```shell
> doppler update
```

## Authentication
In order for the Doppler CLI to access secrets for your projects, it needs an access token. For local development, we use the `doppler login` command which will open a browser window and ask you to authenticate.
``` shell
> doppler login
```

## Project Setup
Mono-repo style project config: `doppler.yaml`
``` shell
# Change to your project's directory
cd ./your/project/directory

# Select project and config
> doppler setup --no-interactive

# Test
> doppler configs get
> doppler secrets download --no-file --format env
