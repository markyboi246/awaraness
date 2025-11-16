# Dockerfile for React Native iOS Development
# Note: iOS builds require macOS. This Dockerfile provides the Node.js environment.
# For full iOS builds, use docker-compose with a macOS host or GitHub Actions.

FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    watchman \
    && rm -rf /var/lib/apt/lists/*

# Install global dependencies
RUN npm install -g react-native-cli

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Metro bundler port
EXPOSE 8081

# Default command
CMD ["npm", "start"]
