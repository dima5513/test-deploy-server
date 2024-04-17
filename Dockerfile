FROM node:20.12.0-alpine

WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_OPTIONS="--max-old-space-size=8192"
EXPOSE 8080
