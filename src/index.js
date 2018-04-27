import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './routes';
import App from './App.js';

class Main extends Component {
	render() {
		return (
			<Router>
				<App>
					<Routes />
				</App>
			</Router>

		);
	}
}


ReactDOM.render( <Main /> , document.querySelector('#app'));