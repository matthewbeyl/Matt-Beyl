import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const BioLink = props => <Link to="/bio" {...props} />
const PortfolioLink = props => <Link to="/portfolio" {...props} />
const ResumeLink = props => <Link to="/resume" {...props} />
const ContactLink = props => <Link to="/contact" {...props} />

const styles = theme => ({
    
})

class Header extends Component {

    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button component={BioLink} color="inherit">Bio</Button>
                        <Button component={PortfolioLink} color="inherit">Portfolio</Button>
                        <Button component={ResumeLink} color="inherit">Resume</Button>
                        <Button component={ContactLink} color="inherit">Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const StyledHeader = withStyles(styles)(Header);
export default StyledHeader;