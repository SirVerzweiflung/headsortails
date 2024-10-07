# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install Git to clone the repo
RUN apk add --no-cache git

# Clone the GitHub repository (replace <your-repo-url> with your actual repo URL)
RUN git clone https://github.com/SirVerzweiflung/headsortails.git .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Use a lightweight server to serve the build files
FROM nginx:alpine

# Copy the built app files to Nginx
COPY --from=0 /app/build /usr/share/nginx/html/

# Expose port 80
EXPOSE 1681

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
