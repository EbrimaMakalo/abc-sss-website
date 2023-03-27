import React from 'react';
import principal from '../assets/images/default-principal-image.jpg';
import { FaAngleDoubleRight, FaFacebook, FaLinkedin, FaUsers } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Home = () => {
  return (
    <div name='home' className='px-5 lg:px-10 xl:px-28 2xl:px-52 w-screen z-10'>
        <div className='w-full justify-between'>
            {/* <h1 className='text-3xl mb-10 font-bold text-indigo-500'>Home Page</h1> */}
            <div className='grid md:grid-cols-2 gap-4 mt-10 md:mt-14 xl:mt-20'>
                <div>
                  <h1 className='text-4xl font-bold text-indigo-500 mb-5'>Welcome To ABC SSS</h1>
                  <p className='pr-3 text-lg text-justify mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus porro ut facere tempore, dolorum inventore repellat odio ullam tenetur placeat at nihil dicta harum neque. Laboriosam non officia eaque molestias, ratione quidem cumque nihil dolore, aspernatur expedita maiores veniam voluptatum provident magni, inventore magnam quam! Eius ea, minima rem, laudantium maxime hic illum odio, eum exercitationem rerum asperiores culpa illo. Cupiditate quia eaque, officia dignissimos veritatis incidunt dicta dolor expedita, voluptatibus quod, sapiente doloremque!</p>
                  <p className='pr-3 text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab laboriosam quae praesentium eveniet quis necessitatibus libero assumenda, beatae, rerum id perspiciatis! Velit repudiandae, nobis hic exercitationem alias dicta error asperiores, laboriosam aliquid, harum architecto minima? Ducimus, ipsam corporis. Eum in iure eaque blanditiis sit expedita modi deserunt, similique autem?</p>
                </div>
                <div className='pr-4 mt-10 md:mt-0'>
                   <h1 className='text-4xl mb-10 md:text-right font-bold text-indigo-500'>Principal - Mr. XXXXXXXXX</h1>
                  <img className='h-80 lg:h-96 md:float-right rounded-full' src={principal} alt="/" />
                </div>
            </div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20'>
              <div className='mb-10'>
                <h1 className='bg-indigo-500 text-3xl text-white p-2 mb-5'><a href=""><span className='hover:underline'>Latest News</span></a><HiOutlineSpeakerphone className='float-right mt-1' /></h1>
                <div className='space-y-2 pr-2'>
                  <p className='border-b-2 border-black/20 hover:border-indigo-500 hover:text-gray-500'><a href="">ABC Competes in InterSchool Drama Competitions</a></p>
                  <p className='border-b-2 border-black/20 hover:border-indigo-500 hover:text-gray-500'><a href="">ABC Competes in InterSchool Football Tournament</a></p>
                </div>
                <button className='mt-5 bg-gray-500 hover:bg-indigo-500 text-white p-1 flex'><a href="">All News</a><FaAngleDoubleRight  className='ml-2 mt-1'/></button>
              </div>
              <div className='mb-10'>
                <h1 className='bg-gray-500 text-3xl text-white p-2 mb-5'><a href=""><span className='hover:underline'>Upcoming Events</span></a><GoCalendar className='float-right mt-1' /></h1>
                <div className='flex mb-2'>
                  <div className='mr-10'>
                    <h1 className='text-6xl text-indigo-500 font-bold'>12</h1>
                    <p className='text-xl ml-4 mt-1 text-indigo-500'>SEP</p>
                  </div>
                  <p className='mt-8 text-xl'>School Resumes</p>
                </div>
                <div className='flex mb-2'>
                  <div className='mr-10'>
                    <h1 className='text-6xl text-indigo-500 font-bold'>23</h1>
                    <p className='text-xl ml-4 mt-1 text-indigo-500'>SEP</p>
                  </div>
                  <p className='mt-8 text-xl'>PTA Meeting</p>
                </div>
                <div className='flex'>
                  <div className='mr-10'>
                    <h1 className='text-6xl text-indigo-500 font-bold ml-4'>1</h1>
                    <p className='text-xl ml-4 mt-1 text-indigo-500'>OCT</p>
                  </div>
                  <p className='mt-8 text-xl'>Cultural Day</p>
                </div>
                <button className='mt-5 bg-gray-500 hover:bg-indigo-500 text-white p-1 flex'><a href="">All Events</a><FaAngleDoubleRight  className='ml-2 mt-1'/></button>
              </div>
              <div>
                <h1 className='bg-indigo-500 text-3xl text-white p-2 mb-5'>Social Platforms<FaUsers className='mt-1 float-right'/></h1>
                <div className='text-xl'>
                  <a href=""><p className='flex pb-6 hover:text-indigo-700'>ABC Facebook Page<FaFacebook className='ml-5 mt-1'/></p></a>
                  <a href=""><p className='flex pb-6 hover:text-[#ff0000]'>ABC Youtube Page<BsYoutube className='ml-8 mt-1'/></p></a>
                  <a href=""><p className='flex pb-6 hover:text-[#fb3958]'>ABC Instagram Page<FiInstagram className='ml-4 mt-1'/></p></a>
                  <a href=""><p className='flex pb-6 hover:text-[#1DA1F2]'>ABC Twitter Page<BsTwitter className='ml-11 mt-1'/></p></a>
                  <a href=""><p className='flex pb-6 hover:text-[#0077B5]'>ABC LinkedIn Page<FaLinkedin className='ml-8 mt-1 hover:text-[#0077B5]'/></p></a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home