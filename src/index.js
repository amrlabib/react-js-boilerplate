import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/';
import Routes from './routes';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import style from '../assets/styles/global.scss';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

class Main extends Component {
	render() {
		return (
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
	}
}


ReactDOM.render( <Main /> , document.querySelector('#app'));