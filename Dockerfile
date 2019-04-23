FROM node:11-alpine

RUN mkdir -p /app/src/

WORKDIR /app/src/

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]
