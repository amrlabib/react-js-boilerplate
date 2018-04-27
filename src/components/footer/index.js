import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import star from '../../../assets/icons/star.svg';
import style from './footer.scss';

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid" styleName='container'>
				<div className="row justify-content-center">
					<div className="col d-flex justify-content-center align-items-center" styleName='text'>
						<svg styleName="star"><use xlinkHref={star.url}></use></svg>
						<span>Footer</span>
						<svg styleName="star"><use xlinkHref={star.url}></use></svg>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Footer, style);