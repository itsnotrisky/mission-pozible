import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store';
// import routes from './routes';

import HomeContainer from './containers/HomeContainer'
import DashboardContainer from './containers/DashboardContainer'

import SigninForm from './components/home/SigninForm'
import SignupForm from './components/home/SignupForm'

const history = syncHistoryWithStore(browserHistory, store)

let Routes = 
  <Router history={history}>
    <Route path='/' component={HomeContainer}>
      <IndexRoute component={SigninForm} />
      <Route path='/sign_up' component={SignupForm} />
    </Route>
    <Route path='/dashboard' component={DashboardContainer} />
  </Router>
export default Routes;