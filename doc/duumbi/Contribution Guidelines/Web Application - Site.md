---
tags:
  - contribution
  - guidline
---
This page provides guidelines on how to contribute to duumbi.io web site.

## Development
### Requirements

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Tailwind CSS](https://tailwindcss.com/)
- [Serve](https://github.com/vercel/serve)
- [Prettier](https://prettier.io/)

For macOS users, you can install them:
```shell
# Install nvm
> brew install nvm

# Set node version
> nvm use

# Install serve
> npm install --global serve

# Install packages
> npm install
```

### Build CSS
```shell
> npm run css

# watch
> npm run dev:css
```
### Create a web site with prompt npm
Run the command to build a new site, it creates folder named `public` and generates required files within it:
```shell
> npm run build

# test
> npm run srv
```

## Deployment

Make a pull request to the main branch, which will initiate the Azure Static Web App integration process.

https://gray-plant-0f013cd03.5.azurestaticapps.net/
https://gray-plant-0f013cd03-1.westeurope.5.azurestaticapps.net/