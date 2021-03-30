
FROM nginx
  
EXPOSE 5003

COPY /dist /usr/share/nginx/html

ENTRYPOINT nginx -g "daemon off;"