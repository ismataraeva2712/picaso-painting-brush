import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({user,index,refetch}) => {
    const{email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            toast('successfully made an admin')
        })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>name</td>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn-primary text-white fw-bold btn-xs'>Make Admin</button>}</td>
      </tr>
    );
};

export default MakeAdminRow;