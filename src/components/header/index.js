import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './header.scss';

class Header extends Component {
	render() {
		return (
			<div styleName='header'>
				Header text
			</div>
		)
	}
}

export default CSSModules(Header, style);