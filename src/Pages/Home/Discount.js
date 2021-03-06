import React from 'react';
import mega2 from '../../assetes/mega2.webp'
import Button from '../Shared/Button';
const Discount = () => {
    return (
        <div className="hero my-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={mega2} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold text-primary">Mega Offer</h1>
                    <p className="py-6">This month you will get a big discount .you are giving to you 20% discount some painting brush.so dear, dont miss it.</p>
                    <Button>See More</Button>
                </div>
            </div>
        </div>
    );
};

export default Discount;