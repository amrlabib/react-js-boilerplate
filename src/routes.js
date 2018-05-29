// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Movies, PageNotFound } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/movies" component={Movies} />
    <Route component={PageNotFound} />
  </Switch>
);


export default Routes;
