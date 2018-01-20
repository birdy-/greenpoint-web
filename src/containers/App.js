import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Portfolio from 'portfolio';

import styles from './App.scss';

import configureStore from '../store/configure-store';

const store = configureStore();

const App = () => (
  <div className={styles.container}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
