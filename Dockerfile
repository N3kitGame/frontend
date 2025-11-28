# образ для сборки
FROM node:20-alpine AS builder

# Рабочая папка
WORKDIR /app

# Копируем зависимости
COPY package*.json ./
RUN npm ci

# Копируем код
COPY . .

# Сборка
RUN npm run build

# Веб-сервер
FROM nginx:alpine

# Перенос сайта
COPY --from=builder /app/dist /usr/share/nginx/html

# Порт
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]