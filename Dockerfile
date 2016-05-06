FROM registry.aliyuncs.com/sweetspot/nodejs-template:latest

MAINTAINER Fnsy <vs429365799@gmail.com>

ADD sources.list /etc/apt/sources.list
COPY . /home/

WORKDIR /home/

# RUN npm install --production

# CMD npm start
