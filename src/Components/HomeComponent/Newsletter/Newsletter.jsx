import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <section className="px-5 md:px-10 lg:px-20 py-12 bg-sky-500 text-white dark:bg-gray-700 dark:text-white">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated 🎓</h2>
                    <p className="mb-8">
                        Get the latest scholarship opportunities straight to your inbox.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 focus-visible:border py-3 rounded-xl w-full md:w-2/3 text-black dark:text-gray-200 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-orange-400 text-black font-semibold rounded-xl hover:bg-orange-200 transition"
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