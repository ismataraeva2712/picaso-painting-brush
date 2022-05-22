import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useAdmin from './../../Hooks/useAdmin';
const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const[admin,adminLoading]=useAdmin(user)
    let location = useLocation();
    if (loading||adminLoading) {
        return <Loading></Loading>
    }
    if (!user|| !admin) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;