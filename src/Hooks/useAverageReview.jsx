import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAverageReview = (id) => {
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['averageReview', id],
        enabled: !!id,
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews/mongo-id/${id}`);
            return res.data;
        }
    });

    const singleReview = data?.reviewRating;
    const allReview = data?.[0]?.averageRating;
    const rating = Number(allReview ?? singleReview);

    return {
        rating: isNaN(rating) ? null : rating,
        isLoading,
        isError,
    };;
};

export default useAverageReview;