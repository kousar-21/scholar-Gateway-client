import React, { useState } from "react";

// Sample blogs data
const blogsData = [
    {
        id: 1,
        title: "How to Find the Right Scholarship",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Discover tips to identify scholarships that fit your academic and career goals.",
        fullDesc:
            "Finding the right scholarship requires research and strategy. Start by checking trusted platforms like ScholarGateway. Look for eligibility criteria, deadlines, and required documents. Focus on scholarships aligned with your skills, academics, and future career path. Applying early and preparing well increases your chances of success.",
    },
    {
        id: 2,
        title: "Top Mistakes Students Make While Applying",
        image: "https://i.postimg.cc/2yvzbmSw/pexels-yankrukov-8199557.jpg",
        shortDesc: "Avoid these common pitfalls to improve your scholarship success rate.",
        fullDesc:
            "Many students miss deadlines, provide incomplete information, or fail to proofread applications. Others apply randomly without checking eligibility. To avoid rejection, carefully read requirements, prepare your documents, and write strong personal statements. Consistency and attention to detail are key.",
    },
    {
        id: 3,
        title: "Why Reviews Matter in Scholarships",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Understand how student reviews ensure transparency in scholarship platforms.",
        fullDesc:
            "Reviews build trust between students and scholarship providers. At ScholarGateway, reviews help applicants know real experiences of past scholars. Honest feedback ensures credibility, helps others make informed decisions, and improves the scholarship process for everyone.",
    },
    {
        id: 4,
        title: "Tips for Writing a Strong Scholarship Essay",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "A compelling essay can make your application stand out from the rest.",
        fullDesc:
            "A scholarship essay should reflect your achievements, aspirations, and motivation. Be authentic and structured. Avoid generic responses, and focus on your personal journey. Highlight how the scholarship will impact your academic and career goals.",
    },
    {
        id: 5,
        title: "The Role of Moderators in Scholarship Platforms",
        image: "https://i.postimg.cc/NfSzCTb5/pexels-tima-miroshnichenko-6549362.jpg",
        shortDesc: "Learn how moderators keep scholarship platforms fair and reliable.",
        fullDesc:
            "Moderators manage scholarships, review student applications, and handle feedback. They ensure that only genuine scholarships are listed, protect students from scams, and maintain the integrity of the platform.",
    },
    {
        id: 6,
        title: "Why Secure Payments Matter",
        image: "https://i.postimg.cc/DyJCG0FF/pexels-shvetsa-4482896.jpg",
        shortDesc: "Understand the importance of safe transactions in online scholarship applications.",
        fullDesc:
            "ScholarGateway integrates trusted payment gateways like Stripe to keep transactions secure. Secure payments prevent fraud, build trust, and ensure that fees go directly to the right channels.",
    },
    {
        id: 7,
        title: "The Future of Scholarship Management",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Explore how technology is transforming the way students access scholarships.",
        fullDesc:
            "With AI, data-driven insights, and real-time updates, scholarship platforms are becoming smarter. Future systems will personalize scholarship recommendations, making the process even smoother.",
    },
    {
        id: 8,
        title: "How to Track Your Scholarship Application",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Stay updated on your application status to reduce stress.",
        fullDesc:
            "ScholarGateway allows students to track their applications in real-time (pending, accepted, rejected). This transparency keeps students informed and helps them plan their next steps accordingly.",
    },
    {
        id: 9,
        title: "Building a Strong Profile for Scholarships",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Your profile is your first impression—make it count.",
        fullDesc:
            "Keep your academic details, achievements, and personal information up to date. A complete profile increases your chances of getting noticed and shortlisted by providers.",
    },
    {
        id: 10,
        title: "Why Admin Roles Are Important",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Admins keep the scholarship ecosystem running smoothly.",
        fullDesc:
            "Admins oversee users, assign roles, and monitor the platform. Their responsibility ensures smooth operations and a fair environment for all students and moderators.",
    },
    {
        id: 11,
        title: "How Reviews Improve Scholarship Credibility",
        image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Transparency builds trust in the scholarship process.",
        fullDesc:
            "Scholarship reviews provide insights into real experiences. They highlight strengths and weaknesses, guiding future applicants and helping providers improve their offerings.",
    },
    {
        id: 12,
        title: "Steps to Apply for International Scholarships",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
        shortDesc: "Expand your education abroad with the right application strategy.",
        fullDesc:
            "International scholarships require extra planning—language tests, passport, visa, and strong personal essays. Starting early and preparing carefully maximizes your chances of success.",
    },
];

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section className="bg-orange-50 px-5 dark:bg-gray-600 dark:text-white md:px-10 lg:px-20 py-12" id="blogs">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Latest <span className="text-indigo-600 dark:text-primary">Blogs</span>
                </h2>

                {/* Blog Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogsData.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white dark:bg-gray-700 dark:text-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
                        >
                            {/* Image */}
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{blog.title}</h3>
                                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">{blog.shortDesc}</p>

                                {/* Button at bottom */}
                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="mt-auto px-4 py-2 bg-indigo-600 dark:bg-primary text-white text-sm rounded-xl hover:bg-indigo-700 transition"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Modal */}
                {selectedBlog && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 px-4">
                        <div className="bg-white dark:bg-gray-600 dark:text-white max-w-lg w-full rounded-2xl shadow-lg p-6 relative flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {selectedBlog.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-200 mb-6 flex-1">{selectedBlog.fullDesc}</p>

                            {/* Close button at bottom-right */}
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setSelectedBlog(null)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                >
                                    ✕ Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </section>
    );
};

export default Blogs;
