FROM node:latest

WORKDIR /app
COPY bin ./bin
COPY public ./public
COPY routes ./routes
COPY app.js ./
COPY *.json ./

RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]
