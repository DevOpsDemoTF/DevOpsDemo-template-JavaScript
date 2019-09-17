FROM node:12-alpine as base
WORKDIR /app

COPY . .

RUN apk --no-cache add dumb-init && \
    groupadd -r app && useradd -r -g app app && \
    yarn install --non-interactive --production

FROM base as test

RUN yarn install --non-interactive --audit
RUN yarn test

FROM base

COPY --from=test /app/test-results.xml .

EXPOSE 8080
EXPOSE 9102

ENV DEBUG_LEVEL "DEBUG"

USER app
ENTRYPOINT ["dumb-init", "node"]
CMD ["src/index.js"]
