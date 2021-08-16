import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

import MainPage from '../pages';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/cart' render={() => <h1>Cart</h1>} />
    </Switch>
  );
};

export default App;
