import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import style from './header.scss';

class Header extends Component {
	render() {
		return (
			<div className="container-fluid" styleName="container">
				<div className="row justify-content-center">
					<div className="col" styleName='react-logo'>
					</div>
					<div className="col" styleName='text'>
						<Link to="/" styleName="link" >Home</Link>
					</div>
					<div className="col" styleName='text'>
						<Link to="/about" styleName="link" >About</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Header, style);