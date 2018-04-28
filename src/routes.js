import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Movies from './pages/Movies.js';


export default class Routes extends Component {
	render() {
		return (
			<Switch>
		      <Route exact path='/' component={Home}/>
		      <Route exact path='/about' component={About}/>
		      <Route exact path='/movies' component={Movies}/>
		    </Switch>
		)
	}

}