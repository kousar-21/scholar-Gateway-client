import React from 'react';
import WebLogo from '../../WebLogo/WebLogo';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='md:px-20 px-5 py-10 bg-orange-200'>
            <div className='flex justify-between'>
                <div> <WebLogo></WebLogo> </div>
                <div>
                    <h1 className='underline pb-3'>Follow Us</h1>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://web.facebook.com/?_rdc=1&_rdr#' target="_blank"><FaFacebook size={20} /></a>
                        <a href="https://www.youtube.com/" target="_blank"><FaYoutube size={20} /></a>
                        <a href="https://x.com/" target="_blank"><FaTwitter size={20} /></a>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                <div>
                    <h1 className='text-xxl font-bold mb-3'>Academics</h1>
                    <p className='text-sm text-gray-600 mb-2'>Programming</p>
                    <p className='text-sm text-gray-600 mb-2'>Art & Design</p>
                    <p className='text-sm text-gray-600 mb-2'>Photography</p>
                    <p className='text-sm text-gray-600 mb-2'>Business</p>
                </div>
                <div>
                    <h1 className='text-xxl font-bold mb-3'>Support</h1>
                    <p className='text-sm text-gray-600 mb-2'>Help Center</p>
                    <p className='text-sm text-gray-600 mb-2'>FAQ</p>
                    <p className='text-sm text-gray-600 mb-2'>Security</p>
                    <p className='text-sm text-gray-600 mb-2'>Contacts</p>
                </div>
                <div>
                    <h1 className='text-xxl font-bold mb-3'>Our Links</h1>
                    <a href=""><p className='text-sm text-gray-600 mb-2'>About Us</p></a>
                    <a href=""><p className='text-sm text-gray-600 mb-2'>Courses</p></a>
                    <a href=""><p className='text-sm text-gray-600 mb-2'>News</p></a>
                    <a href=""><p className='text-sm text-gray-600 mb-2'>Privacy Policy</p></a>
                </div>
                <div>
                    <h1 className='text-xxl font-bold mb-3'>Get in touch</h1>
                    <p className='text-sm text-gray-600 mb-2'>(88)123 5487 3654</p>
                    <p className='text-sm text-gray-600 mb-2'>681 Pompton Ave, Cedar Grove, NJ 5479 United States</p>
                    <p className='text-sm text-gray-600 mb-2'>scholargateway@gmail.com</p>
                </div>
            </div>
            <p className='text-center pt-5'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
    );
};

export default Footer;