import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/';
import Routes from './routes';
import App from './App.js';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

class Main extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<App>
						<Routes />
					</App>
				</Router>
			</Provider>

		);
	}
}


ReactDOM.render( <Main /> , document.querySelector('#app'));