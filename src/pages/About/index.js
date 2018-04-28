import React, { Component } from 'react';
import reactImage from "../../../assets/images/react.png";

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<img src={reactImage} width={300}/>
			</div>
		);
	}
}