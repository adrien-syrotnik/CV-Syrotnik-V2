FROM node:latest
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
RUN npm i
CMD ["npm", "run", "start"]