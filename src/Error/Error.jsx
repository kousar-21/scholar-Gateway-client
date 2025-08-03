import React from 'react';
import error from '../assets/Error 404 Page.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { FaHandPointLeft } from "react-icons/fa";

const Error = () => {
    return (
        <div>
            <div className='pl-10 pt-6'>
                <Link to='/'> <button className='btn btn bg-red-600 text-white'><FaHandPointLeft />Back to Home</button></Link>
            </div>
            <Lottie animationData={error} className='h-[600px]'></Lottie>
        </div>
    );
};

export default Error;