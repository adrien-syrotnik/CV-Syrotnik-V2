# syntax=docker/dockerfile:1
### Stage 1: build the Angular app (Angular 13 needs Node 12/14/16) ###
FROM node:16-alpine AS build
WORKDIR /app
COPY front/package.json front/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY front/ ./
RUN npx ng build --configuration production

### Stage 2: static server, non-root, port 8080 ###
FROM nginxinc/nginx-unprivileged:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist/syrotnik-cv /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO /dev/null http://127.0.0.1:8080/healthz || exit 1
