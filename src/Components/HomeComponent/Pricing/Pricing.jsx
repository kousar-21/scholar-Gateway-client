import React from 'react';


const plans = [
    {
        name: "Free Plan",
        price: "0",
        features: ["Browse scholarships", "Basic application", "Email support"],
    },
    {
        name: "Premium Plan",
        price: "29",
        features: [
            "Priority application review",
            "Exclusive scholarships",
            "1-on-1 counseling",
        ],
    },
];

const Pricing = () => {
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-12">Membership Plans</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {plans.map((p, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition"
                            >
                                <h3 className="text-2xl font-semibold mb-4">{p.name}</h3>
                                <p className="text-4xl font-bold text-blue-600 mb-6">
                                    ${p.price}
                                    <span className="text-lg text-gray-500">/mo</span>
                                </p>
                                <ul className="text-gray-600 mb-6 space-y-2">
                                    {p.features.map((f, i) => (
                                        <li key={i}>✅ {f}</li>
                                    ))}
                                </ul>
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition">
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;