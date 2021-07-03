import React from 'react'
import Fade from 'react-reveal/Fade'
import "./cart-page.css"

function CartPage({ cart, updateQuantity }) {

    var sumTotal = 0

    const initiatePayment = () => {
        var request = require('request');

        var headers = {
            'X-Api-Key': '3fd5b01a6593783b773e7f6e256ab105',
            'X-Auth-Token': 'ba44eb540a5aa5e997b0c13757925704'
        }

        var payload = {
            purpose: 'Paintings',
            amount: sumTotal,
        }

        request.post('https://www.instamojo.com/api/1.1/payment-requests/', { form: payload, headers: headers }, function (error, response, body) {
            if (!error && response.statusCode === 201) {
                console.log(body);
            }
        })
    }

    const renderItem = (itemInCart) => {
        sumTotal += itemInCart.price * itemInCart.quantity

        return (
            <div className="cart-wrapper shadow-sm">
                <h4 key={itemInCart.id}>
                    <span>{itemInCart.quantity} {itemInCart.name} </span>
                    <span className="price">[ ₹{itemInCart.price * itemInCart.quantity} ]</span>
                    <a href="#" className="delete" onClick={(e) => updateQuantity(itemInCart.id, 0)}>❌</a>
                    <div className="quantity">
                        <button className="btn increase shadow-sm" onClick={(e) => updateQuantity(itemInCart.id, itemInCart.quantity, "increment")}>
                            + Increase Quantity
                        </button>
                        <button className="btn decrease shadow-sm" onClick={(e) => updateQuantity(itemInCart.id, itemInCart.quantity, "decrement")}>
                            - Decrease Quantity
                        </button>
                    </div>
                </h4>
            </div>
        )
    }

    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <Fade>
            <div className="cart-page" style={itemsInCart ? {} : { height: '100vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 items-split mb-5">
                            <p className="header">
                                {itemsInCart === 0
                                    ? "Your Cart is Empty! 😶"
                                    : `${itemsInCart} Painting${itemsInCart > 1 ? "s" : ""} in total 😃`}
                            </p>
                            {cart.map(item => {
                                return (
                                    <div>
                                        {renderItem(item)}
                                    </div>
                                )
                            })}
                        </div>
                        {itemsInCart > 0 && <div className="col-md-5 col-sm-12 sum-section">
                            <div className="sum-total">
                                <span className="sum-head">Sum total : </span>
                                <span>₹{sumTotal}</span>
                            </div>
                            <button className="btn btn-warning checkout shadow-sm" onClick={initiatePayment}>Proceed to checkout</button>
                        </div>}
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default CartPage
