import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ singleOrder, refetch, index }) => {
    const { name, price, orderQuantity, productName, email, phone, _id } = singleOrder
    const handleShippedOrder = id => {

        fetch(`http://localhost:5000/shipped/${id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Shipped Order Successfully')
                refetch()
            })
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?? wanna deleted?')
        if (proceed) {
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast('successFully delete order')
                        refetch()
                    }
                })
        }

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>{phone}</td>

            <td>{singleOrder?.paid && !singleOrder?.shipped && <button onClick={() => handleShippedOrder(_id)} className='btn btn-primary btn-xs'>Pending</button>}
                {singleOrder?.shipped && <button onClick={() => handleShippedOrder(_id)} className='btn btn-success btn-xs'>Shipped</button>}
                {!singleOrder?.paid && <button onClick={() => handleDelete(_id)} className='btn btn-secondary btn-xs'>Cancel</button>}
            </td>
            <td>{singleOrder?.paid && <p className='text-primary'>paid</p>}
                {!singleOrder?.paid && <p className='text-secondary'>Unpaid</p>}</td>



        </tr>
    );
};

export default ManageOrderRow;