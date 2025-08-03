import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AddReviewModal from './component/AddReviewModal';
import Loader from '../../../Spinner/Loader';

const MyApplication = () => {


    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selected, setSelected] = useState(null);

    const { data: applications = [], refetch ,isLoading } = useQuery({
        queryKey: ['myApplications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?email=${user.email}`);
            return res.data;
        }
    });

    if(isLoading){
        return <Loader></Loader>
    }

    console.log("my application data", applications)

    const handleDetails = (id) => {
        navigate(`/dashboardLayout/my-applications/appliedDetails/${id}`)
    }


    const handleEdit = (app) => {
        if (app.applicationStatus !== 'pending') {
            Swal.fire('Oops!', 'You cannot edit. Application is processing or completed.', 'warning');
            return;
        }

        navigate(`/dashboardLayout/my-applications/edit-application/${app._id}`);
    };

    const handleCancel = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You want to cancel this application?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!'
        });

        if (confirm.isConfirmed) {
            await axiosSecure.delete(`/applications/${id}`);
            Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
            refetch();
        }
    };


    return (
        <div>

            {
                applications.length === 0 ? (<h3 className='text-4xl pt-10 text-blue-500 text-center'>You Have Not Applied Yet</h3>) : (
                    <>
                        <div className="overflow-x-auto p-4">

                            <h2 className="text-2xl font-bold mb-4">My Applications</h2>
                            <table className="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>University</th>
                                        <th>Address</th>
                                        <th>Subject</th>
                                        <th>Degree</th>
                                        <th>App. Fee</th>
                                        <th>Service Charge</th>
                                        <th>Status</th>
                                        <th>Feedback</th>
                                        <th>Review</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applications.map((app, index) => (
                                        <tr key={app._id}>
                                            <td>{index + 1}</td>
                                            <td>{app.universityName}</td>
                                            <td>{app.district}, {app.country}</td>
                                            <td>{app.subjectCategory}</td>
                                            <td>{app.degree}</td>
                                            <td>${(app.applicationFees) || 'N/A'}</td>
                                            <td>${(app.serviceCharge) || 'N/A'}</td>
                                            <td className="capitalize">
                                                <p className='btn btn-xs btn-accent'>{app.applicationStatus === 'rejected' ? 'Rejected' : app.applicationStatus}</p>
                                            </td>
                                            <td>{app.feedback
                                                ? <abbr title={app.feedback}>{app.feedback.slice(0, 5)}...</abbr>
                                                : 'N/A'}</td>
                                            <td>
                                                <div className='flex gap-2'>
                                                    <button className="btn btn-xs btn-success" onClick={() => {
                                                        setIsModalOpen(true)
                                                        setSelected(app)
                                                    }} >Add Review</button>


                                                </div>
                                            </td>
                                            <td className="space-x-1">

                                                <div className='flex gap-2'>
                                                    <button className="btn btn-xs btn-info" onClick={() => handleDetails(app._id)}>Details</button>
                                                    <button
                                                        className="btn btn-xs btn-warning"
                                                        onClick={() => handleEdit(app)}

                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-xs btn-error"
                                                        onClick={() => handleCancel(app._id)}
                                                    >
                                                        Cancel
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Review Modal */}
                        <AddReviewModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            scholarship={selected}
                            user={user}
                        />

                    </>
                )
            }


        </div>
    );
};

export default MyApplication;