# React, TypeScript, Webpack and Docker

Gallery Courses

## Description

Project based on React, TypeScript, Webpack and Docker

## Launch of the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend project in dev mode
```

## Scripts

- `npm run start` - Starting a frontend project on the webpack dev server
- `npm run start:vite` - Starting a frontend project on vite
- `npm run start:dev` - Starting a frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Starting a frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter
- `npm run test:unit` - Hack unit tests with jest
- `npm run test:ui` - Hack screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generating a json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - launch Storybook
- `npm run storybook:build` - Build a storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script for generating FSD slices

## Project architecture

The project was written in accordance with the Feature sliced ​​design methodology

Link to documentation - [feature sliced ​​design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Tests for components with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More information about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-ulbi-tv-plugin*,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers from the point of view of FSD
 (for example widgets cannot be used in features and entitites)
3) public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Launching linters
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter

----

## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ThemeButton as ButtonTheme } from './Button';
import { Theme } from '../../const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
```
----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in ci.

In precommit hooks we check the project with linters, config in /.h

## Working with webpack

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
 docker-compose run --rm frontend sh -c "npx ts-node ./scripts/refactoring/updateImports.ts"
```

#### Run Create Public Api For Shared Ui
```bash
 docker-compose run --rm frontend sh -c "npx ts-node ./scripts/refactoring/createPublicApiForSharedUi.ts"
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