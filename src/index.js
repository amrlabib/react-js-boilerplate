import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import App from './App.js';

class Main extends Component {
	render() {
		return (
			<App>
				<Routes />
			</App>
		);
	}
}


ReactDOM.render( <Main /> , document.querySelector('#app'));