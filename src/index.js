import React, { Component } from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './redux/reducers';
import AppWithNavigationState from './navigation';
import rootSaga from './redux/sagas';

console.disableYellowBox = true;

const loggerMiddleware = createLogger({ predicate: () => __DEV__, collapsed: true });

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  const enhancer = compose(
    applyMiddleware(
      thunk, // lets us dispatch() functions
      sagaMiddleware,
      loggerMiddleware
    ),
  );

  const store = createStore(AppReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
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
