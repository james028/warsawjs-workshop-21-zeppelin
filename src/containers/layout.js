import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core';
import Header from '../components/header'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>Layout view</div>
      </div>
    )
  }
}
