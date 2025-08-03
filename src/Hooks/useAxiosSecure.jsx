import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: 'https://b11a12-server-side-kousar-21.vercel.app',
});

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:3000',
// });

const useAxiosSecure = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      res => res,
      err => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/login');
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [navigate]);
  return axiosSecure;
};

export default useAxiosSecure;