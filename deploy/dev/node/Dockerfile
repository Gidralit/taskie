FROM node:18-alpine

WORKDIR /app

RUN mkdir -p frontend

COPY frontend/package*.json ./frontend/

RUN npm ci --prefix frontend

COPY . .

EXPOSE 5173

CMD ["npm", "start", "--prefix", "frontend"]