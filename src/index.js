import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/';
import Routes from './routes';
import App from './App.js';

class Main extends Component {
	render() {
		return (
			<Provider store={createStore(rootReducer)}>
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