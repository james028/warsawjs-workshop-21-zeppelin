import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { withStyles, CssBaseline } from '@material-ui/core'
import Layout from './containers/layout'
import LoginPage from './containers/loginpage'

import * as api from './containers/api'
import * as urls from './urls'
import reducer from './reducers'


window.zeppelin = api;

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
