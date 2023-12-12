# Build Angular Application image
FROM node:20.10.0 as node
LABEL author="Donato Cappiello"

# Set working directory.
WORKDIR /app

# Assuming that the Dockerfile is located in the same directory as your angular-app folder.
# Copy package.json and package-lock.json (if available)
COPY ./angular-app/package*.json ./

# Install app dependencies.
RUN npm install

# Copy the rest of the application source code
COPY ./angular-app/ .

# Build app with production flag
RUN npm run build --prod

# Copy Angular image (alias node) into nginx image for deployment
FROM nginx
VOLUME /var/cache/nginx

# Copy the dist folder in the working directory (node) into the folder used by nginx.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app /usr/share/nginx/html