FROM node:17.7-alpine3.15 as base

ONBUILD WORKDIR /app

ONBUILD COPY package.json package.json
ONBUILD COPY yarn.lock yarn.lock


FROM base as modules

RUN yarn install --production=true --frozen-lockfile


FROM base as build

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build
RUN rm dist/tsconfig.build.tsbuildinfo


FROM base as release

COPY --from=build /app/dist /app/dist
COPY --from=modules /app/node_modules /app/node_modules

USER node

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
