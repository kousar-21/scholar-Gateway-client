import React from 'react';
import { FaUniversity, FaStarHalfAlt, FaUserShield } from "react-icons/fa";
import { MdAddCircleOutline, MdReviews } from 'react-icons/md';

const ModeratorDashboard = () => {
    return (
        <div className='flex justify-center items-center pt-20'>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaUserShield className="text-warning" /> Moderator Dashboard
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg">
                        <MdAddCircleOutline /> Add Scholarship
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaUniversity /> Manage Scholarships
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaStarHalfAlt /> All Reviews
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ModeratorDashboard;