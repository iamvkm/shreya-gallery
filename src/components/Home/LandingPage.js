import './landing-page.css'
import React from 'react'
import Fade from 'react-reveal/Fade';

function LandingPage() {
    return (
        <div className="landingPage">
            <div className="container">
                <Fade cascade>
                    <div className="landingQuote">
                        <p className="upper-quote">Every canvas is a journey all its own. 🎨</p>
                        <p className="lower-quote">Come have a look at mine! 🖌️</p>
                    </div>
                </Fade>
                <Fade cascade>
                    <button className="home-button btn btn-danger shadow me-3"><a className="home-button" href="/shop">SEE MY WORK</a></button>
                    <button className="home-button btn btn-success shadow"><a className="home-button" href="/about">READ ABOUT ME</a></button>
                </Fade>
            </div>
        </div>
    )
}

export default LandingPage
