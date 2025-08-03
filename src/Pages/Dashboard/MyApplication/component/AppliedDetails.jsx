import React from 'react';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../Spinner/Spinner';
import { FaArrowLeft } from 'react-icons/fa';

const AppliedDetails = () => {


    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: application, isLoading } = useQuery({
        queryKey: ["updateScholarship", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <Spinner></Spinner>;

    console.log(application)


    return (
        <div className='py-10 mx-5'>
            <div className="max-w-3xl mx-auto p-6 shadow-lg bg-orange-100 rounded-2xl space-y-4">
                <Link to="/dashboardLayout/my-applications" className="inline-flex items-center gap-2 text-blue-600">
                    <FaArrowLeft /> Back to Applications
                </Link>

                <h2 className="text-2xl font-bold text-center text-gray-800">Application Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p><strong>University:</strong> {application.universityName}</p>
                    <p><strong>Subject:</strong> {application.subjectCategory}</p>
                    <p><strong>Degree:</strong> {application.degree}</p>
                    <p><strong>Application Status:</strong> {application.applicationStatus}</p>
                    <p><strong>Payment Status:</strong> {application.paymentStatus}</p>
                    <p><strong>Payment Amount:</strong> ${application.payment_amount}</p>
                    <p><strong>Application Fees:</strong> ${application.applicationFees}</p>
                    <p><strong>Service Charge:</strong> ${application.serviceCharge}</p>
                    <p><strong>Scholarship Category:</strong> {application.scholarshipCategory}</p>
                    <p><strong>SSC Result:</strong> {application.ssc}</p>
                    <p><strong>HSC Result:</strong> {application.hsc}</p>
                    <p><strong>Study Gap:</strong> {application.studyGap}</p>
                    <p><strong>District:</strong> {application.district}</p>
                    <p><strong>Country:</strong> {application.country}</p>
                    <p><strong>Phone:</strong> {application.phone}</p>
                    <p><strong>Village:</strong> {application.village}</p>
                    <p><strong>Gender:</strong> {application.gender}</p>
                </div>

                <div className="mt-6">
                    <p><strong>Applicant Name:</strong> {application.userName}</p>
                    <p><strong>Applicant Email:</strong> {application.userEmail}</p>
                    <img src={application.applicantImage} alt="Applicant" className="w-32 h-32 object-cover rounded-md mt-2" />
                </div>

                {application.feedback && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded-md border border-yellow-300">
                        <strong>Feedback from Moderator:</strong>
                        <p className="text-gray-700 mt-1">{application.feedback}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppliedDetails;