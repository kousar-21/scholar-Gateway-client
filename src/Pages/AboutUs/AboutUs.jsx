import React, { useState } from "react";
import aboutImg from "../../Images/sglogo.jpg"; 

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const shortText =
    "ScholarGateway is your trusted platform for discovering and applying to scholarships worldwide. We aim to simplify the process for students while providing transparency and efficiency for scholarship providers.";
  const fullText =
    " With modern technology, we ensure a smooth and secure experience for every user. Students can browse scholarships, apply with guided steps, and track their application progress in real time. Moderators manage scholarships and reviews, while admins oversee the entire platform. ScholarGateway is built with scalability and user-friendliness in mind, making it the perfect bridge between students and opportunities.";

  return (
    <section className="bg-orange-50 px-5 dark:bg-gray-600 dark:text-white md:px-10 lg:px-20 py-12" id="about">
      <div className="space-y-20">
        {/* -------- About Section -------- */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src={aboutImg}
              alt="About ScholarGateway"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About <span className="text-indigo-600 dark:text-primary">ScholarGateway</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-200 text-lg leading-relaxed">
              {shortText}
              {showMore && fullText}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 bg-indigo-600 dark:bg-primary text-white rounded-2xl shadow-md hover:bg-indigo-700 transition"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>

        {/* -------- Contact Section -------- */}
        <div
          className="bg-gray-100 dark:bg-gray-700 dark:text-white p-10 rounded-2xl shadow-md"
          id="contact"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Contact Info */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Get in <span className="text-indigo-600 dark:text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-200 text-lg">
                Have questions or need support? Reach out to us anytime. Our
                team is here to help you.
              </p>

              <div className="space-y-2 text-gray-700 dark:text-gray-200">
                <p>📍 Address: Dhaka, Bangladesh</p>
                <p>📧 Email: support@scholargateway.com</p>
                <p>📞 Phone: +880 1234 567 890</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 dark:bg-primary text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
