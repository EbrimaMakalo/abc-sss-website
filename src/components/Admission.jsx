import React from 'react'

const Admission = () => {
  return (
    <div name='admission' className='w-full mt-20 bg-gradient-to-r from-indigo-300 via-gray-300 to-indigo-200'>
        <div className='px-5 lg:px-10 xl:px-28 2xl:px-52'>
            <div className='py-5 space-y-4'>
                <h1 className='text-2xl lg:text-3xl font-bold text-indigo-500'>How to Apply to ABC</h1>
                <div>
                    <h1 className='text-xl lg:text-xl font-bold'>Step 1:</h1>
                    <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus corrupti cupiditate laudantium earum est ducimus culpa rem.</p>
                </div>
                <div>
                    <h1 className='text-xl lg:text-xl font-bold'>Step 2:</h1>
                    <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ab maiores debitis quae repudiandae rem.</p>
                </div>
                <div>
                    <h1 className='text-xl lg:text-xl font-bold'>Stem 3:</h1>
                    <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda sint esse quia corporis, omnis cum adipisci possimus inventore temporibus odio nobis explicabo, vel magnam quaerat laboriosam quod tempore veritatis!</p>
                </div>
                <div>
                    <h1 className='text-xl lg:text-xl font-bold'>Step 4:</h1>
                    <p className='text-lg text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus suscipit nobis nemo fugit repellendus animi distinctio eius voluptas aperiam.</p>
                </div>
                <div>
                    <h1 className='text-xl lg:text-xl font-bold'>Step 5:</h1>
                    <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolores inventore ut assumenda dolore mollitia fugiat quod maiores quam in?</p>
                </div>
            </div>
            <div className='pb-10 grid md:grid-cols-2 mt-5'>
                <div className='text-center md:border-r-2 mb-10 md:mb-0'>
                    <h1 className='text-3xl font-bold mb-3'>Apply</h1>
                    <p className='text-xl mb-3'>Click on the button below to Apply</p>
                    <button className='bg-indigo-500 p-2 rounded px-20 hover:bg-gray-500 text-white'>Apply</button>
                </div>
                <div className=' text-center'>
                    <h1 className='text-3xl font-bold mb-3'>Login</h1>
                    <p className='text-xl mb-3'>Click on the button below to Login</p>
                    <button className='bg-indigo-500 p-2 rounded px-20 hover:bg-gray-500 text-white'>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admission