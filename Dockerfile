FROM node:18 as build

RUN npm install -g pnpm

WORKDIR /app

COPY package-lock.json .
COPY pnpm-lock.yaml .
COPY package.json .

RUN pnpm i --frozen-lockfile --prod

COPY . .

RUN ["pnpm", "build"]
FROM node:alpine as runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
EXPOSE 3000
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
USER nextjs

CMD ["node_modules/.bin/next", "start"]
