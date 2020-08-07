FROM node:14.7.0-alpine3.12 AS build

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
WORKDIR /app
RUN [ "yarn", "install" ]
COPY . /app
RUN [ "yarn", "build" ]

FROM node:14.7.0-alpine3.12 AS final

WORKDIR /app
ENV NODE_ENV production

RUN apk add  --no-cache ffmpeg

COPY --from=build /app/package.json /app
COPY --from=build /app/yarn.lock /app
COPY --from=build /app/dist/ /app/dist
COPY --from=build /app/stations/ /app/stations
COPY --from=build /app/node_modules /app/node_modules

USER node

ENTRYPOINT [ "node", "dist" ]