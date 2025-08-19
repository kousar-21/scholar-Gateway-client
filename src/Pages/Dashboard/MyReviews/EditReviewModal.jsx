import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const EditReviewModal = ({ review, onClose, onUpdated }) => {

    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit,formState: { errors } } = useForm();

    console.log("getting review", review)

    const onSubmit = async (data) => {
        const result = await axiosSecure.patch(`/reviews/${review._id}`, {
            reviewRating: Number(data.rating),
            reviewComment: data.comment,
        });
        console.log("updated review", result.data)
        if (result.data.modifiedCount) {
            Swal.fire("Success!", "Review updated successfully.", "success");
            onUpdated();
            onClose();
        }


    };


    return (
        <div>
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-600 dark:text-white p-6 rounded-lg w-full max-w-lg relative">
                    <button className="absolute right-2 top-2 text-xl" onClick={onClose}>✕</button>
                    <h3 className="text-lg font-semibold mb-4">Edit Review</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="label">Rating</label>
                            <input
                                type="number"
                                defaultValue={review.reviewRating}
                                {...register("rating", { min: 1, max: 5 ,valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number"})}
                                className="input input-bordered w-full"
                            />
                            {errors.rating?.type === 'min' && <p className="text-red-500">Rating must be at least 1</p>}
                            {errors.rating?.type === 'max' && <p className="text-red-500">Rating cannot exceed 5</p>}
                        </div>
                        <div>
                            <label className="label">Comment</label>
                            <textarea
                                {...register("comment")}
                                defaultValue={review.reviewComment}
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Update Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditReviewModal;