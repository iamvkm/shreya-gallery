import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer py-4">
            <div className="container">
                <div className="row">
                    <div className="footer-text">
                        <h4>Some heading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h5>Quick Links</h5>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Store</a></li>
                                <li><a href="#">My Cart</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5>Share</h5>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                                <li><a href="#">Tumblr</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="bottom-text">Shreya's Gallery &copy; 2021 <br/>
                Made with ❤️ by <a href="https://www.linkedin.com/in/iamvkm" target=" ">Vivek Mishra</a></h6>
            </div>
        </div>
    )
}

export default Footer
