FROM node:20

WORKDIR /app

COPY ./apollo_server/prisma .
COPY ./apollo_server/src ./src
COPY ./apollo_server/package.json .
COPY ./apollo_server/tsconfig.json .
COPY ./apollo_server/Dockerfile .

RUN npm install

RUN npm run compile

EXPOSE 4000

CMD ["node", "./dist/index.js"]