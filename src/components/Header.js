import React, { useEffect, useState } from 'react'
import '../components/Header.css'
import {
    FaChevronDown,
    FaSearch,
    FaShoppingCart,
    FaUserCircle
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Header = () => {

    const cart = useSelector((state) => state.cart.cartlist)

    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [products, setProducts] = useState([])
     const navigate = useNavigate();


    useEffect(() => {

        axios.get("https://dummyjson.com/products/category/mens-shirts")
            .then((response) => {
                setProducts(response.data.products)
            })
            .catch((err) => {
                console.error("Error fetching products:", err)
            })

    }, [])


    useEffect(() => {

        if (query.trim() === '') {
            setSuggestions([])
            return
        }

        const result = products.filter((product) =>
            product.title
                .toLowerCase()
                .includes(query.toLowerCase())
        )

        setSuggestions(result.slice(0, 5))

    }, [query, products])

    const handleSuggestionClick = (product) => {
        setQuery(product.title);
        navigate(`/productdetail/${product.id}`);
        setSuggestions([]);
    }


    return (
        <nav className="navbar navbar-expand-lg shop-navbar">
            <div className="container px-lg-5">
                <Link className="navbar-brand shop-logo" to="/">
                    SHOP.CO
                </Link>
                <div className="mobile-nav-icons">
                    <Link to="/cart" className="cart-wrapper">
                        <FaShoppingCart className="cart-icon" />
                        <span>
                            {cart.length}
                        </span>
                    </Link>
                    <Link to="/">
                        <FaUserCircle className="user-icon" />
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="mainNavbar"
                >
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
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {suggestions.length > 0 && (
                            <ul className="search-suggestions">
                                {suggestions.map((product) => (
                                    <li
                                        className="suggestion-item"
                                        key={product.id}
                                        onClick={() =>
                                            handleSuggestionClick(product)
                                        }
                                    >
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="suggestion-image"
                                            to='/productdetail/:id'
                                        />
                                        <div className="suggestion-content">
                                            <h6>
                                                {product.title}
                                            </h6>
                                            <p>
                                                Men's Shirt
                                            </p>
                                        </div>
                                        <span className="suggestion-price">
                                            ${product.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="nav-icons">
                        <Link
                            to="/cart"
                            className="cart-wrapper"
                        >
                            <FaShoppingCart className="cart-icon" />
                            <span>
                                {cart.length}
                            </span>
                        </Link>
                        <Link to="/">
                            <FaUserCircle className="user-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header