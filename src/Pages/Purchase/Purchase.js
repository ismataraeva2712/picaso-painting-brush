import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Purchase = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState({})
    const [item, setItem] = useState({})
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [update])
    // handle quantity
    const handleQuantity = event => {

        event.preventDefault()

        const newquantity = parseInt(event.target.quantity.value) + parseInt(item.minimumQuantity)
        if (newquantity < 1002 && newquantity > 12) {
            const updatedQuantity = { minimumQuantity: newquantity }
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                    setUpdate(data)
                    toast('added successfully')


                })
        }



    }

    // ============================================
    const orderDecrease = () => {
        if (parseInt(item.minimumQuantity) > 12) {

            const newquantity = parseInt(item.minimumQuantity) - 1
            const updatedQuantity = { minimumQuantity: newquantity }
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                    setUpdate(data)
                    toast('Delevery successfully')


                })
        }
    }
    // =============================
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const booking = {
            name: user.displayName,
            email: user.email,

            items: data.items,
            itemName: data.itemName
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Booking successfull')
            })


    };

    return (
        <div className='flex  flex-col lg:flex-row justify-evenly'>

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={item.picture} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Order for : {item.name}</h2>
                    <p>{item.description}</p>
                    <p>Available Quantity: {item.availableQuantity}</p>
                    <p> Order  : {item.minimumQuantity}</p>

                    <div className="my-5">
                        <form className='my-5' onSubmit={handleQuantity}>
                            <input type="number" name='quantity' placeholder="minimum 12 order" class="input input-bordered input-secondary w-full max-w-xs" />
                            <input type="submit" className='btn btn-primary' value="Order increse" />


                        </form>
                        <button onClick={() => orderDecrease()} className='my-5 btn btn-primary' >Order Decrease</button>
                    </div>
                </div>
            </div>
            {/* ===========================order===== */}
            <div>
                <div className='card w-full'>
                    <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Hello, {user?.displayName}</h1>
                        {/* name  */}
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
                        {/* ======================== */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Purchase item name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Purchaes item name"

                                className="input input-bordered bg-white"
                                {...register("itemName", {
                                    required: {
                                        value: true,
                                        message: 'ItemName is Required'
                                    },

                                })}

                            />
                            <label className="label">
                                {errors.itemName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.itemName.message}</span>}
                            </label>
                        </div>

                        {/* =================== */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Purchase items</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Items quantity"
                                className="input input-bordered bg-white"
                                {...register("items", {
                                    required: {
                                        value: true,
                                        message: 'Items is Required'
                                    },
                                    min: item?.minimumQuantity,
                                    max: item?.availableQuantity
                                })}
                            />
                            <label className="label">
                                {errors.items?.type === 'required' && <span className="label-text-alt text-red-500">{errors.items.message}</span>}

                                {errors.items?.type === 'min' && <span className="label-text-alt text-red-500">You have to Purchase minimum {item?.minimumQuantity} items</span>}

                                {errors.items?.type === 'max' && <span className="label-text-alt text-red-500">You can't Purchase up to available {item?.availableQuantity} items</span>}
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type='submit' value='Purchase' className="btn btn-primary" />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchase;