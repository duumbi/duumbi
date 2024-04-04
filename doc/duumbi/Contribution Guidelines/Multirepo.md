---
tags:
  - contribution
  - guidline
---
This page provides guidelines on how to contribute to Duumbi. Duumbi uses Git to manage everything on the platform  [GitHub](https://github.com/duumbi).

## Development
### Requirements
- homebrew
- pre-commit

For macOS users, you can install them:
```shell
# Install pre-commit
> brew install pre-commit
```

## Commits
We using [pre-commit](https://pre-commit.com/)hooks. Install the git hook scripts:
```shell
# Install the git hook scripts
> pre-commit install

# (optional) Run against all the files
> pre-commit run --all-files
```

### Conventional Commits
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)are a type of commit message format that helps to make the commit history more readable and easier to navigate.

