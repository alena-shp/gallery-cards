import React, {Component} from 'react';

import {Link} from "react-router-dom";

import logo from '../../assets/logo.png';

export default class DesktopNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="desktop-navbar">
                <Link className="desktop-logo" to="/">
                    <img src={logo} alt="site logo"/>
                    <h1>Site name</h1>
                </Link>
                <nav className="navigation-menu">
                    <ul>
                        <li>
                            <Link className="item" to="/news">Latest news</Link>
                        </li>
                        <li>
                            <Link className="item" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="item" to="/registration">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="item" to="/">Log In</Link>
                        </li>
                        <li>
                            {/* show language switcher component */}
                            {this.props.children}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
