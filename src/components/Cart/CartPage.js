import React from 'react'
import Fade from 'react-reveal/Fade'
import "./cart-page.css"

function CartPage({ cart, updateQuantity }) {

    var sumTotal = 0

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
                            <p className="header">
                                {itemsInCart === 0
                                    ? "Your Cart is Empty!"
                                    : `${itemsInCart} painting${itemsInCart > 1 ? "s" : ""} in Total! 😃`}
                            </p>
                            {cart.map(item => { return <div>{renderItem(item)}</div> })}
                        </div>
                        <div className="col-md-5 col-sm-12 sum-section">
                            <h1>Sum total : </h1>
                            <h1 className="sum-total">₹{sumTotal}</h1>
                            <button className="btn btn-warning">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default CartPage
