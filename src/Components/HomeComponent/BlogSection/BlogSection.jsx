import React from 'react';

const blogs = [
    { title: "Top 10 Scholarships in 2025", desc: "Explore the best fully-funded scholarships this year.", link: "#" },
    { title: "How to Write a Winning Application", desc: "Tips & tricks for writing an impressive application.", link: "#" },
    { title: "Mistakes to Avoid", desc: "Common mistakes students make and how to fix them.", link: "#" },
];

const BlogSection = () => {
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Resources & Guides</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map((b, idx) => (
                            <div key={idx} className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                                <p className="text-gray-600 mb-4">{b.desc}</p>
                                <a href={b.link} className="text-blue-600 font-semibold hover:underline">Read More →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSection;