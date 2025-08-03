import axios from 'axios';
import React from 'react';


const axiosInstance = axios.create({
  baseURL: 'https://b11a12-server-side-kousar-21.vercel.app',
});

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;