# ./frontend/Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# If you ever split API to a subdomain, set VITE_API_BASE; not needed for same-domain /api.
# ENV VITE_API_BASE=https://api.patioblindsdirect.com
RUN npm run build

FROM nginx:1.27-alpine
# SPA fallback + caching for static assets
RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / {\n\
    try_files $uri /index.html;\n\
  }\n\
  location ~* \\.(js|css|png|jpg|jpeg|gif|webp|svg|ico|woff2?)$ {\n\
    expires 30d;\n\
    access_log off;\n\
  }\n\
}\n' > /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
HEALTHCHECK CMD wget -q -O- http://localhost/ || exit 1
