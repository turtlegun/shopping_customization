# Use the official Node.js 14 image as base
FROM node:19-alpine


WORKDIR /app


COPY package.json ./
RUN npm install



COPY . .




EXPOSE 3000


CMD ["npm", "start"]
