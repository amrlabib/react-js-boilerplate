import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './header.scss';
import star from '../../../assets/icons/star.svg';

class Header extends Component {
	render() {
		return (
			<div styleName='header'>
				<svg><use xlinkHref={'/' + star.url} ></use></svg>
				Header text
			</div>
		)
	}
}

export default CSSModules(Header, style);