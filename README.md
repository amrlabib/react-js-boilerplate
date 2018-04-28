# React js boilerplate
React js boilerplate is to help you kick start your react web application, with all bundling and build configured for you.

## Prerequisite:

* [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)

## Setup:

1. `yarn` or `npm install`
2. `yarn build:watch` to build all files into `dist` folder
3. `yarn start` to start node development server

## Features: 

1. [ES6 Features](http://es6-features.org/#Constants)
2. [React CSS Modules](https://github.com/gajus/react-css-modules) to be able to build modular CSS code for each React component.
3. [React Router v4](https://github.com/ReactTraining/react-router) for routing between application pages
4. [Bootstrap v4](https://getbootstrap.com/docs/4.1/layout/overview/) for grid system and all new bootstrap 4 features
5. [Svgo](https://github.com/svg/svgo) to make sure all your svg icons are optimized

---

## Webpack: 

Webpack is the only tool used in this project for bunlding project dependencies and build, copy files, the following loaders are used:

1. [babel-loader](https://github.com/babel/babel-loader) for ES6 features and React JSX transpilation to ES5 understood by all browsers.
2. [css-loader](https://github.com/webpack-contrib/css-loader) interprets `@import`/`url()` to our css files
3. [file-loader](https://github.com/webpack-contrib/file-loader) interprets `@import`/`url()` to image files, to copy them to `dist` folder and return url for these images
