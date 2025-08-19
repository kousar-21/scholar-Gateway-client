import React from 'react';

const blogs = [
    { title: "Top 10 Scholarships in 2025", desc: "Explore the best fully-funded scholarships this year.", link: "/blog" },
    { title: "How to Write a Winning Application", desc: "Tips & tricks for writing an impressive application.", link: "/blog" },
    { title: "Mistakes to Avoid", desc: "Common mistakes students make and how to fix them.", link: "/blog" },
];

const BlogSection = () => {
    return (
        <div>
            <section className="px-5 md:px-10 lg:px-20 py-12 bg-orange-50 dark:bg-gray-600 dark:text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Resources & Guides</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map((b, idx) => (
                            <div key={idx} className="p-6 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-2xl shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{b.desc}</p>
                                <a href={b.link} className="text-blue-600 dark:text-primary font-semibold hover:underline">Read More →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSection;