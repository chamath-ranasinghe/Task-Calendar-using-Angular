FROM node:17-alpine

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]