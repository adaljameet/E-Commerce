import '../pages/Home.css'
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Home = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [product, setProduct] = useState(null);


    async function getdata() {
        await axios.get(
            "https://dummyjson.com/products/category/mens-shirts"
        ).then((res) => {
            // console.log(res.data);
            setProduct(res.data.products)
        })

    }

    useEffect(() => {
        getdata()

    }, [])



    return (
        <>
            <Header />
            <div className="shop-page">
                <section className="hero-section">
                    <div className="container-fluid px-lg-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6 hero-content">
                                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p>
                                    Browse through our diverse range of meticulously crafted
                                    garments, designed to bring out your individuality and
                                    cater to your sense of style.
                                </p>

                                <button className="shop-btn">
                                    Shop Now
                                </button>
                                <div className="stats-row">
                                    <div className="stat-item">
                                        <h3>200+</h3>
                                        <span>International Brands</span>
                                    </div>
                                    <div className="stat-item">
                                        <h3>2,000+</h3>
                                        <span>High-Quality Products</span>
                                    </div>
                                    <div className="stat-item">
                                        <h3>30,000+</h3>
                                        <span>Happy Customers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 hero-image-container">
                                <img
                                    src={require("../assets/assets01.png")}
                                    alt="Fashion Models"
                                    className="hero-image"
                                />
                                <div className="star star-one">✦</div>
                                <div className="star star-two">✦</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brand-section">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-around text-center">

                            <div className="col-6 col-md brand-logo">
                                <img src={require('../assets/Versach.png')} alt='Versach' />
                            </div>

                            <div className="col-6 col-md brand-logo">
                                <img src={require('../assets/zara.png')} alt='zara' />
                            </div>

                            <div className="col-6 col-md brand-logo">
                                <img src={require('../assets/gucci.png')} alt='gucci' />
                            </div>

                            <div className="col-6 col-md brand-logo">
                                <img src={require('../assets/prada.png')} alt='prada' />
                            </div>

                            <div className="col-6 col-md brand-logo">
                                <img src={require('../assets/Calvi-Klein.png')} alt='Klein' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='product-section container'>
                <section className='products-section'>
                    <h2 className='section-title'>NEW ARRIVALS</h2>
                    <div className='row g-4'>
                        {product && product.map((v, i) => {
                            return (
                                <Card pdata={v} key={i} />
                            )
                        })}
                    </div>
                    {/* <div className='view-all-wrapper'>
                        <Link to='/' className='view-all-btn'>View All</Link>
                    </div> */}
                </section>

                <div className='section-divider'></div>
                <section className='products-section'>
                    <h2 className='section-title'>TOP SELLING</h2>
                    <div className='row g-4'>
                        {product && product.map((v, i) => {
                            return (
                                <Card pdata={v} key={i} />
                            )
                        })}
                    </div>
                    {/* <div className='view-all-wrapper'>
                        <Link to='/' className='view-all-btn'>View All</Link>
                    </div> */}
                </section>
            </div>

            <div className='dress-style-section container'>
                <section className='dress-style-box'>
                    <h2 className='dress-style-title'>BROWSE BY DRESS STYLE</h2>
                    <div className='row g-3 gy-3 py-3' >
                        <div className='col-12 col-md-5'>
                            <div className='style-card '>
                                <img src={require('../assets/casual.png')} alt='casual' className='casual' />
                                <h3>Casual</h3>
                            </div>
                        </div>
                        <div className='col-12 col-md-7'>
                            <div className='style-card '>
                                <img src={require('../assets/formal.png')} alt='formal' className='formal' />
                                <h3>Formal</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row g-3 gy-3'>
                        <div className='col-12 col-md-7'>
                            <div className='style-card '>
                                <img src={require('../assets/party.png')} alt='party' className='party' />
                                <h3>Party</h3>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='style-card '>
                                <img src={require('../assets/gym.png')} alt='gym' className='gym' />
                                <h3>Gym</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='customer-section'>
                <div className='container-fluid'>
                    <div className='customer-hrader'>
                        <h2>OUR HAPPY CUSTOMERS</h2>
                    </div>
                    <Slider {...settings}>
                        <div className='customer-slider container'>
                            <div className='customer-card'>
                                <div className="stars">
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                </div>
                                <h5>Sarah M. <span><img src={require('../assets/tick.png')} alt='tick' /></span></h5>
                                <p>
                                    "Finding clothes that align with my personal style
                                    used to be a challenge until I discovered Shop.co.
                                    The range of options they offer is truly remarkable,
                                    catering to a variety of tastes and occasions."
                                </p>
                            </div>
                        </div>

                        <div className='customer-slider'>
                            <div className='customer-card'>
                                <div className="stars">
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                </div>
                                <h5>Alex K. <span><img src={require('../assets/tick.png')} alt='tick' /></span></h5>
                                <p>
                                    "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                                </p>
                            </div>
                        </div>

                        <div className='customer-slider'>
                            <div className='customer-card'>
                                <div className="stars">
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                </div>
                                <h5>James L. <span><img src={require('../assets/tick.png')} alt='tick' /></span></h5>
                                <p>
                                    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                                </p>
                            </div>
                        </div>

                        <div className='customer-slider'>
                            <div className='customer-card'>
                                <div className="stars">
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                </div>
                                <h5>Mooen <span><img src={require('../assets/tick.png')} alt='tick' /></span></h5>
                                <p>
                                    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                                </p>
                            </div>
                        </div>

                        <div className='customer-slider'>
                            <div className='customer-card'>
                                <div className="stars">
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                    <FaStar className='customer-star' />
                                </div>
                                <h5>Sarah M. <span><img src={require('../assets/tick.png')} alt='tick' /></span></h5>
                                <p>
                                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div >
            </section >
            <Footer />
        </>
    )
}

export default Home