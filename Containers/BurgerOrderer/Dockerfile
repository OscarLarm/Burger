FROM node:14-alpine3.17
WORKDIR /usr/src/app
COPY . /BurgerOrderer
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]