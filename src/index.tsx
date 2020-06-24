import * as serviceWorker from './serviceWorker';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import App from './App';
import Icon from './Icon'
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path={`/icon/:componentName/:folder?`} render={routeProps => <Icon {...routeProps} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
