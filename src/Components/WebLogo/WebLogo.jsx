import React from 'react';
import SGlogo from '../../Images/sglogo.jpg'
import { Link } from 'react-router';

const WebLogo = () => {
    return (
        <div className='flex items-center gap-3'>
            <div>
                <Link to='/'><img className='size-14 rounded-2xl' src={SGlogo} alt="" /></Link>
            </div>
            <Link to='/'><div className='text-2xl hidden md:block text-primary font-extrabold'>ScholarGateway</div></Link>
        </div>
    );
};

export default WebLogo;