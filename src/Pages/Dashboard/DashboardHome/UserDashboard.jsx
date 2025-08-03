import React from 'react';
import { FaUserCircle, FaClipboardList, FaCommentDots } from "react-icons/fa";

const UserDashboard = () => {
    return (
        <div className='flex justify-center items-center pt-20'>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaUserCircle className="text-primary" /> User Dashboard
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg">
                        <FaUserCircle /> My Profile
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaClipboardList /> My Applications
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaCommentDots /> My Reviews
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserDashboard;