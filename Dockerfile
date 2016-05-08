FROM registry.aliyuncs.com/sweetspot/nodejs-template:latest

MAINTAINER Fnsy <vs429365799@gmail.com>

ADD sources.list /etc/apt/sources.list
COPY project /home/

WORKDIR /home/

# RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
# RUN cnpm install -g pm2
RUN cnpm install --production

CMD npm run production
