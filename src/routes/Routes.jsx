import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@/components/header/Header';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/register';
import Homepage from '@/pages/home/Home';
import Footer from '@/components/footer/Footer';
import Cart from '@/pages/cart/Cart';
import Contact from '@/pages/contact/Contact';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Contact} />
      </Switch>
    </Router>
  );
}
