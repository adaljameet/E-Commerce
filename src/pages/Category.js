// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import '../pages/Category.css';
// import { MdOutlineChevronRight } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import Card from '../components/Card';
// import { PiSlidersBold } from 'react-icons/pi';
// import { GoArrowLeft, GoArrowRight, GoChevronRight, GoChevronUp } from 'react-icons/go';


// const Category = () => {
//     return (
//         <>
//             <Header />
//             <main className="container product-detail-container">
//                 <div className="breadcrumb-area">
//                     <Link to="/">Home</Link>
//                     <span><MdOutlineChevronRight /></span>
//                     <Link to="/">Shop</Link>
//                 </div>

//                 <div className="row g-3">
//                     <div className="col-12 d-lg-none">
//                         <Link to='/' className="mobile-filter">
//                             Filters
//                         </Link>
//                     </div>


//                     <div className="col-lg-3 d-none d-lg-block">
//                         <aside className="filter-sidebar">

//                             <div className="filter-title">
//                                 <h6>Filters</h6>
//                                 <PiSlidersBold />
//                             </div>

//                             <div className="filter-category">
//                                 <div>T-shirts <GoChevronRight /></div>
//                                 <div>Shorts <GoChevronRight /></div>
//                                 <div>Shirts <GoChevronRight /></div>
//                                 <div>Hoodie <GoChevronRight /></div>
//                                 <div>Jeans <GoChevronRight /></div>
//                             </div>


//                             <div className="filter-box">
//                                 <div className="filter-heading">
//                                     <strong>Price</strong>
//                                     <GoChevronUp />
//                                 </div>

//                                 <div className="price-slider">
//                                     <div className="line"></div>
//                                     <span className="price-dot left"></span>
//                                     <span className="price-dot right"></span>
//                                 </div>

//                                 <div className="price-values">
//                                     <span>$50</span>
//                                     <span>$200</span>
//                                 </div>
//                             </div>


//                             <div className="filter-box">
//                                 <div className="filter-heading">
//                                     <strong>Colors</strong>
//                                     <GoChevronUp />
//                                 </div>

//                                 <div className="colors">
//                                     <span className="color green"></span>
//                                     <span className="color red"></span>
//                                     <span className="color yellow"></span>
//                                     <span className="color orange"></span>
//                                     <span className="color cyan"></span>

//                                     <span className="color blue selected">
//                                         <i className="fa-solid fa-check"></i>
//                                     </span>

//                                     <span className="color purple"></span>
//                                     <span className="color pink"></span>
//                                     <span className="color white"></span>
//                                     <span className="color black"></span>
//                                 </div>
//                             </div>


//                             <div className="filter-box">
//                                 <div className="filter-heading">
//                                     <strong>Size</strong>
//                                     <GoChevronUp />
//                                 </div>

//                                 <div className="sizes">
//                                     <button>XX-Small</button>
//                                     <button>X-Small</button>
//                                     <button>Small</button>
//                                     <button>Medium</button>
//                                     <button className="selected-size">Large</button>
//                                     <button>X-Large</button>
//                                     <button>XX-Large</button>
//                                     <button>3X-Large</button>
//                                     <button>4X-Large</button>
//                                 </div>
//                             </div>

//                             <div className="filter-box dress-style">
//                                 <div className="filter-heading">
//                                     <strong>Dress Style</strong>
//                                     <GoChevronUp />
//                                 </div>

//                                 <div>Casual <GoChevronRight /></div>
//                                 <div>Formal <GoChevronRight /></div>
//                                 <div>Party <GoChevronRight /></div>
//                                 <div>Gym <GoChevronRight /></div>
//                             </div>

//                             <button className="apply-btn">Apply Filter</button>

//                         </aside>
//                     </div>

//                     <div className="col-lg-9">
//                         <div className="products-header">
//                             <h1>Casual</h1>
//                             <div className="products-info">
//                                 <span>Showing 1-10 of 100 Products</span>
//                             </div>
//                         </div>

//                         <div className="row product-grid">
//                             {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
//                                 <div className="col-6 col-md-4">
//                                     <Card pdata={v} />
//                                 </div>
//                             ))}
//                         </div>


//                         <div className="pagination-area">

//                             <button className="page-prev">
//                                 <GoArrowLeft className='left' />
//                                 Previous
//                             </button>

//                             <div className="pages">
//                                 <button className="active">1</button>
//                                 <button>2</button>
//                                 <button>3</button>
//                                 <span>...</span>
//                                 <button>8</button>
//                                 <button>9</button>
//                                 <button>10</button>
//                             </div>

//                             <button className="page-next">
//                                 Next
//                                 <GoArrowRight className='right' />
//                             </button>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="offcanvas offcanvas-start" id="mobileFilter">

//                     <div className="offcanvas-header">
//                         <h5>Filters</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
//                     </div>

//                     <div className="offcanvas-body">

//                         <div className="filter-category">
//                             <div>T-shirts <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Shorts <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Shirts <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Hoodie <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Jeans <i className="fa-solid fa-chevron-right"></i></div>
//                         </div>

//                         <div className="filter-box">

//                             <div className="filter-heading">
//                                 <strong>Price</strong>
//                                 <GoChevronUp />
//                             </div>

//                             <div className="price-slider">
//                                 <div className="line"></div>
//                                 <span className="price-dot left"></span>
//                                 <span className="price-dot right"></span>
//                             </div>

//                             <div className="price-values">
//                                 <span>$50</span>
//                                 <span>$200</span>
//                             </div>

//                         </div>

//                         <div className="filter-box">

//                             <div className="filter-heading">
//                                 <strong>Colors</strong>
//                                 <GoChevronUp />
//                             </div>

//                             <div className="colors">
//                                 <span className="color green"></span>
//                                 <span className="color red"></span>
//                                 <span className="color yellow"></span>
//                                 <span className="color orange"></span>
//                                 <span className="color cyan"></span>
//                                 <span className="color blue selected">
//                                     <i className="fa-solid fa-check"></i>
//                                 </span>
//                                 <span className="color purple"></span>
//                                 <span className="color pink"></span>
//                                 <span className="color white"></span>
//                                 <span className="color black"></span>
//                             </div>

//                         </div>

//                         <div className="filter-box">

//                             <div className="filter-heading">
//                                 <strong>Size</strong>
//                                 <GoChevronUp />
//                             </div>

//                             <div className="sizes">
//                                 <button>XX-Small</button>
//                                 <button>X-Small</button>
//                                 <button>Small</button>
//                                 <button>Medium</button>
//                                 <button className="selected-size">Large</button>
//                                 <button>X-Large</button>
//                                 <button>XX-Large</button>
//                                 <button>3X-Large</button>
//                                 <button>4X-Large</button>
//                             </div>

//                         </div>

//                         <div className="filter-box dress-style">

//                             <div className="filter-heading">
//                                 <strong>Dress Style</strong>
//                             </div>

//                             <div>Casual <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Formal <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Party <i className="fa-solid fa-chevron-right"></i></div>
//                             <div>Gym <i className="fa-solid fa-chevron-right"></i></div>

//                         </div>

//                         <button className="apply-btn">
//                             Apply Filter
//                         </button>

//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     )
// }

// export default Category