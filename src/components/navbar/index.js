import React, {Component} from 'react';

import withWidth, {isWidthDown} from '@material-ui/core/withWidth';

import MobileNavbar from './mobile-navbar';
import DesktopNavbar from './desktop-navbar';
import LanguageSwitcher from '../subcomponents/language-switcher';

import './navbar.css';

class Navbar extends Component {
    render() {
        const deviceType = isWidthDown('sm', this.props.width);

        return (
            <div className="navbar-container">
                {deviceType ?
                    <MobileNavbar>
                        <LanguageSwitcher device={deviceType}/>
                    </MobileNavbar>
                    :
                    <DesktopNavbar>
                        <LanguageSwitcher device={deviceType}/>
                    </DesktopNavbar>
                }
            </div>
        );
    }
}

export default withWidth()(Navbar);
