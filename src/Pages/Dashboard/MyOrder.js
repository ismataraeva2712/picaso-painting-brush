import React,{useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrder = () => {
    const[order,setOrder]=useState([])
    const [user] = useAuthState(auth)
    const navigate=useNavigate()
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?email=${user.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            console.log('res',res)
            if(res.status===401||res.status===403){
                signOut(auth)
                localStorage.removeItem('accessToken')
              navigate('/')
            }
           return res.json()
        })
        .then(data=>{
            setOrder(data)
        })
       }
    },[user])
    return (
        <div>
          <h2>My Order : {order.length}</h2> 
          <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Order Id</th>
        <th>Items Name</th>
        <th>Item quantity</th>
      </tr>
    </thead>
    <tbody>
        {
            order.map((o,index)=><tr>
                <th>{index+1}</th>
                <th>{o.name}</th>
                <td>{o.email}</td>
                <td>{o._id}</td>
                <td>{o.itemName}</td>
                <td>{o.items}</td>
              </tr>)
        }
      
      
      
      
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default MyOrder;