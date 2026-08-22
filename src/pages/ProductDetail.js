import '../pages/ProductDetail.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import { MdOutlineChevronRight, MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Slice/Cartslice'



const ProductDetail = () => {

    var { id } = useParams();
    // console.log(id)

    const [product, setproductdata] = useState(null);
    const [suggestproduct, setsuggestproduct] = useState(null);
    // const [cnt,setcnt] = useState(0)


    async function getproductbyId(id) {
        await axios.get(`https://dummyjson.com/products/${id}`)
            .then((respons) => {
                // console.log(respons.data);
                setproductdata(respons.data)
            })
            .catch((err) => {
                // console.log(err)
            })
            .finally(
            // console.log('data fetched of single product')
        )
    }

    async function getAllProduct() {
        await axios.get(`https://dummyjson.com/products/category/mens-shirts`)
            .then((respons) => {
                // console.log(respons.data);
                var s_data = respons.data.products;

                var rno = [...s_data].sort(() => 0.5 - Math.random())
                // console.log(rno)
                var suggestrecord = rno.slice(0, 4)
                setsuggestproduct(suggestrecord)

            })
            .catch((err) => {
                // console.log(err)
            })
            .finally(
            // console.log('data fetched of product')
        )
    }

    const dispatch = useDispatch()
    useSelector(state => state.cart.cartlist);


    useEffect(() => {
        getproductbyId(id)
        getAllProduct()
    }, [id])

    // console.log(product);

    // function countnumber(no){
    //     if(no === -1 && cnt === 0){
    //         setcnt(0)
    //     }else{
    //         setcnt(cnt+no)
    //     }
    // }

    return (
        <>
            <Header />
            <main className="container product-detail-container">

                <div className="breadcrumb-area">
                    <Link to="/">Home</Link>
                    <span><MdOutlineChevronRight /></span>
                    <Link to="/">Shop</Link>
                    <span><MdOutlineChevronRight /></span>
                    <Link to="/">Men</Link>
                    <span><MdOutlineChevronRight /></span>
                    <Link to="/">T-shirts</Link>
                </div>

                {product && (<>
                    <section className="product-main row">

                        <div className="col-lg-6 product-gallery">

                            <div className="product-gallery-wrapper">

                                <div className="main-product-image">
                                    <img src={product.thumbnail} alt={product.title} />
                                </div>

                                <div className="thumbnail-column">
                                    {product.images && product.images.map((v, i) => {
                                        return (
                                            <div className="thumbmail" key={i} >
                                                <img src={v} alt="images" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 product-info">

                            <h1>{product.title}</h1>

                            <div className="product-rating">
                                <span className="review-stars">
                                    {[1, 2, 3, 4, 5].map((v, i) => {

                                        if (product.rating >= v) {
                                            return (

                                                <MdOutlineStar key={i} />
                                            )
                                        }
                                        return (

                                            <MdOutlineStarBorder key={i} />
                                        )
                                    })}
                                </span>

                                <span className="rating-number">{product.rating}/5</span>
                            </div>

                            <div className="product-price">
                                ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                                <span>${product.price}</span>
                                <b>{product.discountPercentage}%</b>
                            </div>

                            <p className="product-description">{product.description}</p>

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

                                {/* <div className="quantity">
                                    <button onClick={() => countnumber(-1)}>
                                        <GrFormSubtract />
                                    </button>

                                    <span>{cnt}</span>

                                    <button onClick={() => countnumber(1)}>
                                        <GoPlus />
                                    </button>
                                </div> */}

                                <button className="add-cart" onClick={() => dispatch(addToCart(product))}>
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
                        </div>
                        <div className="row g-3">

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="review-card">
                                    <div className="review-top">
                                        <div className="review-stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>
                                        <span className="dots">•••</span>
                                    </div>

                                    <h3>
                                        Samantha D.
                                        <span className="verified">✓</span>
                                    </h3>

                                    <p>
                                        "I absolutely love this t-shirt! The design is unique
                                        and the fabric feels so comfortable. As a fellow designer,
                                        I appreciate the attention to detail. It's become my
                                        favorite go-to shirt."
                                    </p>

                                    <div className="posted">
                                        Posted on August 14, 2023
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="review-card">
                                    <div className="review-top">
                                        <div className="review-stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>
                                        <span className="dots">•••</span>
                                    </div>

                                    <h3>
                                        Alex M.
                                        <span className="verified">✓</span>
                                    </h3>

                                    <p>
                                        "The t-shirt exceeded my expectations! The colors are
                                        vibrant and the print quality is top-notch."
                                    </p>

                                    <div className="posted">
                                        Posted on August 15, 2023
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="review-card">
                                    <div className="review-top">
                                        <div className="review-stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>
                                        <span className="dots">•••</span>
                                    </div>

                                    <h3>
                                        Ethan R.
                                        <span className="verified">✓</span>
                                    </h3>

                                    <p>
                                        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
                                    </p>

                                    <div className="posted">
                                        Posted on August 16, 2023
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="review-card">
                                    <div className="review-top">
                                        <div className="review-stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>
                                        <span className="dots">•••</span>
                                    </div>

                                    <h3>
                                        Olivia P.
                                        <span className="verified">✓</span>
                                    </h3>

                                    <p>
                                        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
                                    </p>

                                    <div className="posted">
                                        Posted on August 17, 2023
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="review-card">
                                    <div className="review-top">
                                        <div className="review-stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>
                                        <span className="dots">•••</span>
                                    </div>

                                    <h3>
                                        Liam K.
                                        <span className="verified">✓</span>
                                    </h3>

                                    <p>
                                        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
                                    </p>

                                    <div className="posted">
                                        Posted on August 18, 2023
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="review-card">
                                    <div className="review-top">
                                        <div className="review-stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>
                                        <span className="dots">•••</span>
                                    </div>

                                    <h3>
                                        Ava H.
                                        <span className="verified">✓</span>
                                    </h3>

                                    <p>
                                        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
                                    </p>

                                    <div className="posted">
                                        Posted on August 19, 2023
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="load-more">
                            <button>Load More Reviews</button>
                        </div>

                    </section>
                </>)
                }
                <section className="also-like">
                    <h2>YOU MIGHT ALSO LIKE</h2>

                    <div className="row g-3">
                        {suggestproduct && suggestproduct.map((v, i) => {
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