# faas-typescript

This is an example for an implementation of a typescript/nodejs handler for openfaas. With integrated build-toolchian composed of husky(commitlint) and linter(prettier).

## non-npm dependencies

In oder to execute the build- and deploy targets, you will need to install: ["faas-cli"](https://github.com/openfaas/faas-cli). Edit the stack.yml file according to your cluster configuration. This prject is optimized for a deployment on kubernetes (["faas-netes"](https://github.com/openfaas/faas-netes)).


## npm targets

**npm run build**: Build directive to compile typescript in ./handler to js in ./dist

**npm run faas-build**: Builds the docker-image for openfaas

**npm run faas-deploy**: Deploys the docker-image for openfaas on the configured gateway.

