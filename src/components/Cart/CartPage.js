import React from 'react'
import Fade from 'react-reveal/Fade'
import "./cart-page.css"

function CartPage({ cart, updateQuantity }) {

    var sumTotal = 0

    const initiatePayment = () => {

    }

    const renderItem = (itemInCart) => {
        sumTotal += itemInCart.price * itemInCart.quantity

        return (
            <div className="cart-wrapper shadow-sm mt-4">
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
            <div className="cart-page py-5" style={itemsInCart ? {} : { height: '100vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 items-split mb-4">
                            <p className="header">
                                {itemsInCart === 0
                                    ? "Your Cart is Empty! 😶"
                                    : `${itemsInCart} Painting${itemsInCart > 1 ? "s" : ""} in total 😃`}
                            </p>
                            {cart.map(item => { return <div> {renderItem(item)} </div> })}
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
