FROM node:latest

WORKDIR /usr/src/app

EXPOSE 8000

CMD yarn run setup && yarn start
