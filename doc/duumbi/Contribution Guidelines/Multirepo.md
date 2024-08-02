---
tags:
  - contribution
  - guidline
  - homebrew
---
This page provides guidelines on how to contribute to Duumbi. Duumbi uses Git to manage everything on the platform  [GitHub](https://github.com/duumbi).

## Development
### Requirements
- homebrew
- pre-commit
- doppler

For macOS users, you can install them:
```shell
# Install pre-commit
> brew install pre-commit

# Install Doppler CLI
> brew install gnupg

```

## Commits
We using [pre-commit](https://pre-commit.com/)hooks. Install the git hook scripts:
```shell
# Install the git hook scripts
> pre-commit install

# (optional) Run against all the files
# Prerequisite. gnupg is required for binary signature verification
> pre-commit run --all-files
# Next, install using brew (use `doppler update` for subsequent updates)
> brew install dopplerhq/cli/doppler
```

### Conventional Commits
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)are a type of commit message format that helps to make the commit history more readable and easier to navigate.

## [[Doppler]]
You can also upgrade the CLI to the latest version at any time.
``` Shell
> doppler update
```

### Authentication
In order for the Doppler CLI to access secrets for your projects, it needs an access token. For local development, we use the `doppler login` command which will open a browser window and ask you to authenticate.
``` shell
> doppler login
```

### Project Setup
Mono-repo style project config: `doppler.yaml`
``` shell
> doppler setup --no-interactive

# Test
> doppler secrets download --no-file --format env
```
