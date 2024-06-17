import React from 'react';
import Navbar from '../Navbar/Navbar';
import Baner from '../Baner/Baner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Navbar />
            <Baner />
            <div className='product-card-container'>
            <Products />
            </div>
        </>
    );
}

export default Home;