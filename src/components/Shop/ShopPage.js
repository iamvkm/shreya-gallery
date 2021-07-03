import React from 'react'
import Fade from 'react-reveal/Fade'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './shop-page.css'
import database from '../../database.json'

function ShopPage(props) {

    const RenderItem = ({ data }) => {
        return (
            <div className="item-card col-md-6 col-sm-12 col-xs-12" key={data.id}>
                <img src={data.image} alt="" />
                <h3 className="price">₹{data.price}</h3>
                <h4 className="name">{data.name}</h4>
                <button id="liveToastBtn" className="btn btn-dark" onClick={() => {
                    props.addToCart(data)
                    toast.dark(data.name + ' 🎨 added to Cart!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }} >Add to cart</button>
            </div>
        )
    }

    const paintingsList = database.map(item => { return <RenderItem data={item} /> })

    return (
        <Fade>
            <div className="shop-page">
                <div className="container">
                    <div className="row">
                        <ToastContainer />
                        <p>The earth without art is just eh! 🙃</p>
                        {paintingsList}
                    </div>
                </div>
            </div>
        </Fade >
    )
}

export default ShopPage
