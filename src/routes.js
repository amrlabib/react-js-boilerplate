// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Movies } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/movies" component={Movies} />
  </Switch>
);


export default Routes;
