FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libpq-dev \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_pgsql zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer require laravel/sanctum

EXPOSE 8000

CMD [ "php artisan key:generate" ]