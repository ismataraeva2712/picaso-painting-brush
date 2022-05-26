import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/Button';

const Tool = ({ tool }) => {
    const { name, price, description, picture, minimumQuantity, availableQuantity, _id } = tool
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="card max-w-sm mx-auto bg-base-100 shadow-xl">
                <figure><img style={{ height: '200px', width: '100%' }} src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary f-bold">Price: ${price}</div>
                    </h2>
                    <p>{description}</p>
                    <p className='text-left'>Minimum quantity : {minimumQuantity}</p>
                    <p className='text-left'>Available quantity: {availableQuantity}</p>
                    <div className="card-actions justify-end">

                        <div onClick={() => handlePurchase(_id)} className="badge badge-outline btn-sm btn-primary uppercase text-white font-bold  bg-gradient-to-r from-primary to-secondary">purchase</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;