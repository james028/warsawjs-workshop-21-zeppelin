import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, TextField, Button } from '@material-ui/core';

import * as urls from '../urls';


const styles = {
  self: {
    maxWidth: 500,
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

class ProjectCreatePage extends PureComponent {
  

  render() {
    
    return (
      <div >
        1
      </div>
    );
  }
}


export default withStyles(styles)(ProjectCreatePage);