import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';


const reducers = combineReducers({
  // todo
});

// Redux Chrome extension to help debug
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devMiddlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const prodMiddlewares = applyMiddleware(reduxPromise);

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, devMiddlewares)}>
      <Router history={history}>
        <Switch>
        TODO
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, prodMiddlewares)}>
      <Router history={history}>
        <Switch>
        TODO
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
