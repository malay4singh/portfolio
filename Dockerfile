FROM httpd
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./dist /usr/local/apache2/htdocs/