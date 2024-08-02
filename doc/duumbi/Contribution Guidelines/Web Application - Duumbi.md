---
tags:
  - contribution
  - guidline
---
This page provides guidelines on how to contribute to app.duumbi.io web site.

## Development
### Requirements

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Vite Frontend Tooling](https://vitejs.dev/)
- [Ant Design - React UI framework](https://ant.design/)
- [React](https://react.dev/)
	- [React Router](https://reactrouter.com/en/main)
	- [Auth0 React SDK for Single Page Apps](https://auth0.com/docs/libraries/auth0-react)
	- [React Icons (react-icons.github.io)](https://react-icons.github.io/react-icons/)
- [Day.js · JavaScript date utility library](https://day.js.org/en/)

For macOS users, you can install them:
```shell
# Install nvm
> brew install nvm

# Set node version
> nvm use

# Vite
> npm create vite@latest -- --template react-ts

# Ant Design
> npm install antd

# React Router
> npm install react-router-dom@6

# Auth0
> npm install @auth0/auth0-react

# React Icons
> npm install react-icons

# Day.js
> npm install dayjs
```

### Start local site
``` shell
> npm run build
```
### Create a web site with prompt npm
Run the command to build a new site, it creates folder named `public` and generates required files within it:
```shell
> npm run build
```

###  Linter for JavaScript code
``` shell
> npm run lint
```

## Deployment

Make a pull request to the main branch, which will initiate the Azure Static Web App integration process.
