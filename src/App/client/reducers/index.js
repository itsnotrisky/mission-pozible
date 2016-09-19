import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import usersReducer from './usersReducer'

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  users: usersReducer
});

export default reducers;