
ARG NODE_VERSION=21.5.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.


WORKDIR /usr/src/app

COPY ./package.json .

RUN npm i

COPY . .


CMD ["npm", "run", "dev","--","--host"]