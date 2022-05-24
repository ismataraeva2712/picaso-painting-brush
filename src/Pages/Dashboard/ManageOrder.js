import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/bookings').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>{orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>product Name</th>
                            <th>orderQuantity</th>
                            <th>price</th>
                            <th>phone</th>

                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(total => <ManageOrderRow
                                key={total._id}
                                total={total}
                            ></ManageOrderRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;