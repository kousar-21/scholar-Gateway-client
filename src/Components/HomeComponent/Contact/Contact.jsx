import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="px-5 md:px-10 lg:px-20 py-12 bg-orange-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-10">
                        Have questions? Reach out to us and we’ll get back to you.
                    </p>
                    <form className="grid gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="px-4 py-3 rounded-xl border focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-3 rounded-xl border focus:outline-none"
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="px-4 py-3 rounded-xl border focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mt-8 text-gray-600">
                        📍 Dhaka, Bangladesh | 📧 support@scholargateway.com
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;