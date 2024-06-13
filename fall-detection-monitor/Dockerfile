# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker's layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Ensure TypeScript and Next.js dependencies are installed
RUN npm install --save-exact --save-dev typescript next

# Set ownership to node user
RUN chown -R node:node /usr/src/app

# Switch to non-root user
USER node

# Copy the rest of the source files into the image
COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]
