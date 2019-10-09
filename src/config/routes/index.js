import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/pages/home';
import NotFound from 'components/pages/notFound';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Router;
