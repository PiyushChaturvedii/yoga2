import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="main-header">
                            <a href="#Hero" className="brand-logo">
                                <img src="images/logo.png" alt="" />
                                <div className="brand-logo-name">
                                    Yoga <span>In.</span>
                                </div>
                            </a>
                            <nav className="main-nav">
                                <ul>
                                    <li>
                                        <a className="active" href="#Hero">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#About">About</a>
                                    </li>
                                    <li>
                                        <a href="#Gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#Contact">Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="circle-1" />
                        <div className="circle-2" />
                    </div>
                </header>

            </div>
        )
    }
}
