import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store';

import HomeContainer from './containers/HomeContainer'
import DashboardContainer from './containers/DashboardContainer'

import Signin from './components/home/Signin'
import Signup from './components/home/Signup'
import Dashboard from './components/dashboard'

const history = syncHistoryWithStore(browserHistory, store)

let Routes = 
  <Router history={history}>
    <Route path='/' component={HomeContainer}>
      <IndexRoute component={Signin} />
      <Route path='sign_up' component={Signup} />
    </Route>
    <Route path='/dashboard' component={DashboardContainer}>
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>

export default Routes