import React from 'react';


import rate from '../../assetes/rate.png'
const Review = ({ r }) => {
    const { review, rating, name } = r
    return (
        <div className="card max-w-sm mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ height: '50px' }} src={rate} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Review: {review}</p>
                <div className="card-actions">
                    <p >Rating: <span className='text-primary'>{rating}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;