import React from 'react';
import useAuth from '../Hooks/useAuth';
import useUserRole from '../Hooks/useUserRole';

const RestrictedRoute = ({children}) => {
    const { user } = useAuth();
    const { role, isLoading } = useUserRole();
    if (isLoading) {
        return <Loader></Loader>
    }
    if (!user || (role !== 'admin' && role !== "moderator"))  {
        return <Navigate state={{ from: location.pathname }} to="/"></Navigate>
    }

    return children;
    
};

export default RestrictedRoute;