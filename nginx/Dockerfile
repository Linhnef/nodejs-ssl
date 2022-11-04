FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY cert.crt /etc/nginx/cert.crt
COPY key.key /etc/nginx/key.key