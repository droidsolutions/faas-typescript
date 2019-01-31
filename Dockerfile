FROM alpine:3.8

# prepare work directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/dist

# install nodejs, curl and the faas-watchdog
RUN apk --update add nodejs nodejs-npm
RUN apk --no-cache add curl \
    && curl -sL https://github.com/openfaas/faas/releases/download/0.9.14/fwatchdog > /usr/bin/fwatchdog \
    && chmod +x /usr/bin/fwatchdog

# install typescript
RUN  npm install typescript -g

# copy package-files
COPY package.json* .
COPY handler .

# install npm dependencies and compile
RUN npm install --only=prod
COPY . .
RUN npm run build

# run watchdog
ENV fprocess="node dist/handler.js"
CMD ["fwatchdog"]
