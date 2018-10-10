import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    portfolio: {
        marginTop: 100,
        marginLeft: 10,
    }
})

class Portfolio extends Component {
  render() {
      let { classes } = this.props
    return (
      <div className={classes.portfolio}>
          <Typography variant="title" color="inherit">Portfolio</Typography>
      </div>
    );
  }
}

const StyledPortfolio = withStyles(styles)(Portfolio)
export default StyledPortfolio;