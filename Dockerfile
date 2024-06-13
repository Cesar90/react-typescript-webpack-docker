# Install dependencies only when needed
FROM node:18-alpine3.15

# COPY install_chromium.sh        /usr/local/bin/install_chromium.sh
# COPY install_graphicsmagick.sh  /usr/local/bin/install_graphicsmagick.sh

# RUN apk --no-cache update && apk --no-cache upgrade
# RUN sh /usr/local/bin/install_chromium.sh
# RUN sh /usr/local/bin/install_graphicsmagick.sh

# ENV CHROME_BIN /usr/bin/chromium-browser
# ENV LIGHTHOUSE_CHROMIUM_PATH /usr/bin/chromium-browser

# Build step
# 1. copy package.json and package-lock.json to /app dir
RUN mkdir /app
COPY package*.json /app
# 2. Change working directory to newly created app dir
WORKDIR /app
# 3 . Install dependencies
RUN npm install
# 4. Copy the source code to /app dir
COPY . .
# 5. Expose port 3000 on the container
EXPOSE 3000
# 6. Run the app
CMD ["npm", "run", "start"]
# CMD ["npm", "run", "start:dev"]
# Create and define the node_modules's cache directory.
# RUN mkdir /usr/src/cache
# WORKDIR /usr/src/cache

# # Install the application's dependencies into the node_modules's cache directory.
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# # Create and define the application's working directory.
# # RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# COPY entrypoint.sh /usr/src/app/entrypoint.sh

# RUN chmod +x /usr/src/app/entrypoint.sh
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
