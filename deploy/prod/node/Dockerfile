FROM node:18-alpine

WORKDIR /app

RUN mkdir -p frontend

COPY frontend/package*.json ./frontend/

RUN npm ci --production --prefix frontend

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--prefix", "frontend"]

