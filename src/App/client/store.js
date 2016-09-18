import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers';

const reactRouterReduxMiddleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware  = compose(
  applyMiddleware(
    thunkMiddleware,
    reactRouterReduxMiddleware,
    createLogger()
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  reducers,
  createStoreWithMiddleware
);

export default store;