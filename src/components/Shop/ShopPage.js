import React from 'react'
import Fade from 'react-reveal/Fade'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './shop-page.css'
import database from '../../database.json'

function ShopPage(props) {

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
            <div className="item-card col-sm-12 col-xs-12 shadow py-4 mx-4 my-5" key={data.id}>
                <h3 className="name mb-4">{data.name}</h3>
                <img className="item-img shadow-sm mb-2" src={data.image} alt="" />
                <h1 className="price mt-1 mb-4">₹{data.price}</h1>
                <button id="liveToastBtn" className="btn btn-lg btn-warning shadow-sm" onClick={() => {
                    props.addToCart(data)
                    showToast(data.name)
                }} >Add to cart</button>
            </div>
        )
    }

    const paintingsList = database.map(item => { return <RenderItem data={item} /> })

    return (
        <Fade>
            <div className="shop-page py-5">
                <div className="container">
                    <div className="row center">
                        <ToastContainer />
                        <p>The Earth without Art is just Eh! 🙃</p>
                        {paintingsList}
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default ShopPage
