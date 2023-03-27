import React, {useState} from "react";
import { Link, animateScroll as scroll, } from 'react-scroll'


import { HiMenu, HiOutlineX } from "react-icons/hi";
import { FaPhoneAlt, FaRegEnvelope, FaUsers, FaAngleDown, FaRegEdit, FaFutbol, FaRegHandPointRight } from "react-icons/fa";
import { BsFillCaretDownSquareFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[250px] xl:h-[170px] z-10 bg-gray-200 relative">
            <div className="xl:flex h-[100px] xl:h-[40px] text-white bg-indigo-500 py-2 sm:py-5 px-2 sm:px-5 lg:px-10 xl:px-28 2xl:px-52 justify-between items-center w-full">
                <div className="flex pb-4 xl:pb-0">
                    <p className="flex pr-3"><FaPhoneAlt className="mr-2 mt-1 text-xs sm:text-lg"/>+220 2754911</p>
                    <p className="flex border-l-2 pl-4 text-white"><FaRegEnvelope className="mr-2 mt-1 text-lg"/><span className=" hover:text-gray-200">ibrahimmaks99@gmail.com</span></p>
                </div>
                <div className="pb-4 xl:pb-0">
                    <p className="font-bold flex"><FaRegHandPointRight className="text-xl mr-1 mt-[2px]"/>Notice Board:<span className="underline hover:text-gray-200 pl-2 text-[14px] md:text-base">School resumes on Monday 4th September 2023</span></p>
                </div>
                {/* <div className="border-[1px] border-white float-left">
                    <button className=" hover:text-gray-200 flex pl-2">Admission & Login<BsFillCaretDownSquareFill  className="ml-2 text-2xl"/></button>
                </div> */}
            </div>
            <div className="px-5 lg:px-10 xl:px-28 2xl:px-52 flex justify-between items-end w-full h-[130px]">
                <div className="font-bold text-indigo-500 mb-0 lg:mb-5 xl:mb-7">
                    <h1 className="text-3xl lg:text-4xl">ABC</h1>
                    <p>Senior Secondary School</p>
                </div>
                <div className="flex">
                    <ul className="hidden md:flex lg:text-xl pt-1">
                        <li className="hover:text-indigo-500 hover:font-bold hover:border-b-4 hover:border-b-indigo-500 cursor-pointer"><Link to="home" smooth={true} offset={-50} duration={500} >Home</Link></li>
                        <li className="hover:text-indigo-500 hover:font-bold hover:border-b-4 hover:border-b-indigo-500 cursor-pointer"><Link to="about" className="flex" smooth={true} offset={-50} duration={500} ><FaUsers className="mt-1 mr-1"/>About</Link></li>
                        <li className="hover:text-indigo-500 hover:font-bold hover:border-b-4 hover:border-b-indigo-500 cursor-pointer"><Link to="admission" className="flex" smooth={true} offset={-50} duration={500} ><FaRegEdit className="text-lg mt-1 mr-1"/>Admission<FaAngleDown className="text-sm mt-2 ml-2"/></Link></li>
                        <li className="hover:text-indigo-500 hover:font-bold hover:border-b-4 hover:border-b-indigo-500 cursor-pointer"><Link to="sports" className="flex" smooth={true} offset={-50} duration={500} ><FaFutbol className="mt-1 mr-1"/>Sports</Link></li>
                        <li className="hover:text-indigo-500 hover:font-bold hover:border-b-4 hover:border-b-indigo-500 cursor-pointer"><Link to="videos" smooth={true} offset={-50} duration={500} >Videos</Link></li>
                    </ul>
                    <form action="" className="relative flex items-center">
                        <AiOutlineSearch className="w-5 h-5 ml-2 absolute pointer-events-none"/>
                        <input
                            type="search" 
                            placeholder="Search..." 
                            name="search"
                            className="placeholder-black py-4 pl-8 mr-3 h-6 bg-transparent border-[1px] border-white rounded-2xl focus-within:border-indigo-500 focus-within:outline-none" 
                        />
                    </form>
                </div>
                {/* <div className="hidden md:flex">
                    <button className="bg-transparent border-none text-black mr-5">Sign In</button>
                    <button className=" md:px-6 lg:px-8 py-2">Sign Up</button>
                </div> */}
                <div className="md:hidden pr-2" onClick={handleClick}>
                    {!nav ? <HiMenu className="h-10 w-10 hover:text-indigo-500"/> : <HiOutlineX className="w-10 h-10 hover:text-indigo-500"/>}
                    
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-gray-200 w-screen h-[320px] px-5"}>
                <Link to="home" smooth={true} offset={-50} duration={500} ><li className="border-b-2 py-4 hover:font-bold cursor-pointer border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Home</li></Link>
                <Link to="about" smooth={true} offset={25} duration={500} ><li className="flex border-b-2 py-4 hover:font-bold cursor-pointer border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500"><FaUsers className="mt-1 mr-1"/>About ABC<FaAngleDown className="text-sm mt-2 ml-2 float-right"/></li></Link>
                <Link to="admission" smooth={true} offset={5} duration={500} ><li className="flex border-b-2 py-4 hover:font-bold cursor-pointer border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500"><FaRegEdit className="text-lg mt-1 mr-1"/>Admission<FaAngleDown className="text-sm mt-2 ml-2"/></li></Link>
                <Link to="sports" smooth={true} offset={-5} duration={500} ><li className="flex border-b-2 py-4 hover:font-bold cursor-pointer border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500"><FaFutbol className="mt-1 mr-1"/>Sports</li></Link>
                <Link to="videos" smooth={true} offset={-50} duration={500} ><li className="flex border-b-2 py-4 hover:font-bold cursor-pointer border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Videos</li></Link>
                
                {/* <div className="flex flex-col my-3">
                    <button className="bg-transparent text-indigo-500 px-6 py-2 mb-3">Sign In</button>
                    <button className="px-8 py-2">Sign Up</button>
                </div> */}
            </ul>
        </div>
    )
}

export default Navbar;