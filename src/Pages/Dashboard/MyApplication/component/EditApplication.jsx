import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Spinner from '../../../../Spinner/Spinner';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../Spinner/Loader';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const EditApplication = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    
    const [picture, setPicture] = useState(null);

    console.log("application id", id)
    const { data: updateApplication, isLoading } = useQuery({
        queryKey: ["appliedScholarship", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <Spinner></Spinner>;

    console.log(updateApplication)

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


     console.log("scholarship image", picture)

    const onSubmit = async (data) => {


        // if (!picture) {
        //     toast.error("Please upload an image first");
        //     return;
        // }

        const formData = {
            ...data,
            applicantImage: picture || updateApplication?.applicantImage,
            updated_date: new Date().toISOString(),
        };


        try {
            const res = await axiosSecure.patch(`/applications/${id}`, formData);
            console.log("oke oke", res.data)
            if (res.data.message) {
                Swal.fire('Success', res.data.message, 'success');
            }
        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'Something went wrong', 'error');
        }
    };

    if (!updateApplication) return <p className="text-center mt-10"> <Loader></Loader> </p>;


    return (
        <div className='py-10  mx-5'>
            <div className="p-6 bg-orange-100 dark:bg-gray-700 dark:text-white rounded-2xl max-w-4xl mx-auto">
                <Link to="/dashboardLayout/my-applications" className="inline-flex items-center gap-2 text-blue-600">
                    <FaArrowLeft /> Back to Applications
                </Link>
                <h2 className="text-2xl font-bold mb-4 text-center">Edit Application</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        {/*phone  */}
                        <label className='label font-medium'>Phone</label>
                        <input
                            {...register('phone')}
                            className="input input-bordered w-full"
                            defaultValue={updateApplication?.phone}
                        />


                    </div>
                    <div>
                        {/* Image Upload */}
                        <label className='label font-medium'>University logo/Image</label>
                        <input type="file" onChange={handleImageUpload} className='input w-full' />

                    </div>
                    <div>
                        {/* village */}
                        <label className='label font-medium'>Village</label>
                        <input
                            {...register('village')}
                            className="input input-bordered w-full"
                            defaultValue={updateApplication?.village}
                        />

                    </div>
                    <div>
                        {/* district */}
                        <label className='label font-medium'>District</label>
                        <input
                            {...register('district')}
                            className="input input-bordered w-full"
                            defaultValue={updateApplication?.district}
                        />

                    </div>
                    <div>

                        {/* country */}
                        <label className='label font-medium'>Country</label>
                        <input
                            {...register('country')}
                            className="input input-bordered w-full"
                            defaultValue={updateApplication?.country}
                        />

                    </div>
                    <div>
                        {/* gender */}
                        <label className='label font-medium'>Gender</label>
                        <select
                            {...register('gender')}
                            className="select select-bordered w-full"
                            defaultValue={updateApplication?.gender}
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                    </div>
                    <div>
                        {/* degree */}
                        <label className='label font-medium'>Degree</label>
                        <select
                            {...register('degree')}
                            className="select select-bordered w-full"
                            defaultValue={updateApplication?.degree}
                        >
                            <option value="">Select Degree</option>
                            <option>Diploma</option>
                            <option>Bachelor</option>
                            <option>Masters</option>
                        </select>

                    </div>
                    <div>
                        {/* ssc */}
                        <label className='label font-medium'>SSC Result</label>
                        <input
                            {...register('ssc')}
                            className="input input-bordered w-full"
                            defaultValue={updateApplication?.ssc}
                        />
                    </div>
                    <div>
                        {/* hsc */}
                        <label className='label font-medium'>HSC Result</label>
                        <input
                            {...register('hsc')}
                            className="input input-bordered w-full"
                            defaultValue={updateApplication?.hsc}
                        />

                    </div>
                    <div>
                        {/* study gap */}
                        <label className='label font-medium'>Study Gap(optional)</label>
                        <select
                            {...register('studyGap')}
                            className="select select-bordered w-full"
                            defaultValue={updateApplication?.studyGap}
                        >
                            <option value="">Study Gap</option>
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3+ Years</option>
                        </select>

                    </div>


                    <button type="submit" className="btn btn-primary  col-span-1 md:col-span-2 mt-4">
                        Update Application
                    </button>
                </form>


            </div>
        </div>
    );
};

export default EditApplication;