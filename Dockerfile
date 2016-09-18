FROM node:slim

MAINTAINER spondbob spondbob@eamca.com

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev python

# Install Meteor
RUN curl https://install.meteor.com/ | sh

# Install & cache modules
ADD package.json /tmp/package.json
RUN cd /tmp && meteor npm install && meteor npm cache clear

ENV NODE_ENV development

# Add base code & node modules to app
ENV app /var/app
RUN mkdir -p $app && cp -a /tmp/node_modules $app
WORKDIR $app
ADD . $app

CMD ["meteor"]