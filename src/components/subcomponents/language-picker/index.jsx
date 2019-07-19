import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import LanguageIcon from "@material-ui/icons/LanguageOutlined"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./language-picker.css"

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { anchorEl: null };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose() {
        this.setState({ anchorEl: null })
    }

    render() {
        const anchorEl = this.state.anchorEl;
        const isMobile = this.props.isMobileDevice;

        return (
            <div className={isMobile ? "mobile-language-picker" : "desktop-language-picker"}>
                <Button aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    className="language-button-width"
                >
                    <LanguageIcon />
                    <p>Lang</p>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>English</MenuItem>
                    <MenuItem onClick={this.handleClose}>Czech</MenuItem>
                </Menu>
            </div>
        );
    }
}

