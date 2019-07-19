import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LanguagePicker from '../language-picker/index.jsx';

import logo from '../../../assets/logo.png';
import './desktop-navbar.css'

export default class index extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="site logo" />
                    <h1 style={{ 'color': this.props.titleColor }}>Title</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li className="item">
                            <Link style={{ 'color': this.props.itemColor }} to="/">Latest news</Link>
                        </li>
                        <li className="item">
                            <Link style={{ 'color': this.props.itemColor }} to="/">About</Link>
                        </li>
                        <li className="item">
                            <Link style={{ 'color': this.props.itemColor }} to="/">Sign Up</Link>
                        </li>
                        <li className="item">
                            <Link style={{ 'color': this.props.itemColor }} to="/">Log In</Link>
                        </li>
                        <li><LanguagePicker isMobileDevice={this.props.isMobileDevice} /></li>
                    </ul>
                </div>
            </div>
        );
    }
}