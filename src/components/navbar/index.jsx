import React, { Component } from 'react';

import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import MobileNavbar from '../subcomponents/mobile-navbar/index.jsx';
import DesktopNavbar from '../subcomponents/desktop-navbar/index.jsx';

import './navbar.css';

class index extends Component {

    render() {
        let isMobileDevice = isWidthDown('sm', this.props.width);

        return (
            isMobileDevice ?
                <MobileNavbar isMobileDevice={isMobileDevice} />
                :
                <DesktopNavbar isMobileDevice={isMobileDevice} titleColor={this.props.titleColor} itemColor={this.props.itemColor} />
        );
    }
}

export default withWidth()(index);
