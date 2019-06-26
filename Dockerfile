FROM mhart/alpine-node:10.16.0

# this makes the build fail in travis ! see https://github.com/nodejs/docker-node/issues/661
# RUN npm install --global yarn

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD npm start -p 8080 -s build
