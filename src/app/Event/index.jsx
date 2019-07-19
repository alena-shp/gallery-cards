import React, { Component } from 'react'

import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";

import "./event.css";

export default class Event extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="section">
                    <Navbar titleColor={'rgba(0, 0, 0, 0.87)'} itemColor={'rgba(0, 0, 0, 0.57)'} />
                </div>
                <div className="section">
                    Gallery
                </div>
                <div className="section">
                    Other sections
                </div>
                <div className="section">
                    Other sections
                </div>
                <div className="section">
                    <Footer />
                </div>
            </div>
        );
    }
}