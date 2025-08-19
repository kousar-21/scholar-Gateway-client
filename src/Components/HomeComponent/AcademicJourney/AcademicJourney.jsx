import React, { useEffect, useState } from 'react';


const AcademicJourney = () => {
    const [datas, setDatas] = useState([]);
    
    useEffect(()=>{
        fetch('/journey.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    const eduData = datas.features;
    // console.log(eduData)
    return (
        <div className='bg-orange-50 dark:bg-gray-600 dark:text-white px-5 md:px-10 lg:px-20 py-12'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl lg:text-4xl font-bold'>{datas.title}</h2>
                <p className='text-gray-700 dark:text-gray-300 mt-2'>{datas.subtitle}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                {
                    !eduData || eduData.length === 0 ?(
                        <div> <span className="loading loading-dots loading-xl text-error"></span> </div>
                    ) :
                    (eduData.map((feature,index)=>(
                        
                        <div key={index} className='bg-white dark:bg-gray-700 dark:text-white p-5 rounded-xl shadow-md text-center hover:shadow-2xl transition'>
                            <div className='text-4xl mb-3'>{feature.icon}</div>
                            <h3 className='text-xl font-semibold text-blue-700 dark:text-primary'>{feature.title}</h3>
                            <p className='text-gray-600 dark:text-gray-300 mt-2'>{feature.description}</p>
                        </div>

                    )))
                }
            </div>
            
        </div>
    );
};

export default AcademicJourney;
