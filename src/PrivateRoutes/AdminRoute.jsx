import React from 'react';
import useUserRole from '../Hooks/useUserRole';
import useAuth from '../Hooks/useAuth';
import Loader from '../Spinner/Loader';

const AdminRoute = ({children}) => {
    const { user } = useAuth();
    const { role, isLoading } = useUserRole();
    if (isLoading) {
        return <Loader></Loader>
    }
    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to="/"></Navigate>
    }

    return children;
};

export default AdminRoute;