import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import style from '../assets/styles/global.scss';
import print from '../assets/icons/print.svg';


class App extends Component {
	render() {
		return (
			<div>
				<svg><use xlinkHref={'/' + print.url} ></use></svg>
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}


ReactDOM.render( <App /> , document.querySelector('#app'));