import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import * as urls from '../urls';
import Header from '../components/header';
import ProjectCreatePage from '../containers/ProjectCreatePage';
import ProjectEditPage from '../containers/ProjectEditPage';
import ProjectListPage from '../containers/ProjectListPage';
import CreditsPage from '../containers/credit';

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 20,
  },
};

class Layout extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <Fragment>
        <Header  />
        <div className={classes.content}>
          <Switch>
            <Route path={urls.PROJECT_CREATE} component={ProjectCreatePage} />
            <Route path={urls.PROJECT_EDIT} component={ProjectEditPage} />
            <Route path={urls.PROJECT_LIST} component={ProjectListPage} />
            <Route path={urls.CREDITS} component={CreditsPage} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Layout);