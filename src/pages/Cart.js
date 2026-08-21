import React, { useEffect, useState } from 'react'
import '../pages/Cart.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineChevronRight } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../Slice/Cartslice'
import { GoArrowRight } from 'react-icons/go'

const Cart = () => {

    const cartitem = useSelector(state => state.cart.cartlist)

    const dispatch = useDispatch()

    const [subtotal, setsubtotal] = useState(0)
    const [discount, setdiscount] = useState(0)

    useEffect(() => {

        let agg_total = 0
        let agg_dis = 0

        cartitem.forEach((v) => {

            const total = Number(v.price) * Number(v.counter)

            const dis =
                total * Number(v.discountPercentage || 0) / 100

            agg_total += total
            agg_dis += dis
        })

        setsubtotal(agg_total)
        setdiscount(agg_dis)

    }, [cartitem])


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

                <h1 className="cart-title">
                    YOUR CART
                </h1>

                <div className="row g-3">

                    {/* CART PRODUCTS */}
                    <div className="col-lg-7">

                        {cartitem && cartitem.length > 0 ? (

                            cartitem.map((v, i) => (

                                <div
                                    className="cart-box mb-2"
                                    key={v.id || i}
                                >

                                    <div className="cart-product">

                                        {/* IMAGE */}
                                        <div className="product-images">

                                            <img
                                                src={v.thumbnail}
                                                alt={v.title}
                                            />

                                        </div>


                                        {/* PRODUCT INFO */}
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
                                                ${(Number(v.price) * Number(v.counter)).toFixed(2)}
                                            </div>

                                        </div>


                                        {/* QUANTITY */}
                                        <div className="quantity">

                                            <button
                                                onClick={() =>
                                                    dispatch(removeToCart(v))
                                                }
                                            >
                                                −
                                            </button>

                                            <span>
                                                {v.counter}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    dispatch(addToCart(v))
                                                }
                                            >
                                                +
                                            </button>

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

                                <span>
                                    Subtotal
                                </span>

                                <strong>
                                    ${subtotal.toFixed(2)}
                                </strong>

                            </div>


                            <div className="summary-row discount">

                                <span>
                                    Discount
                                </span>

                                <strong>
                                    -${discount.toFixed(2)}
                                </strong>

                            </div>


                            <div className="summary-row">

                                <span>
                                    Delivery Fee
                                </span>

                                <strong>
                                    Free
                                </strong>

                            </div>


                            <div className="summary-row total-row">

                                <span>
                                    Total
                                </span>

                                <strong>
                                    ${(subtotal - discount).toFixed(2)}
                                </strong>

                            </div>


                            <button className="checkout-btn">

                                Go to Checkout

                                <GoArrowRight
                                    className="ps-1"
                                    style={{ fontSize: "20px" }}
                                />

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