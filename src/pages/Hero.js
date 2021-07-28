import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div id = "Hero">
                <section className="hero">
                    <div className="container">
                        <div className="main-hero">
                            <div className="text">
                                <p>
                                    You <span className="orange">can’t</span> control what goes <br />
                                    on outside, but you <span className="yellow">can</span> control <br />
                                    what goes on inside.
                                </p>
                                <a href className="btn">
                                    Join Us
                                </a>
                            </div>
                            <div className="lady-yoga">
                                <img src="images/hero.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}
