import React from 'react';
import useUserRole from '../../../Hooks/useUserRole';
import Loader from '../../../Spinner/Loader';
import UserDashboard from './UserDashboard';
import ModeratorDashboard from './ModeratorDashboard';
import AdminDashboard from './AdminDashboard';
import Error from '../../../Error/Error';

const DashboardHome = () => {
    const {role, isLoading} = useUserRole();
    if(isLoading){
        return <Loader></Loader>
    }
    if(role === "user"){
        return <UserDashboard></UserDashboard>
    }
    if(role === "moderator"){
        return <ModeratorDashboard></ModeratorDashboard>
    }
    if(role === "admin"){
        return <AdminDashboard></AdminDashboard>
    }
    return <Error></Error>
};

export default DashboardHome;