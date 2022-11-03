FROM node:alpine
WORKDIR /app
COPY /app/package.json ./package.json
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]