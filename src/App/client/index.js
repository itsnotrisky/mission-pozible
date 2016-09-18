import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import routes from './router'

Meteor.startup(() => {
  render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById('app')
  );
});
