import React from 'react';
import {Outlet,Link} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from './../../Hooks/useAdmin';
import auth from './../../firebase.init';

const Dashboard = () => {
    const[user]=useAuthState(auth)
    const[admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <h2 className="text-2xl text-primary">Dashboard</h2>
        <Outlet></Outlet>
         
       
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Add reviews</Link></li>
            {admin && <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;