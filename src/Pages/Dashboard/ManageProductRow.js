import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ product, index, refetch, setDeleteProduct }) => {
    const { _id, picture, name, availableQuantity, minimumQuantity, price } = product

    return (
        <tr>
            <th>{index + 1}</th>
            <th><img style={{ height: '50px' }} src={picture} alt="" /></th>
            <th>{name}</th>
            <th>{price}</th>
            <th>{availableQuantity}</th>
            <th>{minimumQuantity}</th>
            <th>
                <label onClick={() => setDeleteProduct(product)} for="delete-modal" class="btn btn-xs btn-secondary">Delete</label>

            </th>
        </tr>
    );
};

export default ManageProductRow;