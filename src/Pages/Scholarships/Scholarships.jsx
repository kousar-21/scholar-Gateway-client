import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Spinner/Spinner';
import { NavLink } from 'react-router';
import { FaStar } from 'react-icons/fa';
import ScholarshipCard from './ScholarshipCard';

const Scholarships = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { isLoading, data: scholarshipData = [] } = useQuery({
        queryKey: ['allScholarship', searchValue],
        queryFn: async () => {
            const result = await axiosSecure.get(`/scholarships?search=${searchValue}`)
            return result.data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue(searchText.trim())
    }

    console.log("all scholarshipData", scholarshipData)
    return (
        <div className="px-4 py-8 md:px-16 lg:px-24">
            <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-primary mb-6">All Scholarships</h1>



            {/* Search */}
            <form onSubmit={handleSearch} className="flex justify-center gap-4 mb-10 flex-wrap">
                <input
                    type="text"
                    placeholder="Search by Scholarship, University or Degree"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered w-full md:w-96"
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {isLoading && <Spinner></Spinner>}


            {/* Scholarships */}
            {!isLoading && scholarshipData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {scholarshipData.map((scholarship, index) => (
                        <ScholarshipCard key={index} scholarship={scholarship}></ScholarshipCard>
                    ))}
                </div>
            ) : (
                !isLoading && scholarshipData.length === 0 && (
                    <div className="text-center mt-10">
                        <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="No data" className="w-28 mx-auto mb-4" />
                        <p className="text-gray-500">No scholarships available with that search.</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Scholarships;