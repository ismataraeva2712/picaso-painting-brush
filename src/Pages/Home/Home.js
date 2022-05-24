import React from 'react';
import Footer from '../Shared/Footer';
import AllTools from './AllTools';
import Banner from './Banner';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <AllTools></AllTools>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;