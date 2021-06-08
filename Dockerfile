FROM node:12

RUN yarn global add @nestjs/cli

COPY package.json .
# COPY yarn.lock .
RUN yarn

COPY . /code

WORKDIR /code

CMD ["yarn", "start"]
