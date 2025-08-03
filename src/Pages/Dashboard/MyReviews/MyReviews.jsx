import React, { useState } from 'react';
import EditReviewModal from './EditReviewModal';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loader from '../../../Spinner/Loader';

const MyReviews = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [editingReview, setEditingReview] = useState(null);

    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ['myReviews', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews?email=${user.email}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    console.log("user review", reviews)

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this review?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
        });
        if (result.isConfirmed) {
            await axiosSecure.delete(`/reviews/${id}`);
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            refetch();
        }
    };

    return (
        <div>
            {
                reviews.length === 0 ? (<h3 className='text-4xl pt-10 text-blue-500 text-center'>You Have Not Give Any Review Yet</h3>) : (
                    <>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Scholarship</th>
                                            <th>University</th>
                                            <th>Comment</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reviews.map(review => (
                                            <tr key={review._id}>
                                                <td>{review.scholarshipName}</td>
                                                <td>{review.universityName}</td>
                                                <td><abbr title={review.reviewComment}>{review.reviewComment.slice(0, 20)}</abbr></td>
                                                <td>{review.reviewDate}</td>
                                                <td>
                                                    <div className='flex md:flex-row flex-col gap-3'>
                                                        <button className="btn btn-xs btn-warning mr-2" onClick={() => setEditingReview(review)}>Edit</button>
                                                        <button className="btn btn-xs btn-error" onClick={() => handleDelete(review._id)}>Delete</button>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Edit Modal */}
                            {editingReview && (
                                <EditReviewModal
                                    review={editingReview}
                                    onClose={() => setEditingReview(null)}
                                    onUpdated={refetch}
                                />
                            )}
                        </div>

                    </>
                )
            }

        </div>
    );
};

export default MyReviews;