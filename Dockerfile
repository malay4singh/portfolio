FROM httpd
COPY httpd.conf /usr/local/apache2/conf/conf.d/rewrite.conf
COPY ./dist /usr/local/apache2/htdocs/