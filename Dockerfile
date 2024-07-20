# Stage 1: Build the Angular application
FROM node:20 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
# RUN npm run build -- --prod
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

# # Stage 2: Serve the application from Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist/* /usr/share/nginx/html/
# COPY nginx.conf /etc/nginx/nginx.conf