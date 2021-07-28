import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="About">
                <section className="about">
                    <div className="container">
                        <div className="main-about">
                            <div className="about-text">
                                <h1>
                                    About <span>Us</span>
                                </h1>
                                <p>
                                    Yoga is a mind and body practice with a 5,000- <br />
                                    year history in ancient Indian philosophy. Various <br />
                                    styles ofyogacombinephysical postures, breathing <br />
                                    techniques, and meditation or relaxation.
                                </p>
                            </div>
                            <div className="about-img">
                                <img src="images/about.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-about">
                        <img src="images/design/1.png" alt="" />
                    </div>
                </section>

            </div>
        )
    }
}
