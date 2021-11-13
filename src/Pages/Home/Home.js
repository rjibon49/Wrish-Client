import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AllProducts from './AllProducts/AllProducts';
import Banner from './Banner/Banner';
import HomeProduct from './HomeProduct/HomeProduct';
import Reviews from './Reviews/Reviews';
import StoreLocation from './StoreLocation/StoreLocation';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeProduct />
            <StoreLocation />
            <AllProducts />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;