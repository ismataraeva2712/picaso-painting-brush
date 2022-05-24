import React from 'react';

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
            <td>{price}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-primary btn-xs'>Delete</button></td>
            <td><button className='btn btn-secondary btn-xs'>Pay</button></td>
        </tr>
    );
};

export default MyOrderRow;