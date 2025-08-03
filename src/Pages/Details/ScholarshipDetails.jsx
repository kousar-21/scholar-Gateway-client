import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Spinner/Spinner';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loader from '../../Spinner/Loader';

const ScholarshipDetails = () => {
    
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { isLoading, data } = useQuery({
        queryKey: ["scholarshipDetails", id],
        queryFn: async () => {
            const result = await axiosSecure.get(`/scholarship/${id}`)
            return result.data
        }
    })

    const { data: allReviews,isLoading:isReviewLoading } = useQuery({
        queryKey: ["reviews", id],
        queryFn: async () => {
            const result = await axiosSecure.get(`/reviews/average/${id}`)
            return result.data
        }
    })


    if (isLoading || isReviewLoading) {
        return <Spinner></Spinner>
    }



    console.log("all review for scholarship", allReviews)
    const singleReview = allReviews?.reviewRating;
    const allReview = allReviews[0]?.averageRating;
    const rating = Number(allReview ?? singleReview);

    const { scholarship, reviews } = data;

    return (
        <div>
            {
                !scholarship || scholarship.length === 0 ? (<Loader></Loader>) : (
                    <div className="px-4 py-8 md:px-16 lg:px-24">
                        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
                            {scholarship.universityName}
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left: Scholarship Image */}
                            <img
                                src={scholarship.universityImage}
                                alt={scholarship.universityName}
                                className="rounded-xl w-full lg:w-1/2 h-auto object-cover"
                            />


                            {/* Right: Scholarship Details */}
                            <div className="flex-1 space-y-2 text-gray-700">
                                <p><strong>Category:</strong> {scholarship.scholarshipCategory}</p>
                                <p><strong>Location:</strong> {scholarship.city}, {scholarship.country}</p>
                                <p><strong>Deadline:</strong> {scholarship.applicationDeadline}</p>
                                <p><strong>Subject:</strong> {scholarship.subjectCategory}</p>
                                <p><strong>Description:</strong> {scholarship.description || 'N/A'}</p>
                                <p>
                                    <strong>Stipend:</strong>{" "}
                                    {!scholarship.stipend || scholarship.stipend === "0" || Number(scholarship.stipend) === 0 || isNaN(Number(scholarship.stipend))
                                        ? "Not specified"
                                        : `$${scholarship.stipend} per month`}
                                </p>
                                <p><strong>Posted:</strong> {scholarship.postedDate}</p>
                                <p><strong>Service Charge:</strong> ${scholarship.serviceCharge}</p>
                                <p><strong>Application Fee:</strong> ${scholarship.applicationFees}</p>
                                <p className="flex items-center gap-2">
                                    <strong>Rating:</strong>
                                    {!isNaN(rating) ? (
                                        <>
                                            <FaStar className="text-yellow-500" />
                                            {rating.toFixed(1)}
                                        </>
                                    ) : 'N/A'}
                                </p>

                                <button className="btn btn-primary mt-4"
                                    onClick={() => navigate(`/apply-scholarship/${scholarship._id}`, { state: { scholarship } })}
                                >Apply for Scholarship</button>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        {reviews && reviews.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-4 text-blue-500">What Students Say</h2>
                                <div className='w-2/3 mx-auto py-10'>
                                    <Swiper spaceBetween={20} slidesPerView={1}
                                        modules={[Navigation, Pagination, Autoplay]}
                                        navigation={reviews.length > 1}
                                        pagination={{ clickable: true }}
                                        loop={reviews.length > 1}
                                        autoplay={reviews.length > 1 ? { delay: 2000 } : false}
                                    >
                                        {reviews.map((review, idx) => (
                                            <SwiperSlide key={idx}>
                                                <div className="bg-white p-5  w-2/3 mx-auto shadow-md rounded-xl h-full flex flex-col justify-between">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <img src={review.userImage} alt={review.userName} className="w-12 h-12 rounded-full" />
                                                        <div>
                                                            <p className="font-semibold">{review.userName}</p>
                                                            <p className="text-sm text-gray-500">{review.reviewDate}</p>
                                                        </div>
                                                    </div>
                                                    <p className="mb-2 text-sm text-gray-700">"{review.reviewComment}"</p>
                                                    <p className="text-yellow-500 flex items-center">
                                                        <FaStar className="mr-1" />
                                                        {review.reviewRating}/5
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                            </div>
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default ScholarshipDetails;