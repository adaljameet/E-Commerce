import React from 'react'
import '../components/Header.css'
import {
    FaChevronDown,
    FaSearch,
    FaShoppingCart,
    FaUserCircle
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const cart = useSelector((state) => state.cart.cartlist);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg shop-navbar">
                <div className="container px-lg-5">

                    <Link className="navbar-brand shop-logo" to="/">
                        SHOP.CO
                    </Link>

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
                                <Link className="nav-link" to="/">
                                    Shop <FaChevronDown size={10} />
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    On Sale
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    New Arrivals
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Brands
                                </Link>
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

                            <Link to="/cart" className="cart-wrapper">

                                <FaShoppingCart className="cart-icon" />
                                <span>{cart.length}</span>


                            </Link>

                            <Link to="/">
                                <FaUserCircle className="user-icon" />
                            </Link>

                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header