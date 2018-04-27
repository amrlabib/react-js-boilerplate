import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import App from './App.js';

class Main extends Component {
	render() {
		return (
			<Routes>
				<App />
			</Routes>
		);
	}
}


ReactDOM.render( <Main /> , document.querySelector('#app'));