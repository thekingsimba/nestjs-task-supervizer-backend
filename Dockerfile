#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN ls
EXPOSE 3000
CMD ["node", "dist/main.js"]
