FROM node:20-alpine

WORKDIR /app

COPY . .

# ENV NODE_ENV=production

# ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]