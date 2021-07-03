import './landing-page.css'
import React from 'react'
import Fade from 'react-reveal/Fade';

function LandingPage() {
    return (
        <div className="landingPage">
            <div className="container">
                <Fade cascade>
                    <div className="landingQuote">
                        <p>EVERY CANVAS IS A JOURNEY ALL IT'S OWN 🎨</p>
                        <h1>HAVE A LOOK AT MINE! 🖌️</h1>
                    </div>
                </Fade>
                <Fade cascade>
                    <button className="btn btn-dark"><a className="home-anchor" href="/shop">SEE MY WORK</a></button>
                    <button className="btn btn-primary"><a className="home-anchor" href="/about">READ ABOUT ME</a></button>
                </Fade>
            </div>
        </div>
    )
}

export default LandingPage
