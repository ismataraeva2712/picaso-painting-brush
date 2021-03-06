import React from 'react';

import b7 from '../../assetes/b7.webp'
import '../Css/Banner.css'

import Button from '../Shared/Button';
const Banner = () => {
    return (

        <div className="hero min-h-screen my-banner my-banner " style={{ background: `url(${b7})`, backgroundSize: 'cover', }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">Picaso Painting Brush</h1>
                    <p className="mb-5 text-white">Picaso painting brush privide you best quality painting brush.Please explore our site.thank you.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;