import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bio: {
      marginTop: 100,
      // marginLeft: 45,
      // marginRight: 45,
      marginBottom: 45,
    },
    headshot: {
        borderRadius: '50%',   
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto', 
    },
    paragraph: {
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: 45,
    }
})

class Bio extends Component {
  render() {
      let { classes } = this.props
    return (
      <div className={classes.bio}>
        <img className={classes.headshot} src="headshot.png" alt="" height="300px" width="auto" />
        <Typography className={classes.paragraph} variant="subheading">
          Some stuff about me that makes me sound super duper employable but not too gushy with BS so that it actually reflects who I am (who is not gushy).
          Desperation is unpleasant and no one wants to read about how badly I want a job.  Unless that IS what they want, then in that case, please please please please
          please please hire me
          <br/>
          <br/>
          Another paragraph about myself and how stinkin awesome I am. I should start to think about what i want to put here. Seriously, who has two paragraphs of stuff to say
          about themselves? Maybe I should find a way to make this bio page a little more condensed...?
        </Typography>
      </div>
    );
  }
}

const StyledBio = withStyles(styles)(Bio)
export default StyledBio;