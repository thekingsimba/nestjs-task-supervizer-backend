#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install && npm run build && ls
EXPOSE 3000
CMD ["node", "dist/main.js"]
