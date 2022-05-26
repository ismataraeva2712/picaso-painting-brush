import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {

  const [order, setOrder] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`https://safe-coast-58270.herokuapp.com/booking?email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res)
          if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/')
          }
          return res.json()
        })
        .then(data => {
          setOrder(data)
        })
    }
  }, [user])
  // ===================
  const handleDelete = orderid => {
    const proceed = window.confirm('Are you sure ?? wanna deleted?')
    if (proceed) {
      const url = `https://safe-coast-58270.herokuapp.com/booking/${orderid}`
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)

          const remainingItem = order.filter(i => i._id !== orderid)
          setOrder(remainingItem)
        })
    }
  }


  return (
    <div>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>produc Name</th>
              <th>orderderQuantity</th>
              <th>Phone</th>

              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              order.map((orderBook, index) => <MyOrderRow
                key={orderBook._id}
                index={index}
                orderBook={orderBook}
                handleDelete={handleDelete}
              ></MyOrderRow>)
            }




          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;