import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';
import { NavLink } from 'react-router';
import TopScholarCard from './TopScholarCard';

const TopScholars = () => {
    const axiosSecure = useAxiosSecure();

    // const queryClient = useQueryClient();


    const { isLoading, data: topScholarship = [], error } = useQuery({
        queryKey: ['topScholarship'],
        // enabled: !!user?.email, // only fetch if email exists
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarships')
            return res.data.slice(0, 6);
        }
    })


    if (isLoading) {
        <Spinner></Spinner>
        return;
    }

    if (error) {
        return <div>error!! loading User data</div>
    }


    console.log("top scholarshipData", topScholarship)

    return (
        <div className='bg-orange-100 md:mx-20 md:my-10 mx-5 my-5 rounded-2xl px-5 md:px-10 lg:px-20 py-10'>
            <h1 className='text-3xl lg:text-4xl font-bold text-blue-800 text-center'>Top Scholarships</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-6">
                {
                    topScholarship.map((scholarship, index) => (
                        <TopScholarCard key={index} scholarship={scholarship}></TopScholarCard>
                    ))
                }


            </div>
            {/* All Scholarship Button */}
            <div className="text-center mt-10">
                <NavLink to="/allScholarship" className="btn btn-primary border-none hover:bg-orange-600 hover:text-white">
                    View All Scholarships
                </NavLink>
            </div>
        </div>
    );
};

export default TopScholars;