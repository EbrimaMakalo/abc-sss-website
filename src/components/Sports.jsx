import React from 'react';
import principal from '../assets/images/default-principal-image.jpg';

const Sports = () => {
  return (
    <div name='sports' className='mt-20 lg:mt-40 px-5 lg:px-10 xl:px-28 2xl:px-52'>
        <div>
            <h1 className='text-3xl lg:text-4xl font-bold text-indigo-500'>ABC SPORTS</h1>
            <p className='mt-10 text-center text-2xl border-b-2 pb-5 font-bold'>ABC Values and Promotes Sports</p>
        </div>
        <div className='mt-20 grid md:grid-cols-2 px-5 lg:px-10 xl:px-20 2xl:px-20 gap-20 lg:gap-40'>
            <div className='text-center'>
                <img src={principal} alt="/" className='rounded-full' />
                <div className='mt-5'>
                    <h1 className='text-2xl lg:text-3xl font-bold'>Mr. XXXXXXXX</h1>
                    <p className='text-xl mt-5'>Head of Sports Department</p>
                </div>
            </div>
            <div className='text-center'>
                <img src={principal} alt="/" className='rounded-full ' />
                <div className='mt-5'>
                    <h className='text-2xl lg:text-3xl font-bold'>Mr. XXXXXXXXXXX</h>
                    <p className='text-xl mt-5'>Head Coach</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sports