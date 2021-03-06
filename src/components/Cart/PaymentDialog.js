import React from 'react'
import Fade from 'react-reveal/Fade'

function PaymentDialog() {
    return (
        <Fade>
            <div style={{ height: '100vh', textAlign: 'center' }}>

                <h4 style={{
                    color: '#e74c3c',
                    lineHeight: '1.5'
                }}
                    className="payment-dialog pt-5 my-5 mx-5">
                    We are working on implementing payment gateways. For the time being, to place orders please reach out to me personally through the <a style={{ textDecoration: 'none' }} href="/contact">contact form</a>.
                </h4>
                <h5 style={{ color: '#303030', fontWeight: '700' }}>Apologies for the inconvenience 🙏</h5>
                <a style={{ textDecoration: 'none' }} href="/">Go back to home</a>
            </div >
        </Fade>
    )
}

export default PaymentDialog
