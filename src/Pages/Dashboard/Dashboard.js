import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from './../../Hooks/useAdmin';
import auth from './../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-2xl text-primary my-5">Dashboard</h2>
        <Outlet></Outlet>


      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

          {!admin && <>
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Add reviews</Link></li>
          </>
          }
          <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
          {admin && <>
            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>
            <li><Link to='/dashboard/manageorder'>Manage Order</Link></li>
          </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;