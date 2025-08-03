import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center py-32'>
            <ScaleLoader color={'sky'}></ScaleLoader>
        </div>
    );
};

export default Spinner;
