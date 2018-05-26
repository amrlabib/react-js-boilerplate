// @flow

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/';
import Routes from './routes';
import { Header, Body, Footer } from './components';
import GlobalStyle from '../assets/styles/global.scss'; //eslint-disable-line


const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk),
);

const Main = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Body>
          <Routes />
        </Body>
        <Footer />
      </div>
    </Router>
  </Provider>
);


const container = document.querySelector('#app');
if (container) {
  ReactDOM.render(<Main />, container); //eslint-disable-line
} else {
  throw new Error('Error react container HTML element not found!');
}
