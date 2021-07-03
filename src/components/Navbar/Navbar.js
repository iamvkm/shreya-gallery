import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand mb-0 h1" href="/">Shreya's Gallery ⭐</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#buttonToCollapseNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="buttonToCollapseNavbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/shop">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">My Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
