import React from 'react'

function PaymentDialog() {
    return (
        <div>
            <div style={{ height: '100vh', textAlign: 'center' }}>

                <h4 style={{
                    color: '#e74c3c',
                    lineHeight: '1.5'
                }}
                    className="payment-dialog pt-5 mt-5 mx-5">
                    We are working on implementing payment gateways. For the time being, please send the amount directly to the following UPI ID :
                </h4>
                <h5 className="my-5" style={{ color: '#00bc8c', fontWeight: '700' }}>shreya-gallery@paytm</h5>
                <h5 style={{ color: '#303030', fontWeight: '700' }}>Apologies for the inconvenience 🙏</h5>
                <a style={{ textDecoration: 'none' }} href="/">Go back to home</a>
            </div >
        </div>
    )
}

export default PaymentDialog
