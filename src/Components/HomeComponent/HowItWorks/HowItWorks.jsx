
import { FaSearch, FaWpforms, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const steps = [
  { icon: <FaSearch size={40} />, title: "Browse Scholarships", desc: "Find the right opportunities by country, degree, or university." },
  { icon: <FaWpforms size={40} />, title: "Apply Online", desc: "Submit your application with a few clicks." },
  { icon: <FaMoneyBillWave size={40} />, title: "Secure Payment", desc: "Pay fees safely through Stripe." },
  { icon: <FaCheckCircle size={40} />, title: "Track Status", desc: "Stay updated on every stage of your application." },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-orange-50 dark:bg-gray-600 dark:text-white">
      <div className="px-5 md:px-10 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-blue-600 mb-4 flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
