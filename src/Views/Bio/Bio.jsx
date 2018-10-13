import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bio: {
        marginTop: 100,
        marginLeft: 10,
    },
    headshot: {
        borderRadius: '50%',
        display: 'grid',
        position: 'center',        
    }
})

class Bio extends Component {
  render() {
      let { classes } = this.props
    return (
      <div className={classes.bio}>
        <img className={classes.headshot} src="headshot.png" alt="" height="300px" />
      </div>
    );
  }
}

const StyledBio = withStyles(styles)(Bio)
export default StyledBio;