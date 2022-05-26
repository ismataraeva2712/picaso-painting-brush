import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)
        const addProduct = {
            name: data.name,
            price: data.price,
            description: data.description,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            picture: data.picture
        }
        fetch('https://safe-coast-58270.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    toast.success("Successfully added a product")
                }
                else {
                    toast.error('Failed to added a product')
                }
            })
    };
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold text-primary">Add Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>
                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>
                            {/* =========================== */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>

                                </label>
                                <input {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    }
                                })}
                                    type="text"
                                    placeholder="Description"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.description?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.description.message}</span>}


                                </label>
                            </div>
                            {/* ============= */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price</span>

                                </label>
                                <input {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'price is required'
                                    }
                                })}
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.price?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.price.message}</span>}


                                </label>
                            </div>
                            {/* ============================ */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Avaiable Quantity</span>

                                </label>
                                <input {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'availableQuantity is required'
                                    }
                                })}
                                    type="number"
                                    placeholder="availableQuantity"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.availableQuantity?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}


                                </label>
                            </div>
                            {/* ====================== */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">minimumQuantity</span>

                                </label>
                                <input {...register("minimumQuantity", {
                                    required: {
                                        value: true,
                                        message: 'minimumQuantity is required'
                                    }
                                })}
                                    type="number"
                                    placeholder="minimumQuantity"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.minimumQuantity?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.minimumQuantity.message}</span>}


                                </label>
                            </div>
                            {/* ========================= */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Picture</span>

                                </label>
                                <input {...register("picture", {
                                    required: {
                                        value: true,
                                        message: 'picture is required'
                                    }
                                })}
                                    type="text"
                                    placeholder="picture url"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.picture?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.picture.message}</span>}


                                </label>
                            </div>

                            <div><input className='btn btn-primary' type="submit" value='Add Product' /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;