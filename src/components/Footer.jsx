import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='w-screen xl:h-[740px] bg-indigo-500 mt-20'>
            <div className='xl:h-[660px] px-5 lg:px-10 xl:px-28 2xl:px-52 py-5 bg-gray-300 w-full justify-between'>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-1'>
                    <div className='mb-10'>
                        <h1 className='text-3xl font-bold mb-5'>School Address</h1>
                        <iframe width="333" height="286" id="gmap_canvas" src="https://maps.google.com/maps?q=ABC%20Senior%20Secondary%20School%20New%20Jeshwang&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <div className='space-y-1 mt-4'>
                            <p>ABC Senior Seconday School</p>
                            <p>New Jeshwang</p>
                            <p className='hover:text-indigo-500'><a href="">makalomaks01@gmail.com</a></p>
                            <p>P.0 BOX 29220202, Serekunda</p>
                            <p>The Gambia, West Africa</p>
                            <br />
                            <p>School Hours</p>
                            <p>Mondays to Thursdays</p>
                            <p>@8:00am to 6:00 pm</p>
                        </div>
                    </div>
                    <div className='space-y-4 mb-10'>
                        <h1 className='text-3xl font-bold'>Various Clubs</h1>
                        <p className='hover:text-white'><a href="">Science and Maths Clud</a></p>
                        <p className='hover:text-white'><a href="">Peer Health Club</a></p>
                        <p className='hover:text-white'><a href="">ICT Club</a></p>
                        <p className='hover:text-white'><a href="">Press Club</a></p>
                        <p className='hover:text-white'><a href="">Commerce Club</a></p>
                        <p className='hover:text-white'><a href="">Red Croos</a></p>
                        <p className='hover:text-white'><a href="">book Club</a></p>
                        <p className='hover:text-white'><a href="">French Club</a></p>
                        <p className='hover:text-white'><a href="">Athletics</a></p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>Social Platforms</h1>
                        <div className='flex my-5 pb-2 border-b-2 xl:border-b-0 xl:border-t-2 xl:pt-2 border-indigo-500 text-3xl'>
                            <a href=""><FaFacebook className='mr-10 hover:text-indigo-700'/></a>
                            <a href=""><BsYoutube className='mr-10 hover:text-[#ff0000]'/></a>
                            <a href=""><FiInstagram className='mr-10 hover:text-[#fb3958]'/></a>
                            <a href=""><BsTwitter className='mr-10 hover:text-[#1DA1F2]'/></a>
                            <a href=""><FaLinkedin className='mr-10 hover:text-[#0077B5]'/></a>                   
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80px] text-center text-white text-xl pt-3 px-5 lg:px-10 xl:px-28 2xl:px-52'>
                <p>&copy; copyright {year}. All Rights Reserved</p>
                <p>Powered By MakxTech</p>
            </div>
        </div>
    )
}

export default Footer