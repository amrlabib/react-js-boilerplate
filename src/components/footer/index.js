import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './footer.scss';

class Footer extends Component {
	render() {
		return (
			<div styleName='footer'>
				Footer Text
			</div>
		)
	}
}

export default CSSModules(Footer, style);