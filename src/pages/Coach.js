import React, { Component } from 'react'

export default class Coach extends Component {
    render() {
        return (
            <div id="Coach">
                <section className="coach">
                    <div className="container">
                        <div className="main-coach">
                            <div className="img-coach">
                                <img src="images/coach.png" alt="" />
                            </div>
                            <div className="description">
                                <h1>
                                    Meet our <span className="orange">Trainer</span>
                                </h1>
                                Karen started practising yoga in the 1980s. At <br /> the time she had a
                                stressful job in the fashion <br />
                                industry and was looking for something to <br /> help me ‘unwind’. I
                                have heard it said many times that yoga is <br /> as much about
                                ‘undoing’ as it is about ‘doing’ <br /> and I can certainly relate to
                                that! I was like a <br /> tightly coiled spring and little by little
                                yoga <br /> worked it’s magic on me. .
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
