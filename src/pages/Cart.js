import React from 'react'
import '../pages/Cart.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineChevronRight } from 'react-icons/md'
import { useSelector } from 'react-redux'




const Cart = () => {

    const cartitem = useSelector(state => state.cart.cartlist)


    return (
        <>
            <Header />
            <div className="cart-container">
                <div className="breadcrumb-area">
                    <Link to="/">Home</Link>
                    <span>
                        <MdOutlineChevronRight />
                    </span>
                    <Link to="/cart">Cart</Link>
                </div>
                <h1 className="cart-title">YOUR CART</h1>
                <div className="row g-3">
                    <div className="col-lg-7">
                        {cartitem && cartitem.length > 0 ? (
                            cartitem.map((v, i) => (
                                <div className="cart-box" key={v.id || i}>
                                    <div className="cart-product">
                                        <div className="product-images">
                                            <img
                                                src={v.thumbnail}
                                                alt={v.title}
                                            />
                                        </div>
                                        <div className="product-info">

                                            <div className="product-name">
                                                {v.title}
                                            </div>

                                            <div className="product-detail">
                                                Size: Large
                                            </div>

                                            <div className="product-detail">
                                                Color: White
                                            </div>

                                            <div className="product-price">
                                                ${v.price}
                                            </div>

                                        </div>
                                        <button className="delete-btn">
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                        <div className="quantity">
                                            <button>−</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-cart">
                                <h3>Your cart is empty</h3>
                                <Link to="/">
                                    Continue Shopping
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-5">
                        <div className="summary-box">
                            <h2 className="summary-title">
                                Order Summary
                            </h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <strong>$565</strong>
                            </div>
                            <div className="summary-row discount">
                                <span>Discount (-20%)</span>
                                <strong>-$113</strong>
                            </div>
                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <strong>$15</strong>
                            </div>
                            <div className="summary-row total-row">
                                <span>Total</span>
                                <strong>$467</strong>
                            </div>
                            <div className="promo-area">
                                <div className="email-box promo-input">
                                    <i className="bi bi-tag"></i>

                                    <input
                                        type="text"
                                        placeholder="Add promo code"
                                    />
                                </div>
                                <button className="apply-btn">
                                    Apply
                                </button>
                            </div>
                            <button className="checkout-btn">
                                Go to Checkout
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart