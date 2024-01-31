# Base stage for shared configurations
FROM node:20.10.0 as base

WORKDIR /usr/src/app

COPY package*.json ./

# Development stage
FROM base as development

ENV NODE_ENV=development

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]

# Build stage for compiling the application
FROM base as build

COPY package*.json ./

COPY . .

RUN npm run build

# Production stage
FROM base as production

ENV NODE_ENV=production

RUN npm install --only=production

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
