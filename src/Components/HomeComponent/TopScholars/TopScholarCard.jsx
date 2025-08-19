import React from 'react';
// import useAverageReview from '../../../Hooks/useAverageReview';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const TopScholarCard = ({ scholarship }) => {
    // const { rating } = useAverageReview(scholarship._id)
    return (
        <div>
            <div className='bg-orange-50 dark:bg-gray-700 dark:text-white shadow-xl rounded-xl flex flex-col h-full'>
                <img
                    src={scholarship.universityImage}
                    alt={scholarship.universityName}
                    className='h-40 w-full object-cover rounded-xl mb-4' />
                <div className='py-3 px-5'>
                    <h3 className='text-xl font-semibold mb-2'>{scholarship.universityName}</h3>



                    <p className='text-sm text-gray-600 dark:text-gray-300 mb-1'>
                        <strong>Description:</strong> <br /> {scholarship.description || 'N/A'}
                    </p>


                </div>


                <NavLink
                    to={`/scholarship/${scholarship._id}`}
                    className="mt-auto btn btn-sm btn-outline btn-primary rounded-lg"
                >
                    Scholarship Details
                </NavLink>
            </div>
        </div>
    );
};

export default TopScholarCard;