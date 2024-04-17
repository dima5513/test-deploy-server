FROM node:20.12.0-alpine

WORKDIR /app

COPY ./package.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build
ENV NODE_OPTIONS="--max-old-space-size=8192"
EXPOSE 8080
