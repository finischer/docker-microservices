FROM node:slim as builder
WORKDIR /src
COPY package*.json ./
COPY nginx.conf ./
RUN npm install
COPY ./ /src/
RUN npm run build

FROM nginx:alpine
COPY --from=builder /src/build/ /usr/share/nginx/html
COPY --from=builder /src/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]