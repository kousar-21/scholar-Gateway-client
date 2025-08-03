import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loader from '../../../Spinner/Loader';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router';
import useImageUpload from '../../../Hooks/useImageUpload';
// import EditScholarshipModal from './EditScholarshipModal';
// import useAuth from '../../../Hooks/useAuth';

const ManageScholarship = () => {
    const { picture, handleImageUpload } = useImageUpload();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const [editingScholarship, setEditingScholarship] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false)


    const { data: scholarships = [], isLoading } = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarships');
            return res.data;
        },
    });



    const deleteMutation = useMutation({
        mutationFn: async (id) => await axiosSecure.delete(`/scholarships/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries(['scholarships']);
            Swal.fire('Deleted!', 'Scholarship has been removed.', 'success');
        },
    });





    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "It will be permanently removed.",
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMutation.mutate(id);
            }
        });
    };

    console.log("picture", picture)
    console.log("shholarship image", editingScholarship?.universityImage)

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedData = {
            scholarshipName: form.scholarshipName.value,
            universityName: form.universityName.value,
            subjectCategory: form.subjectCategory.value,
            scholarshipCategory: form.scholarshipCategory.value,
            degree: form.degree.value,
            country: form.country.value,
            description: form.description.value,
            city: form.city.value,
            applicationDeadline: form.applicationDeadline.value,
            universityImage: picture || editingScholarship?.universityImage,
            applicationFees: Number(form.applicationFees.value),
            worldRank: Number(form.worldRank.value),
            serviceCharge: Number(form.serviceCharge.value),
            tuitionFees: Number(form.tuitionFees.value),
            stipend: Number(form.stipend.value),
        };
        const res = await axiosSecure.patch(`/scholarships/${editingScholarship._id}`, updatedData);
        if (res.data.modifiedCount > 0) {
            Swal.fire('Success!', 'Scholarship updated.', 'success');
            queryClient.invalidateQueries(['scholarships']);
            setEditingScholarship(null);
        }
    };



    if (isLoading) {
        return <Loader></Loader>
    }



    return (
        <div>
            <div className="p-4">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Manage Scholarships</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Scholarship</th>
                                    <th>University</th>
                                    <th>Category</th>
                                    <th>Degree</th>
                                    <th>Fee</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scholarships.map((s, index) => (
                                    <tr key={s._id}>
                                        <td>{index + 1}</td>
                                        <td>{s.scholarshipName}</td>
                                        <td>{s.universityName}</td>
                                        <td>{s.subjectCategory}</td>
                                        <td>{s.degree}</td>
                                        <td>${s.applicationFees}</td>
                                        <td className="space-x-2">
                                            <NavLink to={`/scholarship/${s._id}`}>
                                                <button className="btn btn-sm btn-outline btn-info"><FaEye /></button>
                                            </NavLink>

                                            <button
                                                className="btn btn-sm btn-outline btn-success"
                                                onClick={() => setEditingScholarship(s)}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline btn-error"
                                                onClick={() => handleDelete(s._id)}
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Edit Modal */}
                    {editingScholarship && (
                        <dialog id="edit_modal" className="modal modal-open">
                            <div className="modal-box">
                                <form onSubmit={handleEditSubmit}>
                                    <h3 className="font-bold text-lg mb-3">Edit Scholarship</h3>
                                    <label className='label font-medium'>Scholarship Name</label>
                                    <input type="text" name="scholarshipName" defaultValue={editingScholarship.scholarshipName} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>University Name</label>
                                    <input type="text" name="universityName" defaultValue={editingScholarship.universityName} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>University logo/Image</label>
                                    <input type="file" name='universityImage' onChange={handleImageUpload} className='input w-full mb-2' />

                                    <label className='label font-medium'>Subject Category</label>
                                    <select
                                        name="subjectCategory"
                                        defaultValue={editingScholarship.subjectCategory}
                                        className="select select-bordered w-full mb-2"
                                    >
                                        <option value="Agriculture">Agriculture</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Doctor">Doctor</option>
                                    </select>

                                    <label className='label font-medium'>Scholarship Category</label>
                                    <select
                                        name="scholarshipCategory"
                                        defaultValue={editingScholarship.scholarshipCategory}
                                        className="select select-bordered w-full mb-2"
                                    >
                                        <option value="Full fund">Full fund</option>
                                        <option value="Partial">Partial</option>
                                        <option value="Self-fund">Self-fund</option>
                                    </select>

                                    <label className='label font-medium'>Degree</label>
                                    <select
                                        name="degree"
                                        defaultValue={editingScholarship.degree}
                                        className="select select-bordered w-full mb-2"
                                    >
                                        <option value="Masters">Masters</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Diploma">Diploma</option>
                                    </select>

                                    <label className='label font-medium'>Country Name</label>
                                    <input type="text" name="country" defaultValue={editingScholarship.country} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>City Name</label>
                                    <input type="text" name="city" defaultValue={editingScholarship.city} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>Application deadline</label>
                                    <input type="date" name="applicationDeadline" defaultValue={editingScholarship.applicationDeadline} className="input input-bordered w-full mb-2" />

                                    <input type="text" name="description" defaultValue={editingScholarship.description} className="input input-bordered w-full mb-2" />


                                    <label className='label font-medium'>Application Fees</label>
                                    <input type="number" step="0.01" name="applicationFees" defaultValue={editingScholarship.applicationFees} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>Tuition Fees</label>
                                    <input type="number" step="0.01" name="tuitionFees" defaultValue={editingScholarship.tuitionFees} className="input input-bordered w-full mb-2" />


                                    <label className='label font-medium'>Service Charge</label>
                                    <input type="number" step="0.01" name="serviceCharge" defaultValue={editingScholarship.serviceCharge} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>stipend</label>
                                    <input type="number" step="0.01" name="stipend" defaultValue={editingScholarship.stipend || "N/A"} className="input input-bordered w-full mb-2" />

                                    <label className='label font-medium'>University World Rank</label>
                                    <input type="number" step="0.01" name="worldRank" defaultValue={editingScholarship.worldRank} className="input input-bordered w-full mb-2" />



                                    <div className="modal-action">
                                        <button type="submit" className="btn btn-success">Save</button>
                                        <button onClick={() => setEditingScholarship(null)} className="btn">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    )}
                </div>

                {/* Edit Modal */}
                {/* <EditScholarshipModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    scholarship={editingScholarship}
                    user={user}
                >

                </EditScholarshipModal> */}
            </div>
        </div>
    );
};

export default ManageScholarship;