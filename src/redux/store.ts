import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
import globalReducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(middleware));

export default createStore(
  globalReducer,
  enhancer
);