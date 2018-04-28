import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import style from './header.scss';

class Header extends Component {
	render() {
		return (
			<div styleName="container">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col">
							<ul styleName="nav">
								<li styleName="react-logo">
								</li>
								<li>
									<Link to="/" styleName="link" >Home</Link>
								</li>
								<li>
									<Link to="/about" styleName="link" >About</Link>
								</li>
								<li>
									<Link to="/movies" styleName="link" >Movies</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Header, style);