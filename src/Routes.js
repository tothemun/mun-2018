import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {
  App,
  Homepage
} from './containers';
import { history } from './stores';

class Routes extends Component {
  render() {
    return (
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path='/' component={App}>
          <IndexRoute component={Homepage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
