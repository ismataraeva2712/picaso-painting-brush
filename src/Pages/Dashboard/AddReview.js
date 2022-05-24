import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddReview = () => {
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {

        const reviewProduct = {
            name: user.displayName,
            email: user.email,

            review: data.review,
            rating: data.rating
        }
        console.log(reviewProduct)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    toast.success("Successfully added a review")
                }
                else {
                    toast.error('Failed to added a review')
                }
            })

    }
    return (
        <div>
            <div className='flex justify-center  h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold text-primary">Add Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    disabled
                                    className="input input-bordered bg-white"
                                    {...register("name")}
                                    defaultValue={user?.displayName}
                                />
                            </div>

                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    disabled
                                    className="input input-bordered bg-white"
                                    {...register("email")}
                                    defaultValue={user?.email}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">review</span>

                                </label>
                                <input {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'review is required'
                                    }
                                })}
                                    type="text"
                                    placeholder="Your review"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.review?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.review.message}</span>}

                                </label>
                            </div>
                            {/* =========================== */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Rating</span>

                                </label>
                                <input {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'rating is required'
                                    }
                                })}
                                    type="text"
                                    placeholder="rating"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.rating?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.rating.message}</span>}


                                </label>
                            </div>
                            {/* ============= */}


                            <div><input className='btn btn-primary' type="submit" value='Add review' /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;