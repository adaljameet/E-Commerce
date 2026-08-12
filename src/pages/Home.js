import '../pages/Home.css'
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {

    const [product, setProduct] = useState(null);


    async function getdata() {
        await axios.get(
            "https://dummyjson.com/products"
        ).then((res) => {
            console.log(res.data);
            setProduct(res.data.products)
        })

    }

    useEffect(() => {
        getdata()

    }, [])


    return (
        <>
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
                    <div className='view-all-wrapper'>
                        <button className='view-all-btn'>View All</button>
                    </div>
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
                    <div className='view-all-wrapper'>
                        <button className='view-all-btn'>View All</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home