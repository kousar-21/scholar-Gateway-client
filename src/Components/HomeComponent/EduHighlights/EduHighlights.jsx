import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
// import { motion, useAnimation } from "framer-motion";


const EduHighlights = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('/eduImg.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    // console.log(items)
    return (
        <div className='bg-orange-100 md:my-10 pt-5 pb-16'>
            <h1 className='md:text-4xl text-2xl font-extrabold text-blue-800 pt-5 pb-8 text-center'>Education Highlights</h1>
            <div
                className='overflow-hidden w-full bg-orange-50 py-5'
            >
                {
                    !items || items.length === 0 ? (
                        <div><span className="loading loading-dots loading-xl text-error"></span></div>
                    ) : (
                        <motion.div
                            className='flex gap-10 w-max'
                            
                            animate={{x: ['0%', "-50%"]}}
                            transition= {{ repeat: Infinity,repeatType: "loop", duration: 20, ease: 'linear' }}
                            
                            // animate={{ x: ['0%', '-50%'] }}
                            // transition={{
                            //     repeat: Infinity,
                            //     repeatType: 'loop',
                            //     duration: 30,
                            //     ease: 'linear',
                            // }}
                        >
                            {[...items, ...items].map((item, index) => (
                                <div key={index} className='flex flex-col items-center max-w-[150px] flex-shrink-0'>
                                    <img src={item.url} alt={item.label} className='w-24 h-24 object-cover shadow rounded-lg' />
                                    <p className='mt-2 text-sm text-gray-600 font-semibold text-center'>{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default EduHighlights;