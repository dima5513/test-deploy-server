FROM node:20.12.0-alpine

WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080
