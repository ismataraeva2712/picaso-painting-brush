import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Purchase = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState({})
    const [item, setItem] = useState({})
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

    return (
        <div>
            <h2>Purchase</h2>
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
        </div>
    );
};

export default Purchase;