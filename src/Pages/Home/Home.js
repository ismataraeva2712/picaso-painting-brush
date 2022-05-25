import React from 'react';
import Footer from '../Shared/Footer';
import AllTools from './AllTools';
import Banner from './Banner';
import Business from './Business';
import Discount from './Discount';
import Newsletter from './Newsletter';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div  >

            <Banner></Banner>
            <AllTools></AllTools>
            <Reviews></Reviews>
            <Business></Business>
            <Discount></Discount>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;