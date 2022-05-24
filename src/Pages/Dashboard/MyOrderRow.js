import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ orderBook, index, handleDelete }) => {

    const { price, orderQuantity
        , productName, name, email, phone, _id } = orderBook

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{phone}</td>

            <td>{!orderBook.paid && <button onClick={() => handleDelete(_id)} className='btn btn-primary btn-xs'>Delete</button>}</td>
            <td>
                {(price && !orderBook?.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-secondary btn-xs'>Pay</button></Link>}
                {(price && orderBook?.paid) && <div>
                    <button className='btn btn-success btn-xs'>Paid</button>
                    <p><small>Transaction Id: <br /> <span className='text-primary'>{orderBook.transactionId}</span></small></p>
                </div>}


            </td>
        </tr>
    );
};

export default MyOrderRow;