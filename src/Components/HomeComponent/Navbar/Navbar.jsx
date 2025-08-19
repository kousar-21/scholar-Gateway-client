import React from 'react';
import { FaSignInAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import WebLogo from '../../WebLogo/WebLogo';
import './Navbar.css'
import useAuth from '../../../Hooks/useAuth';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Theme from '../../handleThemeChange/Theme';

const Navbar = () => {

    const { user, logout } = useAuth();

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allScholarship'>All Scholarship</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        {
            user && <>
                <li><NavLink to='/dashboardLayout'>Dashboard</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
            </>
        }


    </>


    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "You successfully logout from ScholarGateway",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className="navbar bg-orange-100 dark:bg-gray-700 dark:text-white text-primary shadow-sm px-5 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div>
                    <WebLogo></WebLogo>
                </div>
                <div className='pl-2'>
                    {
                        /* Theme Toggle */
                    }
                    <Theme></Theme>
                </div>
            </div>


            <div className="navbar-end">
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div>
                    {
                        user && (
                            <div className='example-container relative z-10 px-5'>
                                <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="top">
                                    <div>
                                        {user && <img className='size-14 rounded-full' src={user.photoURL} alt={user.displayName}></img>}
                                    </div>
                                </a>
                                <Tooltip id="my-tooltip" className="example" />
                            </div>
                        )
                    }
                </div>
                {
                    user ? <button onClick={handleLogout} className='px-4 py-2 bg-orange-600 text-white rounded-md flex items-center gap-2'>Logout<FaSignInAlt /></button> : <Link to='/login'>
                        <button className='px-4 py-2 bg-secondary text-white rounded-md flex items-center gap-2'><FaSignInAlt />Login</button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;