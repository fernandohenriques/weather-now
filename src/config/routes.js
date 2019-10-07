import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/pages/home';
import NotFound from 'components/pages/notFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
