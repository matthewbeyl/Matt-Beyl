import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    portfolio: {
        marginTop: 100,
        marginLeft: 45,
        marginRight: 45,
        marginBottom: 45,
    },
    projects: {
        backgroundColor: '#f9f9f9',
        display: 'flex',
        minWidth: '100%',
        maxWidth: 'auto',
        overflowX: 'auto',
        marginTop: 10,
        marginBottom: 10,
    },
    screenshot: {
        padding: 10,
    }
})

class Portfolio extends Component {
    render() {
        let { classes } = this.props
        return (
            <div className={classes.portfolio}>
                {/* <Typography variant="subheading">Below you can view some of my past works/ongoing projects, as well as a brief description.</Typography>
                <br/> */}
                <Typography variant="title" color="primary">Tier 4</Typography>
                    <div className={classes.projects}>
                        <img className={classes.screenshot} src="8.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="2.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="3.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="4.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="5.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="6.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="7.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="1.png" alt="" height="300px" width="auto" />
                        <img className={classes.screenshot} src="9.png" alt="" height="300px" width="auto" />
                    </div>
                <Typography variant="title" color="primary">LockerRoom</Typography>
                    <div className={classes.projects}>

                    </div>
                    <div className={classes.projects}>

                    </div>
            </div>
        );
    }
}

const StyledPortfolio = withStyles(styles)(Portfolio)
export default StyledPortfolio;