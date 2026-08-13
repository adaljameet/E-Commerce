import React from 'react'
import '../components/Card.css'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Card = ({ pdata }) => {
    return (
        <>

            <div className='col-12 col-sm-6 col-lg-3'>
                <div className='product-card'>
                    <div className='product-image-box'>
                        <Link to='/productdetail'> <img src={pdata.thumbnail} alt={pdata.title} className='product-image' /></Link>
                    </div>
                    <h5 className='product-title'> {pdata.title}</h5>
                    <div className='rating'>
                        <span className='stars'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                        </span>
                        <span className='rating-number'>
                            {pdata.rating}
                        </span>
                    </div>
                    <div className='price-row'>
                        <span className='price'>
                            ${pdata.price}
                        </span>
                        <span className='old-price'>

                        </span>
                        <span className='discount'>
                            {pdata.discountPercentage}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card