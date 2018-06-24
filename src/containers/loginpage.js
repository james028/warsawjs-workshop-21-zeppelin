import React, { Component } from 'react'
import { withStyles, TextField, Button, WithStyles } from '@material-ui/core';
import { withRouter } from 'react-router';

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


  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.self}>
        <form>
          <div className={classes.form}>
            <TextField
              label="Username"
              name="username"
              
              onChange={this.handleChangeUsername}
            />
            <TextField
              label="Password"
              name="password"
              
              onChange={this.handleChangePassword}
            />
            <Button variant="raised" onClick={this.handleSubmit} className={classes.btn}>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}


export default withStyles(styles)(LoginPage);