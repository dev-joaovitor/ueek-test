FROM php:8.3.19-fpm

ARG UID
ARG GID

WORKDIR /var/www/html/backend

COPY backend .

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# install utils
RUN apt-get update -y \
    && apt-get install -y git curl libpq-dev libpng-dev libonig-dev libxml2-dev zip unzip

# install latest composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'.PHP_EOL; } else { echo 'Installer corrupt'.PHP_EOL; unlink('composer-setup.php'); exit(1); }" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer

ENV PATH="~/.composer/vendor/bin:$PATH"

RUN docker-php-ext-install pdo pdo_pgsql mbstring gd

RUN rm -rf vendor node_modules

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

RUN composer install \
    && source ~/.bashrc \
    && nvm install \
    && npm install

RUN php artisan key:generate --ansi

ENTRYPOINT [ "composer", "run", "dev" ]
