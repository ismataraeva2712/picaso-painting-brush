import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletModal from './DeletModal';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://safe-coast-58270.herokuapp.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage product : {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Minimum Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}
                            ></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <DeletModal deleteProduct={deleteProduct}
                    refetch={refetch}
                    setDeleteProduct={setDeleteProduct}
                ></DeletModal>
            }
        </div>
    );
};

export default ManageProduct;