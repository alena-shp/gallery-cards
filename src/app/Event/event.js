import React, {Component} from 'react'

import Navbar from "../../components/navbar";

export default class Event extends Component {
    render() {
        return (
            <div className="page-container">
                <Navbar/>
                <div className="section">
                    Gallery
                </div>
                <div className="section">
                    Other sections
                </div>
                <div className="section">
                    Other sections
                </div>
            </div>
        );
    }
}
