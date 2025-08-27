# Use Debian base
FROM node:18-slim

# Install wget and download working Tectonic binary with runtime dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends wget ca-certificates libgraphite2-3 libharfbuzz0b libfontconfig1 && \
    wget -O /tmp/tectonic.tar.gz https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic@0.15.0/tectonic-0.15.0-x86_64-unknown-linux-gnu.tar.gz && \
    tar -xzf /tmp/tectonic.tar.gz -C /usr/local/bin/ && \
    rm /tmp/tectonic.tar.gz && \
    apt-get remove -y wget && \
    apt-get autoremove -y && \
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
