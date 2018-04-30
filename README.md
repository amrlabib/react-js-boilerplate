# React js boilerplate
React js boilerplate is to help you kick start your react web application, with all bundling and build configured for you.

## Prerequisite:

* [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)

## Setup:

1. `yarn` or `npm install`
2. `yarn build:watch` to build all files into `dist` folder and watch for any changes
3. `yarn start:server` to start node development server and host `dist` folder browse `http://localhost:8080/`
4. `yarn lint` to run eslint on `src` folder and display code errors if any
4. `yarn json-server` to create test json api `http://localhost:3001/` 

## Features: 

1. [ES6 Features](http://es6-features.org/#Constants)
2. [React Redux](https://github.com/reactjs/react-redux) to maintain application state
3. [Redux Thunk](https://github.com/gaearon/redux-thunk) to handle asynchronous actions
4. [axios](https://github.com/axios/axios) to handle all api calls `['GET','POST','PUT','DELETE', ...]`
5. [React CSS Modules](https://github.com/gajus/react-css-modules) to be able to build modular CSS code for each React component.
6. [React Router v4](https://github.com/ReactTraining/react-router) for routing between application pages
7. [Bootstrap v4](https://getbootstrap.com/docs/4.1/layout/overview/) for grid system and all new bootstrap 4 features
8. [Svgo](https://github.com/svg/svgo) to make sure all your svg icons are optimized
9. [Node express based](https://expressjs.com/) development server
10. [json-server](https://github.com/typicode/json-server) no need to wait for backend api to start development, use `json-server` to have test data and test api ready for use
11. [eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) the project contains eslint with `eslint-config-airbnb` extended, to fix and flag javascript code errors.

---

## Bundling/Build using Webpack: 

Webpack is the only tool used in this project for bundling project dependencies and build, copy files.

#### Loaders:
1. [babel-loader](https://github.com/babel/babel-loader) with `['es2015', 'react', 'stage-1']` presets for ES6 features and React JSX transpilation to ES5 understood by all browsers.
2. [sass-loader](https://github.com/webpack-contrib/sass-loader) Loads a Sass/SCSS file and compiles it to CSS
3. [css-loader](https://github.com/webpack-contrib/css-loader) interprets `@import`/`url()` to js modules
4. [postcss-loader](https://github.com/postcss/postcss-loader) to process CSS with [PostCSS](http://postcss.org/)
5. [style-loader](https://github.com/webpack-contrib/style-loader)
6. [file-loader](https://github.com/webpack-contrib/file-loader) interprets `@import`/`url()` to image files, to copy them to `dist` folder and return url for these images
7. [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) to add all your icons in one sprite.svg file and interpret `@import` from javascript or `url()` in css
8. [svgo-loader](https://github.com/rpominov/svgo-loader) to optimize svg before generating final sprite.svg

#### Plugins:
1. [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) for javascript minification
2. [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) used to copy `index.html` to `dist` folder
3. [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) extract final bundled css files to `dist` folder
4. [svg-sprite-loader/plugin](https://github.com/kisenka/svg-sprite-loader) part of `svg-sprite-loader` to generate final `sprite.svg` in `dist`
