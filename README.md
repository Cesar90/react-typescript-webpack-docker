# React, TypeScript, Webpack and Docker

Gallery Courses

## Description

Project based on React, TypeScript, Webpack and Docker

## Getting Started

#### Build project with docker-compose
Build docker images of  ```frontend(webpack)```, run this command in root of project, this 
will install all packages of package.json
```bash
docker-compose up --build   
```
#### Run project
After of build image, up project
```bash
docker-compose up
```
#### Run esLint
```bash
docker-compose run --rm frontend sh -c "npm run lint:ts:fix" 
```
#### Run Jest Testing
```bash
docker-compose run --rm frontend sh -c "npm run test:unit classNames.test.ts"
```
#### Run webpack-bundle-analyzer
```bash
docker-compose run -p 8888:8888 --rm frontend sh -c "npm run build:dev"
```

#### Run Storybook
```bash
docker-compose run -p 6006:6006 --rm frontend sh -c "npm run storybook"
```

#### Run Json Server only
```bash
docker-compose run -p 8000:8000 --rm frontend sh -c "npm run json-server" 
```

#### Run Json Server with Auth
```bash
docker-compose run -p 8000:8000 --rm frontend sh -c "npm run start:dev:server"
```

#### Generate template of `features`, `entities`, `pages`
```bash
 docker-compose run --rm frontend sh -c "npm run generate:slice features testFeature"
```

#### Run ts-morph to change path of import with @
```bash
 docker-compose run --rm frontend sh -c "npx ts-node ./scripts/updateImports.ts"
```

## Typescript
### Fixing issue of types in VS Code

First cd into the ```react-typescript-webpack-docker``` folder.
```bash
cd react-typescript-webpack-docker
```
Copy node_modules folder from container to host with docker command
```bash
docker cp webpack-docker-frontend-1:/app/node_modules/ ./
```

## Automatically removes the resources not associated with a container
```bash
docker system prune -a 
```