# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Adjust if your Angular project name differs:
RUN npm run build -- --configuration=production

# ---------- Runtime stage ----------
FROM nginx:alpine
# Copy compiled files (replace "angular.json" project name if needed)
COPY --from=build /app/dist/test-app/browser /usr/share/nginx/html/

# Basic Nginx config (keeps default)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
