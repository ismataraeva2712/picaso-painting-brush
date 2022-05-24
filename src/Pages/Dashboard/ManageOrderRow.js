import React from 'react';

const ManageOrderRow = ({ singleOrder }) => {
    const { name, price, orderQuantity, productName, email, phone } = singleOrder
    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>{phone}</td>

            <td>{singleOrder?.paid && <button className='btn btn-primary btn-xs'>Pending</button>}
                {!singleOrder?.paid && <button className='btn btn-secondary btn-xs'>Cancel</button>}
            </td>



        </tr>
    );
};

export default ManageOrderRow;