# build step
FROM node:10.16.0-alpine AS build

# this makes the build fail in travis ! see https://github.com/nodejs/docker-node/issues/661
# RUN npm install --global yarn

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build
RUN npm prune --production


# Run step
FROM node:10.16.0-alpine

ENV NODE_ENV=production

COPY server.js .
COPY package.json .
COPY --from=build node_modules node_modules
COPY --from=build dist dist

EXPOSE 8080

ENV PORT=8080

CMD npm start
