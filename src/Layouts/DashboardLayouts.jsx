import React from 'react';
import WebLogo from '../Components/WebLogo/WebLogo';
import { NavLink, Outlet } from 'react-router';
import {
    FaUser, FaFileAlt, FaStar, FaGraduationCap, FaClipboardList,
    FaPlusCircle, FaUsers, FaComments
} from 'react-icons/fa'
import useUserRole from '../Hooks/useUserRole';
import Loader from '../Spinner/Loader';


const DashboardLayouts = () => {

    const { role, isLoading } = useUserRole();
    console.log(role)

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    {/* <div className='mx-2 flex-1 px-2 lg:hidden'>Dashboard</div> */}
                </div>
                {/* Page content here */}
                <div><Outlet></Outlet></div>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <WebLogo></WebLogo>
                    {/* Sidebar content here */}
                    {/* <li>
                        <NavLink to='/dashboardLayout'>

                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink to='/dashboardLayout/my-profile' end>
                            <FaUser className="inline-block mr-2" />My Profile
                        </NavLink>
                    </li>

                    {/* user dashboard */}
                    {
                        !isLoading && role === "user" && <>
                            <li>
                                <NavLink to="/dashboardLayout/my-applications">
                                    <FaFileAlt className="inline-block mr-2" />My Application
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/my-reviews">
                                    <FaStar className="inline-block mr-2" />My reviews
                                </NavLink>
                            </li>
                        </>
                    }

                    {/* moderator dashboard */}

                    {
                        !isLoading && role === "moderator" && <>

                            <li>
                                <NavLink to="/dashboardLayout/manage-scholarships">
                                    <FaGraduationCap className="inline-block mr-2" />Manage Scholarships
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/all-reviews">
                                    <FaComments className="inline-block mr-2" />All reviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/all-applications">
                                    <FaClipboardList className="inline-block mr-2" />All applied Scholarship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/add-scholarship">
                                    <FaPlusCircle className="inline-block mr-2" />Add Scholarship
                                </NavLink>
                            </li>
                        </>
                    }


                    {/* admin dashboard */}
                    {
                        !isLoading && role === "admin" && <>
                            <li>
                                <NavLink to="/dashboardLayout/add-scholarship">
                                    <FaPlusCircle className="inline-block mr-2" />Add Scholarship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/manage-scholarships">
                                    <FaGraduationCap className="inline-block mr-2" />Manage Scholarships
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/all-applications">
                                    <FaClipboardList className="inline-block mr-2" />Manage applied Scholarship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/all-reviews">
                                    <FaComments className="inline-block mr-2" />Manage reviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboardLayout/manage-users">
                                    <FaUsers className="inline-block mr-2" />Manage Users
                                </NavLink>
                            </li>
                        </>
                    }





                </ul>
            </div>
        </div>
    );
};

export default DashboardLayouts;