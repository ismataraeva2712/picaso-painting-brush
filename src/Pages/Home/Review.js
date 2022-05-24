import React from 'react';
import b2 from '../../assetes/b2.jpg'
import rating2 from '../../assetes/rating2.png'
import rate from '../../assetes/rate.png'
const Review = ({ r }) => {
    const { review, rating, name } = r
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img style={{ height: '100px' }} src={rate} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name: {name}</h2>
                <p>Review: {review}</p>
                <div class="card-actions">
                    <p >Rating: <span className='text-primary'>{rating}.00</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;