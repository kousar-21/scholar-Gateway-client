import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaRegEye, FaCommentAlt, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';
import Loader from '../../../Spinner/Loader';

const AppliedScholarship = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const [modalOpen, setModalOpen] = useState(false);
    const [feedback, setFeedback] = useState("")
    const [selectedApp, setSelectedApp] = useState(null);
    const [feedbackApplication, setFeedbackApplication] = useState(null);

    const { data: applications = [], isLoading, refetch } = useQuery({
        queryKey: ["allApplications"],
        queryFn: async () => {
            const res = await axiosSecure.get("/applications/admin");
            return res.data;
        },
    });

    const { mutateAsync: cancelApp } = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.patch(`/applications/cancel/${id}`);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["allApplications"]);
            Swal.fire("Cancelled!", "The application has been rejected.", "success");
            refetch()
        },
    });

    const { mutateAsync: acceptApp } = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.patch(`/applications/accept/${id}`);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["allApplications"]);
            Swal.fire("Approved!", "The application has been approved.", "success");
            refetch();
        },
    });

    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will cancel the application'.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                cancelApp(id);
            }
        });
    };

    const handleAccept = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are approving this application.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, approve it!",
        }).then((result) => {
            if (result.isConfirmed) {
                acceptApp(id);
            }
        });
    };

    const handleFeedbackClick = (app) => {
        setFeedbackApplication(app)
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setFeedback(""); // clear feedback on close if you want
        setFeedbackApplication(null)
    };

    const handleSubmitFeedback = async () => {

        console.log("Feedback submitted:", feedback);

        if (!feedbackApplication) return;

        try {
            const res = await axiosSecure.patch(`/applications/feedback/${feedbackApplication._id}`, {
                feedback,
            });

            if (res.data.modifiedCount > 0) {
                Swal.fire("success!", "Feedback successfully given to the applicant.", "success");
                setModalOpen(false);
                setFeedback("");
                setFeedbackApplication(null);
                refetch(); // if you're using useQuery
            } else {
                toast.error("Feedback not submitted");
            }
        } catch (err) {
            console.error("Error submitting feedback:", err);
            toast.error("Something went wrong");
        }


    };

    if (isLoading){
        <Loader></Loader>
    };
    return (
        <div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">All Applied Scholarships</h2>
                <div className="overflow-x-auto rounded shadow">
                    <table className="table">
                        <thead className="bg-base-200">
                            <tr>
                                <th>#</th>
                                <th>Scholarship</th>
                                <th>University</th>
                                <th>Degree</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, idx) => (
                                <tr key={app._id}>
                                    <td>{idx + 1}</td>
                                    <td>{app.scholarshipName}</td>
                                    <td>{app.universityName}</td>
                                    <td>{app.degree}</td>
                                    <td>
                                        <span className={`badge badge-${app.applicationStatus === "rejected" ? "error" : app.applicationStatus === "completed" ? "success" : "warning"}`}>
                                            {app.applicationStatus}
                                        </span>
                                    </td>
                                    <td className="flex gap-2">
                                        <button onClick={() => setSelectedApp(app)} className="btn btn-sm btn-info">
                                            <FaRegEye />
                                        </button>
                                        <button onClick={() => handleFeedbackClick(app)} className="btn btn-sm btn-success">
                                            <FaCommentAlt />
                                        </button>
                                        <button onClick={() => handleAccept(app._id)} className="btn btn-sm btn-primary">
                                            <FaCheckCircle />
                                        </button>
                                        <button onClick={() => handleCancel(app._id)} className="btn btn-sm btn-error">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Details Modal */}
                {selectedApp && (
                    <dialog id="detailsModal" className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg mb-2">Application Details</h3>
                            <p><strong>Scholarship:</strong> {selectedApp.scholarshipName}</p>
                            <p><strong>University:</strong> {selectedApp.universityName}</p>
                            <p><strong>Name:</strong> {selectedApp.userName}</p>
                            <p><strong>Email:</strong> {selectedApp.userEmail}</p>
                            <p><strong>Degree:</strong> {selectedApp.degree}</p>
                            <p><strong>Category:</strong> {selectedApp.subjectCategory}</p>
                            <p><strong>Submitted:</strong> {new Date(selectedApp.applied_date).toLocaleDateString()}</p>

                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-neutral" onClick={() => setSelectedApp(null)}>Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                )}


                {/* feedback modal */}
                {modalOpen && (
                    <dialog open className="modal modal-open">
                        <div className="modal-box">
                            <h2 className="text-xl font-semibold mb-4">Submit Feedback</h2>
                            <textarea
                                className="textarea textarea-bordered w-full mb-4"
                                rows={5}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Write your feedback here..."
                            />

                            <div className="modal-action">
                                <button onClick={handleCloseModal} className="btn btn-outline">
                                    Close
                                </button>
                                <button
                                    onClick={handleSubmitFeedback}
                                    className="btn btn-primary"
                                    disabled={!feedback.trim()}
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </div>
                    </dialog>
                )}
            </div>
        </div>
    );
};

export default AppliedScholarship;