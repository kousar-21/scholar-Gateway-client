import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/HomeComponent/Navbar/Navbar';
import Footer from '../Components/HomeComponent/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className='sticky top-0 z-10 overflow-visible'>
                <Navbar></Navbar>
            </div>
            <div className='bg-orange-50 pb-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;