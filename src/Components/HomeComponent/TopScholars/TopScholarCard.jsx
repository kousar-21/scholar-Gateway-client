import React from 'react';
import useAverageReview from '../../../Hooks/useAverageReview';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const TopScholarCard = ({scholarship}) => {
    const { rating } = useAverageReview(scholarship._id)
    return (
        <div>
            <div className='bg-orange-50 shadow-xl rounded-xl flex flex-col h-full'>
                <img
                    src={scholarship.universityImage}
                    alt={scholarship.universityName}
                    className='h-40 w-full object-cover rounded-xl mb-4' />
                <div className='py-3 px-5'>
                    <h3 className='text-xl font-semibold mb-2'>{scholarship.universityName}</h3>
                    <p className='text-sm text-gray-600 mb-1'>
                        <span className='font-medium'>Scholarship: {scholarship.scholarshipCategory}</span>
                    </p>
                    <p className='text-sm text-gray-600 mb-1'>
                        <span>Location:{scholarship.city},{scholarship.country}</span>
                    </p>
                    <p className='text-sm text-gray-600 mb-1'>
                        <span>Deadline:{scholarship.applicationDeadline}</span>
                    </p>
                    <p className='text-sm text-gray-600 mb-1'>
                        <span>Subject:{scholarship.subjectCategory}</span>
                    </p>
                    <p className='text-sm text-gray-600 mb-1'>
                        <span>Application Fee: ${scholarship.applicationFees}</span>
                    </p>
                    <p className="text-sm flex items-center text-gray-600 mb-4">
                        <span className="font-medium">Rating:</span>
                        {(rating) ? (
                            <>
                                <FaStar className="text-yellow-500" />
                                {rating.toFixed(1)}
                            </>
                        ) : 'N/A'}
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