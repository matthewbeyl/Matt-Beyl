import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {

    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button color="inherit">Bio</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Resume</Button>
                        <Button color="inherit">Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
