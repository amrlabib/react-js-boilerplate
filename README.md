# React js boilerplate
React js boilerplate is to help you kick start your react web application, with all bundling and build configured for you.

## Prerequisite:

* [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)

## Setup:

1. `yarn` or `npm install`
2. `yarn build:watch` to build all files into `dist` folder and watch for any changes
3. `yarn start:server` to start node development server and host `dist` folder `http://localhost:8080/`

## Features: 

1. [ES6 Features](http://es6-features.org/#Constants)
2. [React CSS Modules](https://github.com/gajus/react-css-modules) to be able to build modular CSS code for each React component.
3. [React Router v4](https://github.com/ReactTraining/react-router) for routing between application pages
4. [Bootstrap v4](https://getbootstrap.com/docs/4.1/layout/overview/) for grid system and all new bootstrap 4 features
5. [Svgo](https://github.com/svg/svgo) to make sure all your svg icons are optimized
6. [Node express based](https://expressjs.com/) development server

---

## Bundling/Build using Webpack: 

Webpack is the only tool used in this project for bundling project dependencies and build, copy files.

#### Loaders:
1. [babel-loader](https://github.com/babel/babel-loader) with ['es2015', 'react'] presets for ES6 features and React JSX transpilation to ES5 understood by all browsers.
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
