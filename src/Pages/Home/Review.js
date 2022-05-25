import React from 'react';
import b2 from '../../assetes/b2.jpg'
import rating2 from '../../assetes/rating2.png'
import rate from '../../assetes/rate.png'
const Review = ({ r }) => {
    const { review, rating, name } = r
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ height: '50px' }} src={rate} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Review: {review}</p>
                <div className="card-actions">
                    <p >Rating: <span className='text-primary'>{rating}.00</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;