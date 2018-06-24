import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles, CssBaseline } from '@material-ui/core'
import Layout from './containers/layout'
import LoginPage from './containers/loginpage'

import * as api from './containers/api'
import * as urls from './urls'


window.zeppelin = api;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <CssBaseline>
            <Switch>
              <Route path={urls.LOGIN} exact component={LoginPage}/>
              <Route path={urls.ROOT} component={Layout} />
            </Switch>
          </CssBaseline>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
