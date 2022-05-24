import React from 'react';

const ManageOrderRow = ({ total }) => {
    const { name, price, orderQuantity, productName, email, phone } = total
    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>{phone}</td>

            <td><button className='btn btn-primary btn-xs'>action</button></td>
            <td><button className='btn btn-secondary btn-xs'>action</button></td>


        </tr>
    );
};

export default ManageOrderRow;