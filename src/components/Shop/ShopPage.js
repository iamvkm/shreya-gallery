import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './shop-page.css'
import database from '../../database.json'

function ShopPage(props) {

    const wishlist = props.wishlist.filter(i => i.exists)
    const [wishlisted, setWishlisted] = useState(false)

    useEffect(() => {
    }, [wishlisted])

    const showToast = (name) => {
        toast.dark(name + ' 🎨 added to Cart!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const RenderItem = ({ data }) => {

        return (
            <div className="item-card col-md-4 shadow p-4 mt-4" key={data.id}>
                <h1 className="price mt-1 mb-2">₹{data.price}</h1>
                <h3 className="name mb-3">{data.name}</h3>
                <img className="item-img shadow-sm mb-2" src={data.image} alt="" />
                <div className="my-2">
                    <button className="btn btn-warning shadow-sm me-2" onClick={() => {
                        props.addToCart(data)
                        showToast(data.name)
                    }} >Add to cart</button>

                    <button className="btn btn-success shadow-sm me-2" onClick={() => {
                        props.toggleWishlist(data)
                    }} >{wishlist.find(i => i.id === data.id) ? 'Wishlist item ❤️' : 'Wishlist item 🤍'}</button>
                </div>
            </div>
        )
    }

    const filteredItems = wishlisted ? wishlist : database
    const paintingsList = filteredItems.map(item => { return <RenderItem data={item} /> })

    return (
        <Fade>
            <div className="shop-page py-5">
                <div className="container">
                    <div className="row mx-1">
                        <ToastContainer />
                        <p>The Earth without Art is just Eh! 🙃</p>
                        <div class="form-check mx-3" style={{ color: 'black' }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={wishlisted} onChange={e => setWishlisted(e.target.checked)} />
                            <label class="form-check-label" htmlFor="flexCheckDefault">
                                Show only my wishlist items
                            </label>
                        </div>
                        {paintingsList}
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default ShopPage
