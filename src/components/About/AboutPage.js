import React from 'react'
import Fade from 'react-reveal/Fade'
import './about-page.css'

function AboutPage() {
    return (
        <Fade>
            <div className="about-page">
                <div className="container">
                    <h1 className="pt-5 header">About me?</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={'../images/profile.jpg'} alt="" />
                        </div>
                        <div className="col-md-8">

                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default AboutPage
