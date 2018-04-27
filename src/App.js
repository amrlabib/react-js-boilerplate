import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import style from '../assets/styles/global.scss';
import print from '../assets/icons/print.svg';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}