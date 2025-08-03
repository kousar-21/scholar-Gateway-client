import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';
import useUserRole from '../../../Hooks/useUserRole';

const MyProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { role } = useUserRole();
    // const queryClient = useQueryClient();


    const { isLoading, data: userData = [], error } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !!user?.email, // only fetch if email exists
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data;
        }
    })

    if (isLoading) {
        <Spinner></Spinner>
        return;
    }

    if (error) {
        return <div>error!! loading User data</div>
    }



    return (
        <div className='flex items-center justify-center'>
            <div className='pt-24'>
                <img className='rounded-3xl size-60' src={user.photoURL} alt={user.displayName} />
                {
                    role !== "user" && <p className='text-center py-3'>Role: {userData?.role}</p>
                }

                <h2 className='text-center text-4xl font-extrabold py-3'>{user.displayName}</h2>
                <h2 className='text-center text-xl font-light'>{user.email}</h2>
                <p className=' text-center py-2'>Joined: {new Date(userData?.created_at).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default MyProfile;