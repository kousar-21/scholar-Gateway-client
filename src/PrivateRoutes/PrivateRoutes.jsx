import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Spinner/Spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <Spinner></Spinner>
        
    }
    if (user) {
        return children
    }
    else{
       return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

export default PrivateRoutes;