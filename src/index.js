import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  <App />
  </Provider>,
  document.getElementById('root')
);
