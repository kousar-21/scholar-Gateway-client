import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useLocation, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import PaymentSummaryModal from '../PaymentSummaryModal/PaymentSummaryModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';

const ApplicantForm = () => {

    const { user } = useAuth();
    // const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const scholarship = location.state?.scholarship;
    const axiosSecure = useAxiosSecure();
    const [showModal, setShowModal] = useState(false);
    const [applicationData, setApplicationData] = useState(null);
    const [picture, setPicture] = useState(null);

    const { register, handleSubmit, reset } = useForm();

    const { isLoading, data: userData = [] } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !!user?.email, // only fetch if email exists
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    console.log("user id", id)

    const handleImageUpload = async (e) => {
        const photo = e.target.files[0];
        // console.log(photo);

        const formData = new FormData();
        formData.append('image', photo)

        const photoUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Key}`
        const res = await axios.post(photoUploadUrl, formData)
        console.log("scholarship image", res.data)
        setPicture(res.data.data.url)
    }

    //payment amount
    const paymentAmount = scholarship.applicationFees || 0;
    // const serviceCharge = scholarship.serviceCharge || 0;
    // const paymentAmount = applicationFee + serviceCharge;

    // console.log(paymentAmount)

    console.log("Picture value before submission:", picture);
    console.log(scholarship)

    const onSubmit = async (data) => {

        if (!picture) {
            toast.error("Please upload an image first");
            return;
        }

        const formData = {
            ...data,
            applicantImage: picture,
            userName: user.displayName,
            userEmail: user.email,
            user_Id: userData._id,
            scholarshipId: scholarship._id,
            universityName: scholarship.universityName,
            scholarshipCategory: scholarship.scholarshipCategory,
            scholarshipName: scholarship.scholarshipName,
            subjectCategory: scholarship.subjectCategory,
            applicationStatus: 'pending',
            paymentStatus: 'not paid',
            serviceCharge:scholarship.serviceCharge,
            applicationFees:scholarship.applicationFees,
            payment_amount: paymentAmount,
            applied_date: new Date().toISOString(),
        };

        try {
            const res = await axiosSecure.post('/applications', formData);
            console.log(res.data)
            console.log(res)
            if (res.data.insertedId) {
                setApplicationData(formData); // store for payment
                setShowModal(true);
                // Todo:uncomment
                reset()
                setPicture(null)
            }
        } catch (err) {
            Swal.fire('Error!', err.message, 'error');
        }
    };

    console.log(applicationData)
    return (
        <div>
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Scholarship Application</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        {/*phone  */}
                        <label className='label font-medium'>Phone</label>
                        <input {...register('phone')} placeholder="Phone Number" className="input input-bordered w-full" required />


                    </div>
                    <div>
                        {/* Image Upload */}
                        <label className='label font-medium'>Image</label>
                        <input type="file" onChange={handleImageUpload} className='input w-full' />

                    </div>
                    <div>
                        {/* village */}
                        <label className='label font-medium'>Village</label>
                        <input {...register('village')} placeholder="Village" className="input input-bordered w-full" required />

                    </div>
                    <div>
                        {/* district */}
                        <label className='label font-medium'>District</label>
                        <input {...register('district')} placeholder="District" className="input input-bordered w-full" required />

                    </div>
                    <div>

                        {/* country */}
                        <label className='label font-medium'>Country</label>
                        <input {...register('country')} placeholder="Country" className="input input-bordered w-full" required />

                    </div>
                    <div>
                        {/* gender */}
                        <label className='label font-medium'>Gender</label>
                        <select {...register('gender')} className="select select-bordered w-full" required>
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            
                        </select>

                    </div>
                    <div>
                        {/* degree */}
                        <label className='label font-medium'>Degree</label>
                        <select {...register('degree')} className="select select-bordered w-full" required>
                            <option value="">Select Degree</option>
                            <option>Diploma</option>
                            <option>Bachelor</option>
                            <option>Masters</option>
                        </select>

                    </div>
                    <div>
                        {/* ssc */}
                        <label className='label font-medium'>SSC Result</label>
                        <input {...register('ssc')} placeholder="SSC Result" className="input input-bordered w-full" required />

                    </div>
                    <div>
                        {/* hsc */}
                        <label className='label font-medium'>HSC Result</label>
                        <input {...register('hsc')} placeholder="HSC Result" className="input input-bordered w-full" required />

                    </div>
                    <div>
                        {/* study gap */}
                        <label className='label font-medium'>Study Gap(optional)</label>
                        <select {...register('studyGap')} className="select select-bordered w-full">
                            <option value="">Study Gap</option>
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3+ Years</option>
                        </select>

                    </div>
                    <div>
                        {/* varsity name */}
                        <label className='label font-medium'>University Name</label>
                        <input value={scholarship.universityName} readOnly className="input input-bordered w-full" />

                    </div>
                    <div>
                        {/* scholarship category */}
                        <label className='label font-medium'>Scholarship Category</label>
                        <input value={scholarship.scholarshipCategory} readOnly className="input input-bordered w-full" />

                    </div>
                    <div>

                        {/* subject category */}
                        <label className='label font-medium'>Scholarship Category</label>
                        <input value={scholarship.subjectCategory} readOnly className="input input-bordered w-full" />

                    </div>


                    <button type="submit" disabled={!picture} className="btn btn-primary disabled:opacity-98 disabled:cursor-not-allowed col-span-1 md:col-span-2 mt-4">
                        Submit & Proceed to Payment
                    </button>
                </form>

                {/* Payment Modal */}
                {showModal && (
                    <PaymentSummaryModal
                        application={applicationData}
                        scholarship={scholarship}
                        id ={id}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default ApplicantForm;