FROM node:20

WORKDIR /app
VOLUME /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]