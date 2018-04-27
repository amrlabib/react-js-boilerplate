import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from './App.js';
import Home from './routes/Home.js';
import About from './routes/About.js';


export default class Routes extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
				      <Route exact path='/' component={Home}/>
				      <Route path='/about' component={About}/>
				    </Switch>
				    {this.props.children}
			    </div>
			</Router>
		)
	}

}