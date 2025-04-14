FROM node:jod

WORKDIR /var/www/html/frontend

COPY frontend .

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

#RUN apt-get update -y \
#    && apt-get install -y git curl libpq-dev libpng-dev libonig-dev libxml2-dev zip unzip

RUN npm ci

ENTRYPOINT ["npm", "run", "dev"]
