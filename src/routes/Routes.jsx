import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/login';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  );
}
