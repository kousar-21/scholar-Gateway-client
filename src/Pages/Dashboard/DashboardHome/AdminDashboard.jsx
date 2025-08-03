import React from 'react';
import { FaUsers, FaUserLock, FaStarHalfAlt, FaUserShield } from "react-icons/fa";
import { MdAddCircleOutline } from 'react-icons/md';

const AdminDashboard = () => {
    return (
        <div className='flex justify-center items-center pt-20'>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaUserLock className="text-red-600" /> Admin Dashboard
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg">
                        <MdAddCircleOutline /> Add Scholarship
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaUsers /> Manage Users
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaUserShield /> Manage Reviews
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaStarHalfAlt /> All Reviews
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;