# Production build
FROM node:12 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Serve via Serve
FROM node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 3000
CMD ["serve", "-l", '\$PORT' || "tcp://0.0.0.0:3000", "-s", "."]
