import React from 'react'
import '../components/Footer.css'
import { BsEnvelope } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="newsletter-box">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h2>
                                    STAY UPTO DATE ABOUT<br />
                                    OUR LATEST OFFERS
                                </h2>
                            </div>

                            <div className="col-lg-5">
                                <div className="newsletter-form">
                                    <div className="email-box">
                                        <BsEnvelope />
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    <button className="subscribe-btn">
                                        Subscribe to Newsletter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 footer-about">
                                <h2>SHOP.CO</h2>
                                <p>
                                    We have clothes that suits your style and
                                    which you’re proud to wear. From women to men.
                                </p>
                                <div className="social-icons">

                                    <Link to="/">
                                        <FaTwitter />
                                    </Link>

                                    <Link to="/">
                                        <FaFacebook />
                                    </Link>

                                    <Link to="/">
                                        <FaInstagram />
                                    </Link>

                                    <Link to="/">
                                        <FaGithub />
                                    </Link>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>COMPANY</h4>
                                <Link to="/">About</Link>
                                <Link to="/">Features</Link>
                                <Link to="/">Works</Link>
                                <Link to="/">Career</Link>
                            </div>


                            <div className="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>HELP</h4>
                                <Link to="/">Customer Support</Link>
                                <Link to="/">Delivery Details</Link>
                                <Link to="/">Terms & Conditions</Link>
                                <Link to="/">Privacy Policy</Link>
                            </div>


                            <div className="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>FAQ</h4>
                                <Link to="/">Account</Link>
                                <Link to="/">Manage Deliveries</Link>
                                <Link to="/">Orders</Link>
                                <Link to="/">Payments</Link>
                            </div>

                            <div className="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>RESOURCES</h4>
                                <Link to="/">Free eBooks</Link>
                                <Link to="/">Development Tutorial</Link>
                                <Link to="/">How to - Blog</Link>
                                <Link to="/">Youtube Playlist</Link>
                            </div>
                        </div>
                    </div>


                    <div className="footer-bottom">
                        <p>
                            Shop.co © 2000-2023, All Rights Reserved
                        </p>

                        <div className="payment-methods">

                            <div className="payment visa">
                                VISA
                            </div>

                            <div className="payment mastercard">
                                <span></span>
                                <span></span>
                            </div>

                            <div className="payment paypal">
                                PayPal
                            </div>

                            <div className="payment apple">
                                <i className="fa-brands fa-apple"></i>Pay
                            </div>

                            <div className="payment gpay">
                                <span>G</span> Pay
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer