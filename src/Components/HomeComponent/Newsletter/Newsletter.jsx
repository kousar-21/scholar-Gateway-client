import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated 🎓</h2>
                    <p className="mb-8">
                        Get the latest scholarship opportunities straight to your inbox.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-xl w-full md:w-2/3 text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;