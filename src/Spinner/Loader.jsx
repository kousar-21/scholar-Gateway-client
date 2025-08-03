import React from 'react';
import LottieLoader from '../assets/JustFlow.json'
import Lottie from 'lottie-react';

const Loader = () => {
    return (
        <div className='h-[200px] w-[200px] text-center'>
            <Lottie animationData={LottieLoader}></Lottie>
        </div>
    );
};

export default Loader;