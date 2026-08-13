import React, { useState } from 'react'
import '../pages/ProductDetail.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineChevronRight, MdOutlineStar } from 'react-icons/md'
import { FaChevronDown, FaSlidersH, } from 'react-icons/fa'
import Card from '../components/Card'

const ProductDetail = (pdata) => {

    const [product, setProduct] = useState(null);

    return (
        <>
            <Header />
            <main className='container'>
                <div className='breadcrumb-area'>
                    <Link to='/'>Home</Link><span><MdOutlineChevronRight /></span><Link to='/' >Shop</Link><span><MdOutlineChevronRight /></span><Link to='/'>Men</Link><span><MdOutlineChevronRight /></span><Link to='/'>T-shirts</Link>
                </div>
                <section className='product-main row'>
                    <div className='col-lg-6 product-gallery'>
                        <div className='row'>
                            <div className='col-3 thumbnail-column'>
                                <div className='thumbmail active'>
                                    <img />
                                </div>
                                <div className='thumbmail'>
                                    <img />
                                </div>
                                <div className='thumbmail'>
                                    <img />
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="main-product-image">
                                    <img
                                        alt="Product"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6 product-info">

                        <h1>ONE LIFE GRAPHIC T-SHIRT</h1>

                        <div className="product-rating">
                            <span className="review-stars">
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                            </span>
                            <span>4.5/5</span>
                        </div>

                        <div className="product-price">
                            $260
                            <span>$300</span>
                            <b>-40%</b>
                        </div>

                        <p className="product-description">
                            This graphic t-shirt is perfect for any occasion.
                            Crafted from a soft and breathable fabric, it offers
                            superior comfort and style.
                        </p>

                        <hr />

                        <div className="option-title">
                            Select Colors
                        </div>

                        <div className="color-options">
                            <button className="color brown"></button>
                            <button className="color green"></button>
                            <button className="color navy"></button>
                        </div>

                        <hr />

                        <div className="option-title">
                            Choose Size
                        </div>

                        <div className="size-options">
                            <button>Small</button>
                            <button>Medium</button>
                            <button className="selected">Large</button>
                            <button>X-Large</button>
                        </div>

                        <div className="cart-row">

                            <div className="quantity">
                                <button>−</button>
                                <span>1</span>
                                <button>+</button>
                            </div>

                            <button className="add-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </section>


                <section className="review-tabs">
                    <div className="row text-center">
                        <div className="col-4">
                            <button>Product Details</button>
                        </div>

                        <div className="col-4 active-tab">
                            <button>Rating & Reviews</button>
                        </div>

                        <div className="col-4">
                            <button>FAQs</button>
                        </div>
                    </div>
                </section>


                <section className="reviews-section">
                    <div className="reviews-header">
                        <h3>
                            All Reviews <span>(451)</span>
                        </h3>

                        <div className="review-actions">
                            <button className="filter-btn">
                                <FaSlidersH />
                            </button>

                            <button className="latest-btn">
                                Latest <FaChevronDown size={9} />
                            </button>

                            <button className="write-review">
                                Write a Review
                            </button>
                        </div>

                    </div>

                    <div class="row g-3">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="review-card">
                                <div class="review-top">
                                    <div class="review-stars">
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                    </div>
                                    <span class="dots">•••</span>
                                </div>
                                <h3>
                                    Samantha D.
                                    <span class="verified">✓</span>
                                </h3>
                                <p>
                                    "I absolutely love this t-shirt! The design is unique
                                    and the fabric feels so comfortable. As a fellow designer,
                                    I appreciate the attention to detail. It's become my
                                    favorite go-to shirt."
                                </p>

                                <div class="posted">
                                    Posted on August 14, 2023
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="review-card">
                                <div class="review-top">
                                    <div class="review-stars">
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                    </div>
                                    <span class="dots">•••</span>
                                </div>
                                <h3>
                                    Alex M.
                                    <span class="verified">✓</span>
                                </h3>
                                <p>
                                    "The t-shirt exceeded my expectations! The colors are
                                    vibrant and the print quality is top-notch. Being a UI/UX
                                    designer myself, I'm quite picky about aesthetics, and
                                    this t-shirt definitely gets a thumbs up from me."
                                </p>
                                <div class="posted">
                                    Posted on August 15, 2023
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="review-card">
                                <div class="review-top">
                                    <div class="review-stars">
                                       <MdOutlineStar />
                                       <MdOutlineStar />
                                       <MdOutlineStar />
                                    </div>
                                    <span class="dots">•••</span>
                                </div>
                                <h3>
                                    Ethan R.
                                    <span class="verified">✓</span>
                                </h3>

                                <p>
                                    "This t-shirt is a must-have for anyone who appreciates
                                    good design. The minimalist yet stylish pattern caught
                                    my eye, and the fit is perfect. I can see the designer's
                                    touch in every aspect of this shirt."
                                </p>
                                <div class="posted">
                                    Posted on August 16, 2023
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="review-card">
                                <div class="review-top">

                                    <div class="review-stars">
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                    </div>
                                    <span class="dots">•••</span>
                                </div>
                                <h3>
                                    Olivia P.
                                    <span class="verified">✓</span>
                                </h3>
                                <p>
                                    "As a UI/UX enthusiast, I value simplicity and
                                    functionality. This t-shirt not only represents those
                                    principles but also feels great to wear. It's evident
                                    that the designer poured their creativity into making
                                    this t-shirt stand out."
                                </p>

                                <div class="posted">
                                    Posted on August 17, 2023
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="review-card">
                                <div class="review-top">
                                    <div class="review-stars">
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                        <MdOutlineStar />
                                    </div>
                                    <span class="dots">•••</span>
                                </div>

                                <h3>
                                    Liam K.
                                    <span class="verified">✓</span>
                                </h3>

                                <p>
                                    "This t-shirt is a fusion of comfort and creativity.
                                    The fabric is soft, and the design speaks volumes about
                                    the designer's skill. It's like wearing a piece of art
                                    that reflects my passion for both design and fashion."
                                </p>

                                <div class="posted">
                                    Posted on August 18, 2023
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="review-card">
                                <div class="review-top">
                                    <div class="review-stars">
                                       <MdOutlineStar />
                                       <MdOutlineStar />
                                       <MdOutlineStar />
                                       <MdOutlineStar />
                                    </div>
                                    <span class="dots">•••</span>

                                </div>
                                <h3>
                                    Ava H.
                                    <span class="verified">✓</span>
                                </h3>
                                <p>
                                    "I'm not just wearing a t-shirt; I'm wearing a piece of
                                    design philosophy. The intricate details and thoughtful
                                    layout of the design make this shirt a conversation
                                    starter."
                                </p>

                                <div class="posted">
                                    Posted on August 19, 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="load-more">
                        <button>
                            Load More Reviews
                        </button>
                    </div>

                </section>


                <section className="also-like">

                    <h2>YOU MIGHT ALSO LIKE</h2>

                    <div className="row g-3">

                        {product && product.map((v, i) => {
                            return (
                                <Card pdata={v} key={i} />
                            )
                        })}

                    </div>

                </section>

            </main>
            <Footer />
        </>
    )
}

export default ProductDetail