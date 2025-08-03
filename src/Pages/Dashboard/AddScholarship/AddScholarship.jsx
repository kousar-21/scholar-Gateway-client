import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddScholarship = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // console.log(user.email)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [picture, setPicture] = useState(null);


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
    console.log("Picture value before submission:", picture);

    const onSubmit = async (data) => {
        if (!picture) {
            toast.error("Please upload an image first");
            return;
        }

        const stipendValue =
            typeof data.stipend === "number" && data.stipend > 0 ? data.stipend : "Not specified";

        const scholarshipData = {
            ...data,
            universityImage: picture,
            stipend: stipendValue,
            postedDate: new Date().toISOString(),
            postedByEmail: user.email
        }

        // console.log('worldRank:', data.worldRank, typeof data.worldRank);
        // console.log('tuitionFees:', data.tuitionFees, typeof data.tuitionFees);
        // console.log('applicationFees:', data.applicationFees, typeof data.applicationFees);
        // console.log('serviceCharge:', data.serviceCharge, typeof data.serviceCharge);

        // console.log("final scholarship data", scholarshipData)


        const result = await axiosSecure.post("/scholarships", scholarshipData)
        if (result.data.insertedId) {
            toast.success('scholarship data submitted success fully')
            // Todo: uncomment below code
            reset()
            setPicture(null)
        }

    }


    return (
        <div className='mx-5'>
            <div className='max-w-4xl mx-auto p-6 bg-orange-50 rounded-2xl shadow-lg space-y-4 mt-10 mb-6'>

                <h2 className='text-2xl font bold text-center mb-4'>Add New Scholarship</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>


                    {/* Scholarship Name */}
                    <label className='label font-medium'>Scholarship Name</label>
                    <input type="text" placeholder='Scholarship name' className='input input-bordered w-full' {...register('scholarshipName', { required: true })} />
                    {errors.scholarshipName?.type === "required" && <p className='text-red-500 text-sm'>Scholarship Name is Required</p>}

                    {/* university Name */}
                    <label className='label font-medium'>University Name</label>
                    <input type="text" placeholder='University name' className='input input-bordered w-full' {...register('universityName', { required: true })} />
                    {errors.universityName?.type === "required" && <p className='text-red-500 text-sm'>University Name is Required</p>}


                    {/* Image Upload */}
                    <label className='label font-medium'>University logo/Image</label>
                    <input type="file" onChange={handleImageUpload} className='input w-full' />


                    {/* country Name */}
                    <label className='label font-medium'>Country Name</label>
                    <input type="text" placeholder='university Country' className='input input-bordered w-full' {...register('country', { required: true })} />
                    {errors.country?.type === "required" && <p className='text-red-500 text-sm'>University Country is Required</p>}

                    {/* city Name */}
                    <label className='label font-medium'>City Name</label>
                    <input type="text" placeholder='university City' className='input input-bordered w-full' {...register('city', { required: true })} />
                    {errors.city?.type === "required" && <p className='text-red-500 text-sm'>University City is Required</p>}


                    {/* world Rank */}
                    <label className='label font-medium'>University World Rank</label>
                    <input type="number" placeholder='University World Rank' className='input input-bordered w-full' {...register('worldRank', { required: true, valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number" })} />
                    {errors.worldRank?.type === "required" && <p className='text-red-500 text-sm'>University Ranking is Required</p>}


                    {/* dropdown category */}

                    {/* Subject Category */}
                    <label className='label font-medium'>Subject Category</label>
                    <select className='select select-bordered w-full' {...register('subjectCategory', { required: true })}>
                        <option value="">subject Category</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    {errors.subjectCategory?.type === "required" && <p className='text-red-500 text-sm'>Subject Category is Required</p>}


                    {/* Scholarship Category */}
                    <label className='label font-medium'>Scholarship Category</label>
                    <select className='select select-bordered w-full' {...register('scholarshipCategory', { required: true })}>
                        <option value="">Scholarship Category</option>
                        <option value="Full fund">Full fund</option>
                        <option value="Partial">Partial</option>
                        <option value="Self-fund">Self-fund</option>
                    </select>
                    {errors.scholarshipCategory?.type === "required" && <p className='text-red-500 text-sm'>Scholarship Category is Required</p>}



                    {/* Degree Name */}
                    <label className='label font-medium'>Degree Name</label>
                    <select className='select select-bordered w-full' {...register('degree', { required: true })}>
                        <option value="">Degree Name</option>
                        <option value="Masters">Masters</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Diploma">Diploma</option>
                    </select>
                    {errors.degree?.type === "required" && <p className='text-red-500 text-sm'>Degree is Required</p>}


                    {/* optional part: stipend & tuition fees */}
                    <label className='label font-medium'>Tuition Fees</label>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="number" step='any' placeholder='Tuition fees' className='input input-bordered w-full' {...register('tuitionFees', { valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number" })} />
                    </div>
                    <label className='label font-medium'>Stipend</label>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="number" step='any' placeholder='Stipend per month' className='input input-bordered w-full' {...register('stipend', { valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number" })} />
                    </div>

                    {/* Required Fees */}
                    {/* Application Fees */}
                    <label className='label font-medium'>Application Fees</label>
                    <input type="number" placeholder='Application fees' className='input input-bordered w-full' {...register('applicationFees', { required: true, valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number" })} />
                    {errors.applicationFees?.type === "required" && <p className='text-red-500 text-sm'>Application fees is Required</p>}

                    {/* Service charge */}
                    <label className='label font-medium'>Service Charge</label>
                    <input type="number" placeholder='Service charge' className='input input-bordered w-full' {...register('serviceCharge', { required: true, valueAsNumber: true, validate: value => value === undefined || !isNaN(value) || "Must be a Number" })} />
                    {errors.serviceCharge?.type === "required" && <p className='text-red-500 text-sm'>Service charge is Required</p>}



                    {/* Deadline  */}
                    <label className='label font-medium'>Application deadline</label>
                    <input type="date" placeholder='Application Deadline' className='input input-bordered w-full' {...register('applicationDeadline', { required: true })} />
                    {errors.applicationDeadline?.type === "required" && <p className='text-red-500 text-sm'>University Country is Required</p>}


                    {/* Post Date */}
                    <label className='label font-medium'>Scholarship Post Date</label>
                    <input
                        type="date"
                        className='input input-bordered w-full'
                        defaultValue={new Date().toISOString().split('T')[0]}
                        onChange={(e) => console.log('Post date (not submitted):', e.target.value)}
                    />

                    {/* Posted by email */}
                    <label className='label font-medium'>Posted User Email</label>
                    <input type="email" readOnly defaultValue={user?.email} className='input input-bordered w-full' {...register('postedByEmail')} />


                    {/* scholarship Description */}
                    <label className='label font-medium'>Scholarship Description</label>
                    <textarea
                        className='textarea textarea-bordered w-full'
                        placeholder='Scholarship description'
                        rows={2}
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description?.type === "required" && <p className='text-red-500 text-sm'>University City is Required</p>}

                    {/* submit */}
                    <div className='text-center pt-6'>
                        <button type='submit' className='btn btn-primary w-full'>Add Scholarship</button>
                    </div>




                </form>



            </div>
        </div>



    );
};

export default AddScholarship;