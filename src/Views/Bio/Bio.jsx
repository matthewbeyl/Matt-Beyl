import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bio: {
        marginTop: 100,
        marginLeft: 10,
    }
})

class Bio extends Component {
  render() {
      let { classes } = this.props
    return (
      <div className={classes.bio}>
          <Typography variant="title" color="inherit">Bio</Typography>
      </div>
    );
  }
}

const StyledBio = withStyles(styles)(Bio)
export default StyledBio;