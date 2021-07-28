import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <section className="contacts">
                    <div className="container">
                        <div className="main-contacts">
                            <h1 className="contacts-text">
                                Don't be Strangers <br />{" "}
                                <span className="orange">Just say Hello.</span>
                            </h1>
                            <form action className="contacts-form">
                                <div className="box">
                                    <label htmlFor>Name</label>
                                    <input type="text" />
                                </div>
                                <div className="box">
                                    <label htmlFor>Email</label>
                                    <input type="text" />
                                </div>
                                <div className="box">
                                    <label htmlFor>Address</label>
                                    <input type="text" />
                                </div>
                                <div className="box">
                                    <button type="submit" className="btn">
                                        Join Us
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
