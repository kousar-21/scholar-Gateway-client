import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loader from '../../../Spinner/Loader';
import { FaStar, FaTrash } from 'react-icons/fa';

const AllReviews = () => {

    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews/md');
            return res.data;
        }
    });

    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            return await axiosSecure.delete(`/reviews/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['allReviews']);
            Swal.fire('Deleted!', 'Review has been deleted.', 'success');
        },
        onError: () => {
            Swal.fire('Error!', 'Could not delete review.', 'error');
        }
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMutation.mutate(id);
            }
        });
    };

    if (isLoading) return <div className="text-center mt-10"><Loader></Loader></div>;


    return (
        <div>
            {
                reviews.length === 0 ? (<h3 className='text-4xl text-blue-500 font-bold text-center pt-10'>No Review yet</h3>) : (
                    <>
                        <div className="p-4 lg:p-8">
                            <h2 className="text-2xl font-semibold mb-6 text-center">All Reviews</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {reviews.map((review) => (
                                    <div
                                        key={review._id}
                                        className="bg-orange-100 shadow-md rounded-2xl p-5 border-none hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <img
                                                src={review.userImage || '/default-user.png'}
                                                alt="User"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-bold">{review.userName}</h3>
                                                <p className="text-sm text-gray-500">{review.reviewDate}</p>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <p className="font-medium text-primary">{review.universityName}</p>
                                            <p className="text-sm text-gray-600">{review.subjectCategory}</p>
                                        </div>

                                        <div className="flex items-center gap-1 text-yellow-500 mb-3">
                                            <FaStar />
                                            <span className='text-black'>{review.reviewRating}</span>
                                        </div>

                                        <p className="text-gray-700 mb-4">{review.reviewComment}</p>

                                        <button
                                            onClick={() => handleDelete(review._id)}
                                            className="btn btn-sm btn-error w-full text-white flex items-center justify-center gap-2"
                                        >
                                            <FaTrash /> Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default AllReviews;