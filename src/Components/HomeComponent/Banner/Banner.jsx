import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const [carousels, setCarousels] = useState([])

    useEffect(() => {
        fetch('/banner.json')
            .then(res => res.json())
            .then(data => setCarousels(data))
    }, [])
    // console.log(carousels)
    return (
        <div className='relative overflow-visible z-0'>
            {carousels.length >= 1 && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >
                    {
                        carousels.map(care => (<SwiperSlide key={care.id}>
                            <div className='relative'>
                                <img className='h-[300px] lg:h-[500px] w-full' src={care.image} alt="" />
                                <div className='absolute bottom-5 md:bottom-16 lg:bottom-16 left-12 lg:left-20 opacity-80'>
                                    <p className='md:text-2xl text-md text-white pb-5 font-bold'>{care.text}</p>
                                    <div className=' space-x-3'>
                                        <button className='btn bg-orange-600 text-white'>{care.button.label}</button>
                                        {/* <button className='btn btn-info'>{care.button.link}</button> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))
                    }
                </Swiper>
            )}
        </div>
    );
};

export default Banner;