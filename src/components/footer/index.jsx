import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Divider from '@material-ui/core/Divider';
import AppStoreIcon from '../../assets/app_store.png';
import GooglePlayIcon from '../../assets/google_play.png';

import TwitterIcon from '../../assets/ic_twitter.svg';
import FacebookIcon from '../../assets/ic_facebook.svg';
import YoutubeIcon from '../../assets/ic_youtube.svg';

import './footer.css';

export default class index extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="info-container">
                    <div className="info-box main-content">
                        <h3>Information</h3>
                        <Divider className="divider-color" />
                        <ul>
                            <li><Link to="/">item 1</Link></li>
                            <li><Link to="/">item 2</Link></li>
                            <li><Link to="/">item 3</Link></li>
                            <li><Link to="/">item 4</Link></li>
                        </ul>
                    </div>

                    <div className="info-box main-content">
                        <h3>Contacts</h3>
                        <Divider className="divider-color" />
                        <ul>
                            <li><Link to="/">item 1</Link></li>
                            <li><Link to="/">item 2</Link></li>
                            <li><Link to="/">item 3</Link></li>
                            <li><Link to="/">item 4</Link></li>
                        </ul>
                    </div>

                    <div className="info-box main-content">
                        <h3>Services</h3>
                        <Divider className="divider-color" />
                        <ul>
                            <li><Link to="/">item 1</Link></li>
                            <li><Link to="/">item 2</Link></li>
                            <li><Link to="/">item 3</Link></li>
                            <li><Link to="/">item 4</Link></li>
                        </ul>
                    </div>
                    <div className="info-box app-download">
                        <h3>Mobile applications</h3>
                        <Divider className="divider-color" />
                        <div className="link-container">
                            <Link to="/"><img src={AppStoreIcon} /></Link>
                            <Link to="/"><img src={GooglePlayIcon} /></Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-info-container">
                    <p><Link to="/">Terms and Conditions</Link></p>
                    <h4>2019 Company name, Inc. All rights reserved</h4>
                    <div className="social-media-container">
                        <p className="social-media">Follow us</p>

                        <Link to="/">
                            <div className='facebook'>
                                <img src={FacebookIcon} />
                            </div>
                        </Link>

                        <Link to="/">
                            <div className='twitter'>
                                <img src={TwitterIcon} />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className='youtube'>
                                <img src={YoutubeIcon} />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}