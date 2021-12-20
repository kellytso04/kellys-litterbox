FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server/index.js
EXPOSE 8000

# FROM postgres:latest
# ENV POSTGRES_USER kellytso
# ENV POSTGRES_HOST_AUTH_METHOD=trust
# ENV POSTGRES_DB sdc
# COPY backup.sql /docker-entrypoint-initdb.d/
# EXPOSE 5432