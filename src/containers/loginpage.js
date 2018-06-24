import React, { Component } from 'react'
import { withStyles, TextField, Button, WithStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as urls from '../urls';
import * as actions from '../actions';


const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 400,
  },
  self: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    maxWidth: '100px',
  }
};

class LoginPage extends Component {
  

  state = {
    username: '',
    password: '',
    submitting: false
  };

  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    const { login } = this.props;
    const { username, password } = this.state;
    this.setState({ submitting: true });
    login({ username, password })
      .then(() => {
        const { history } = this.props;
        history.replace(urls.PROJECT_LIST);
      })
      .catch((error) => {
        this.setState({ username: '', password: '', submitting: false });
      });
  };


  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    
    return (
      <div className={classes.self}>
        <form>
          <div className={classes.form}>
            <TextField
              label="Username"
              name="username"
              value={username}
              onChange={this.handleChangeUsername}
            />
            <TextField
              label="Password"
              name="password"
              value={password}
              onChange={this.handleChangePassword}
            />
            <Button variant="raised" onClick={this.handleSubmit} className={classes.btn}>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: actions.login,
};


export default withStyles(styles)(withRouter(connect(null, mapDispatchToProps)(LoginPage)));