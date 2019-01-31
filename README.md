# faas-typescript-nodejs

This is an example for an implementation of a typescript/nodejs handler for openfaas. With integrated build-toolchian composed of husky(commitlint) and linter(prettier).

## npm targets

**npm run build**: Build directive to compile typescript in ./handler to js in ./dist

**npm run faas-build**: Builds the docker-image for openfaas

**npm run faas-deploy**: Deploys the docker-image for openfaas on the configured gateway.


