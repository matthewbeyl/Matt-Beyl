import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    contact: {
        marginTop: 100,
        marginLeft: 10,
    }
})

class Contact extends Component {
  render() {
      let { classes } = this.props
    return (
      <div className={classes.contact}>
          <Typography variant="title" color="inherit">Contact</Typography>
      </div>
    );
  }
}

const StyledContact = withStyles(styles)(Contact)
export default StyledContact;