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
            <Typography variant="subheading">
                Thanks for stopping by.  If you would like to grab coffee, collaborate on a project, or give me a job, please fill out the form below
                and I will get back to you promptly.
            </Typography>
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