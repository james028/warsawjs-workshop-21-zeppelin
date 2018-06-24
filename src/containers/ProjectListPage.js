import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';


import * as urls from '../urls';


const styles = {
  self: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

class ProjectListPage extends PureComponent {
  

 

  render() {


    return (
      <div >
          It works !
      </div>
    );
  }
}

export default withStyles(styles)(ProjectListPage);