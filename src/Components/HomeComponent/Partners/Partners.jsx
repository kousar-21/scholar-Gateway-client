import React from 'react';

const partners = [
    { name: "Harvard", logo: "https://i.postimg.cc/0NBHNbBL/un1.jpg" },
    { name: "Oxford", logo: "https://i.postimg.cc/0y94XgSH/un4.jpg" },
    { name: "Stanford", logo: "https://i.postimg.cc/jj5FKzZH/un2.jpg" },
    { name: "MIT", logo: "https://i.postimg.cc/QtKYKjLV/un3.jpg" },
];

const Partners = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        Trusted by Top Universities
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {partners.map((p, idx) => (
                            <div key={idx} className="flex justify-center">
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className="h-24 w-36 rounded-lg grayscale hover:grayscale-0 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;