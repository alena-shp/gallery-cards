import React, {Component} from 'react';

import {Link} from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from '../../assets/logo.png';

export default class MobileNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            iOS: process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent),
            toggleDrawer: this.toggleDrawer.bind(this)
        }
    }

    toggleDrawer = (state) => event => {
        this.setState({
            isOpen: state
        });
    };

    render() {
        return (
            <div className="mobile-navbar">
                <div className="header-items-holder">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Menu"
                        onClick={this.toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>

                    <div className="mobile-logo">
                        <img src={logo} alt="site logo"/>
                        <h1>Title</h1>
                    </div>
                </div>
                <SwipeableDrawer
                    open={this.state.isOpen}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    disableBackdropTransition={!this.iOS}
                    disableDiscovery={this.iOS}
                >
                    <div className="drawer-content">
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary="Sign Up"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Log In"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Latest news"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="About"/>
                            </ListItem>
                        </List>
                        <Divider/>
                        {this.props.children}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}
