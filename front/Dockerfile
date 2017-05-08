FROM node:7.10.0
MAINTAINER claycarpenter@gmail.com

# Install Angular CLI tools
RUN npm install -g @angular/cli

# Prep app directory
RUN mkdir -p /app
WORKDIR /app

# Copy app into app directory
COPY . ./

# Install required npm modules
RUN npm install

EXPOSE 4200

# Launch Angular CLI dev server
CMD ng serve --host 0.0.0.0
