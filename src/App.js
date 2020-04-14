/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Focalpoint from './Focalpoint';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* Route the incoming request to the appropriate component */}
          <Switch>
            <Route
              path="/:page?"
              render={(props) => <Focalpoint {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
