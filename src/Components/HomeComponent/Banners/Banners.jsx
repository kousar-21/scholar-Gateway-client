import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/Images/bannerImg.jpg"
import { NavLink } from "react-router";

const Banners = () => {
    return (
        <section className="bg-orange-50 py-12 px-6 md:px-10 lg:px-20">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    {/* Animated Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
                        Unlock Your Future with <br />
                        <span className="text-blue-600">ScholarGateway</span>
                    </h1>

                    {/* Short Description */}
                    <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0"
                    >
                        Discover scholarships worldwide, apply with ease, and track your
                        journey—all in one platform designed to simplify your success.
                    </p>

                    {/* Call-to-Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition"
                    >
                        <NavLink to="/allScholarship">Explore Scholarships</NavLink>
                    </motion.button>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <img
                        src={bannerImg}
                        alt="Scholarship Banner"
                        className="w-full max-w-md mx-auto rounded-2xl drop-shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banners;
