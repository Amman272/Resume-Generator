# Use a small Node image
FROM node:18-slim

# Install tectonic (LaTeX engine) and certs
RUN apt-get update && \
    apt-get install -y --no-install-recommends tectonic ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# App directory
WORKDIR /app

# Install only production deps
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the app
COPY . .

# Configure port (platforms set PORT automatically)
ENV PORT=3000

# Start the backend server
CMD ["node", "Backend/index.js"]