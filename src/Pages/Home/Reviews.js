import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://safe-coast-58270.herokuapp.com/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-12 mx-auto'>
            <h2 className='text-primary font-bold mb-10 text-2xl'>Reviews of Painting Brush </h2>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(r => <Review
                        key={r._id}
                        r={r}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;