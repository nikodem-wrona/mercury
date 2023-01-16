FROM node:16.13.0 AS deps
WORKDIR /app
RUN echo "ls"
COPY ./app/packages/web/package.json ./app/packages/web/yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /app
COPY ./app/packages/web/ . 
COPY --from=deps /app/node_modules ./node_modules

RUN NEXT_PUBLIC_API_URL=APP_NEXT_PUBLIC_API_URL yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]

CMD ["yarn", "start"]
