FROM ghost:latest
# Use the latest version of the official Node.js image as the base image
# FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
# COPY package*.json ./
CMD ["ls", "-la"]
# # Install the dependencies
# RUN npm install

# # Copy the rest of the application code to the working directory
# COPY . .

# Expose port 2368 for Ghost to listen on
EXPOSE 2368

# Start the Ghost application
# CMD ["npm", "start"]
