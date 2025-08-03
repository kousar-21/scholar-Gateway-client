import React from 'react';
import WebLogo from '../Components/WebLogo/WebLogo';
import { Outlet } from 'react-router';
import authLottie from '../assets/Login.json'
import Lottie from 'lottie-react';

const AuthLayouts = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className=''>
                <div className='pl-10 pt-6'>
                    <WebLogo></WebLogo>
                </div>
                <div>
                    <Lottie animationData={authLottie} className='h-[600px]'></Lottie>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayouts;