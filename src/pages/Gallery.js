import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div id="Gallery">
                ;<section className="gallery">
                    <div className="container">
                        <h1>
                            Our <span className="orange">Gallery</span>{" "}
                        </h1>
                        <div className="main-gallery">
                            <div className="image-wrapper">
                                <img src="images/figmagallery/1.png" alt=""/>
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/2.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/3.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/4.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/5.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/6.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/7.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/8.png" alt="" />
                            </div>
                            <div className="image-wrapper">
                                <img src="images/figmagallery/9.png" alt="" />
                            </div>
                        </div>
                        <div className="circle-gallery" />
                    </div>
                </section>

            </div>
        )
    }
}
