# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container to the app directory
WORKDIR /app/packages/web

# Copy package.json and package-lock.json to the container
COPY app/packages/web/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app's files to the container
COPY app/packages/web .

# Build the app
RUN npm run build

# Start the app
CMD [ "npm", "start" ]
