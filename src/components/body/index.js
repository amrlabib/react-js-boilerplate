import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './body.scss';

class Body extends Component {
	render() {
		return (
			<div className="container" styleName="body">
				<div className="row">
					<div className="col-sm-4 justify-content-center">
						<span>first</span>
					</div>
					<div className="col-sm-4">
						second
					</div>
					<div className="col-sm-4">
						third
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Body, style);