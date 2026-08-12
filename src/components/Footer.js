import React from 'react'
import '../components/Footer.css'
import { BsEnvelope } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (
        <>
            <footer class="footer-section">
                <div class="container">
                    <div class="newsletter-box">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <h2>
                                    STAY UPTO DATE ABOUT<br />
                                    OUR LATEST OFFERS
                                </h2>
                            </div>

                            <div class="col-lg-5">
                                <div class="newsletter-form">
                                    <div class="email-box">
                                        <BsEnvelope />
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    <button class="subscribe-btn">
                                        Subscribe to Newsletter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-content">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 footer-about">
                                <h2>SHOP.CO</h2>
                                <p>
                                    We have clothes that suits your style and
                                    which you’re proud to wear. From women to men.
                                </p>
                                <div class="social-icons">

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


                            <div class="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>COMPANY</h4>
                                <Link to="/">About</Link>
                                <Link to="/">Features</Link>
                                <Link to="/">Works</Link>
                                <Link to="/">Career</Link>
                            </div>


                            <div class="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>HELP</h4>
                                <Link to="/">Customer Support</Link>
                                <Link to="/">Delivery Details</Link>
                                <Link to="/">Terms & Conditions</Link>
                                <Link to="/">Privacy Policy</Link>
                            </div>


                            <div class="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>FAQ</h4>
                                <Link to="/">Account</Link>
                                <Link to="/">Manage Deliveries</Link>
                                <Link to="/">Orders</Link>
                                <Link to="/">Payments</Link>
                            </div>

                            <div class="col-lg-2 col-md-3 col-6 footer-column">
                                <h4>RESOURCES</h4>
                                <Link to="/">Free eBooks</Link>
                                <Link to="/">Development Tutorial</Link>
                                <Link to="/">How to - Blog</Link>
                                <Link to="/">Youtube Playlist</Link>
                            </div>
                        </div>
                    </div>


                    <div class="footer-bottom">
                        <p>
                            Shop.co © 2000-2023, All Rights Reserved
                        </p>

                        <div class="payment-methods">

                            <div class="payment visa">
                                VISA
                            </div>

                            <div class="payment mastercard">
                                <span></span>
                                <span></span>
                            </div>

                            <div class="payment paypal">
                                PayPal
                            </div>

                            <div class="payment apple">
                                <i class="fa-brands fa-apple"></i>Pay
                            </div>

                            <div class="payment gpay">
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