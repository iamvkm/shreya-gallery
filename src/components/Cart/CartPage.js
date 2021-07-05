import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import "./cart-page.css"

function CartPage({ cart, updateQuantity }) {

    var sumTotal = 0

    const renderItem = (itemInCart) => {
        sumTotal += itemInCart.price * itemInCart.quantity

        return (
            <div className="cart-wrapper shadow-sm my-4 p-3">
                <h4 key={itemInCart.id}>
                    <div className="title">
                        <span>{itemInCart.quantity} {itemInCart.name} </span>
                        <span className="price">[ ₹{itemInCart.price * itemInCart.quantity} ]</span>
                        <a href="#" className="delete ms-2" onClick={(e) => updateQuantity(itemInCart.id, 0)}>❌</a>
                    </div>
                    <div className="quantity">
                        <span><button className="btn increase shadow-sm mt-3 me-2" onClick={(e) => updateQuantity(itemInCart.id, itemInCart.quantity, "increment")}>
                            + Increase Quantity
                        </button></span>
                        <span><button className="btn decrease shadow-sm mt-3 me-2" onClick={(e) => updateQuantity(itemInCart.id, itemInCart.quantity, "decrement")}>
                            - Decrease Quantity
                        </button></span>
                    </div>
                </h4>
            </div>
        )
    }

    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <Fade>
            <div className="cart-page py-5 mb-4" style={itemsInCart ? {} : { height: '100vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 items-split mb-4">
                            <p className="header">
                                {itemsInCart === 0
                                    ? "Your Cart is Empty! 😶"
                                    : `${itemsInCart} Painting${itemsInCart > 1 ? "s" : ""} in total 😃`}
                            </p>
                            {cart.map(item => { return <div> {renderItem(item)} </div> })}
                        </div>
                        {itemsInCart > 0 && <div className="col-md-5 col-sm-12 sum-section">
                            <div className="sum-total mb-3">
                                <span>Sum total : </span>
                                <span className="sum-head">₹{sumTotal}</span>
                            </div>
                            <button className="btn btn-warning checkout shadow-sm"><a href="/payment">Proceed to checkout</a></button>
                        </div>}
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default CartPage
