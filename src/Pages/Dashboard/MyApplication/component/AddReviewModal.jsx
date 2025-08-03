import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';


const AddReviewModal = ({ isOpen, onClose, scholarship, user }) => {
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {

        if (!data.rating || !data.comment) {
            toast.error("Please Fill the Rating or Comment field First")
            return;
        }

        console.log("scholarship review data",scholarship)

        const reviewData = {
            applied_id: scholarship._id,
            scholarshipName: scholarship.scholarshipName,
            universityName: scholarship.universityName,
            subjectCategory: scholarship.subjectCategory,
            universityId: scholarship.scholarshipId,
            userName: user.displayName,
            userEmail: user.email,
            userImage: user.photoURL,
            reviewRating: Number(data.rating || ""),
            reviewComment: data.comment || "",
            reviewDate: new Date().toISOString().split('T')[0],
        };

        // const date = new Date().toISOString().split('T')[0]
        // console.log(date)
        console.log(reviewData)



        try {

            const res = await axiosSecure.post('/reviews', reviewData);
            console.log("review data", res.data);
            if (res.data.insertedId) {
                toast.success("Review submitted successfully");
                reset();
                onClose();
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to submit review");
        }
    };



    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>✕</button>
                        <h2 className="text-xl font-semibold mb-4">Add Review</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Rating */}
                            <div>
                                <label className="label">Rating (1–5)</label>
                                <input
                                    type="number"
                                    step='0.1'
                                    {...register("rating", { min: 1, max: 5 ,valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number"})}
                                    className="input input-bordered w-full"
                                    placeholder="Enter rating"
                                />
                                {errors.rating?.type === 'min' && <p className="text-red-500">Rating must be at least 1</p>}
                                {errors.rating?.type === 'max' && <p className="text-red-500">Rating cannot exceed 5</p>}
                            </div>

                            {/* Comment */}
                            <div>
                                <label className="label">Review Comment</label>
                                <textarea
                                    {...register("comment")}
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Write your review"
                                ></textarea>
                            </div>


                            <button type="submit" className="btn btn-primary w-full">Submit Review</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddReviewModal;