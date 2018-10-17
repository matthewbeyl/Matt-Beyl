import React, { Component } from 'react';

import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    contact: {
        marginTop: 100,
        marginLeft: 45,
        marginRight: 45,
        marginBottom: 45,
    }
})

class Contact extends Component {
  render() {
      let { classes } = this.props
    return (
      <div className={classes.contact}>
        <form>
            <TextField label="Name"/>
            <br/>
            <TextField label="E-mail"/>
            <br/>
            <TextField label="Message"/>
            <br/>
            <br/>
            <Button variant="contained" color="primary">Send</Button>
        </form>
      </div>
    );
  }
}

const StyledContact = withStyles(styles)(Contact)
export default StyledContact;