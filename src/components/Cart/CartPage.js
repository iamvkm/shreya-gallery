import React from 'react'
import Fade from 'react-reveal/Fade'
import "./cart-page.css"

function CartPage({ cart, updateQuantity }) {

    var sumTotal = 0

    const completePayment = () => {
        var request = require('request');

        var headers = {
            'X-Api-Key': '3fd5b01a6593783b773e7f6e256ab105',
            'X-Auth-Token': 'ba44eb540a5aa5e997b0c13757925704'
        }

        var payload = {
            purpose: 'Painting',
            amount: sumTotal,
        }

        request.post('https://www.test.instamojo.com/api/1.1/payment-requests/', { form: payload, headers: headers }, function (error, response, body) {
            if (!error && response.statusCode == 201) {
                console.log(body);
            }
        })
    }

    const renderItem = (itemInCart) => {
        sumTotal += itemInCart.price * itemInCart.quantity

        return (
            <div className="cart-wrapper">
                <h4 key={itemInCart.id}>
                    <span>{itemInCart.quantity} {itemInCart.name} </span>
                    <span className="price">(₹{itemInCart.price * itemInCart.quantity})</span>
                    <a href="#" className="delete" onClick={(e) => updateQuantity(itemInCart.id, 0)}>❌</a>
                    <div className="quantity">
                        <button className="btn increase" onClick={(e) => updateQuantity(itemInCart.id, itemInCart.quantity, "increment")}>
                            Increase
                        </button>
                        <button className="btn decrease" onClick={(e) => updateQuantity(itemInCart.id, itemInCart.quantity, "decrement")}>
                            Decrease
                        </button>
                    </div>
                </h4>
            </div>
        )
    }

    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <Fade>
            <div className="cart-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 items-split">
                            <h3>
                                {itemsInCart === 0
                                    ? "Your Cart is Empty!"
                                    : `${itemsInCart} painting${itemsInCart > 1 ? "s" : ""} in Total! 😃`}
                            </h3>
                            {cart.map(item => { return <div>{renderItem(item)}</div> })}
                        </div>
                        <div className="col-md-5 col-sm-12 sum-section">
                            <h1>Sum total : </h1>
                            <h1 className="sum-total">₹{sumTotal}</h1>
                            <button className="btn btn-warning" onClick={completePayment}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default CartPage
