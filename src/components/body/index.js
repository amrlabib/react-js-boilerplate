import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules';
import style from './body.scss';

class Body extends Component {
	render() {
		return (
			<div styleName="body">
				{this.props.children}
			</div>
		)
	}
}

export default CSSModules(Body, style);