
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

const testimonials = [
    { name: "Ayesha K.", review: "ScholarGateway helped me secure a scholarship in Canada. Amazing experience!", university: "University of Toronto" },
    { name: "Ravi S.", review: "Easy to use and very transparent. Highly recommend!", university: "Oxford University" },
    { name: "Fatima Z.", review: "The best platform for applying scholarships securely.", university: "Harvard University" },
];

const Testimonials = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-12 bg-orange-50">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-12">What Students Say</h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay>
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="p-8 bg-white rounded-2xl shadow">
                                <p className="italic text-lg mb-4">“{t.review}”</p>
                                <h4 className="font-semibold">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.university}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
