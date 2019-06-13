FROM node:8-slim

# Base Image:
# Includes: Static http server with gi-frontend server.js
# and dependencies with node:8-sim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm install --only=production

COPY . .

EXPOSE 443
CMD [ "node", "server.js" ]
