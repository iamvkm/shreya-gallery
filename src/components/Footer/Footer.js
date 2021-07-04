import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="footer-text mb-5">
                        <h4>Thank you note:</h4>
                        <p>Thank you for visiting my site. Hope you liked what you saw. If you wish to have any personalized art made for you or your loved ones, please feel free to drop me a message <a href="/contact" style={{ color: 'green' }}>here</a> or mail me directly at mail ID below. I'll contact you soon 🙂</p>
                        <a style={{ color: 'green' }} href={'mailto:contactshreya@gmail.com'}>contactshreya@gmail.com</a>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h5>Quick Links</h5>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/shop">Store</a></li>
                                <li><a href="/cart">My Cart</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5>Social Links</h5>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                                <li><a href="#">Tumblr</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="bottom-text mt-4">Shreya's Gallery &copy; 2021 <br /> Made with ❤️ by <a href="https://www.linkedin.com/in/iamvkm" target=" ">Vivek Mishra</a>.</h6>
            </div>
        </div>
    )
}

export default Footer
