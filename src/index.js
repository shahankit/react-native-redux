import React, { Component } from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import AppReducer from './redux/reducers';
import AppWithNavigationState from './navigation';

console.disableYellowBox = true;

const loggerMiddleware = createLogger({ predicate: () => __DEV__, collapsed: true });

function configureStore(initialState = {}) {
  const enhancer = compose(
    applyMiddleware(
      thunk, // lets us dispatch() functions
      loggerMiddleware
    ),
  );
  return createStore(AppReducer, initialState, enhancer);
}

export default class App extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
