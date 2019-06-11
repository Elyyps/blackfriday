FROM node:10.15.2

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json package-lock.json /usr/src/app/

RUN rm -rf node_modules && npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
