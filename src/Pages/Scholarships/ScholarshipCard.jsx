import React from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';
// import useAverageReview from '../../Hooks/useAverageReview';

const ScholarshipCard = ({ scholarship }) => {
    // const { rating } = useAverageReview(scholarship._id)
    return (
        <div>
            <div className="bg-orange-50 dark:bg-gray-700 dark:text-white shadow-xl rounded-xl flex flex-col h-full">
                <img
                    src={scholarship.universityImage}
                    alt={scholarship.universityName}
                    className="h-40 w-full object-cover rounded-t-xl"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">{scholarship.universityName}</h3>

                        <p className='text-sm text-gray-600 dark:text-gray-300 mb-1'>
                            <strong>Description:</strong> <br /> {scholarship.description || 'N/A'}
                        </p>



                    </div>
                    <NavLink
                        to={`/scholarship/${scholarship._id}`}
                        className="btn btn-sm btn-outline btn-primary mt-4"
                    >
                        Scholarship Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;