FROM node:7.10.0
MAINTAINER claycarpenter@gmail.com

# Install Angular CLI tools
RUN npm install -g @angular/cli

# Prep app directory
RUN mkdir -p /app
WORKDIR /app

# Copy app into app directory
COPY . ./

EXPOSE 4200

CMD npm start
