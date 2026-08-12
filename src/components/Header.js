import React from 'react'
import '../components/Header.css'
import { FaChevronDown, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg shop-navbar">
                <div className="container px-lg-5">

                    <a className="navbar-brand shop-logo" href="/">
                        SHOP.CO
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">

                        <ul className="navbar-nav ms-lg-4 gap-lg-3">

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Shop <FaChevronDown size={10} />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    On Sale
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    New Arrivals
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Brands
                                </a>
                            </li>

                        </ul>

                        <div className="search-box mx-lg-auto">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search for products..."
                            />
                        </div>

                        <div className="nav-icons">
                            <FaShoppingCart />
                            <FaUserCircle />

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header