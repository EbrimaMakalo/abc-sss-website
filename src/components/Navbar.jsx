import React, {useState} from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { FaPhoneAlt, FaRegEnvelope, FaUsers, FaAngleDown, FaRegEdit, FaFutbol, FaRegHandPointRight } from "react-icons/fa";
import { BsFillCaretDownSquareFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[300px] xl:h-[170px] z-10 bg-gray-200">
            <div className="xl:flex h-[150px] xl:h-[40px] text-white bg-indigo-500 py-5 px-5 lg:px-10 xl:px-28 2xl:px-52 justify-between items-center w-full">
                <div className="flex pb-4 xl:pb-0">
                    <p className="flex pr-3"><FaPhoneAlt className="mr-2 mt-1 text-lg"/>+220 2754911/3585241</p>
                    <p className="flex border-l-2 pl-4 text-white"><FaRegEnvelope className="mr-2 mt-1 text-lg"/><span className=" hover:text-gray-200">ibrahimmaks99@gmail.com</span></p>
                </div>
                <div className="pb-4 xl:pb-0">
                    <p className="font-bold flex border-l-2 pl-4"><FaRegHandPointRight className="text-xl mr-1 mt-[2px]"/>Notice Board:<span className="underline hover:text-gray-200 pl-2 text-[14px] md:text-base">School resumes on Monday 4th Sept 2023</span></p>
                </div>
                <div className="border-[1px] border-white float-left">
                    <button className=" hover:text-gray-200 flex pl-2">Admission & Login<BsFillCaretDownSquareFill  className="ml-2 text-2xl"/></button>
                </div>
            </div>
            <div className="px-5 lg:px-10 xl:px-28 2xl:px-52 flex justify-between items-end w-full h-[130px]">
                <div className="font-bold text-indigo-500 mb-0 lg:mb-5 xl:mb-7">
                    <h1 className="text-3xl lg:text-4xl">ABC</h1>
                    <p>Senior Secondary School</p>
                </div>
                <div className="flex">
                    <ul className="hidden md:flex 2xl:text-xl pt-1">
                        <a href=""><li className=" hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">Home</li></a>
                        <a href=""><li className=" hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500 flex"><FaUsers className="mt-1 mr-1"/>About ABC<FaAngleDown className="text-sm mt-2 ml-2"/></li></a>
                        <a href=""><li className=" hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500 flex"><FaRegEdit className="text-lg mt-1 mr-1"/>Admission<FaAngleDown className="text-sm mt-2 ml-2"/></li></a>
                        <a href=""><li className=" hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500 flex"><FaFutbol className="mt-1 mr-1"/>Sports</li></a>
                        <a href=""><li className=" hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">Videos</li></a>
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
                <div className="md:hidden mr-2" onClick={handleClick}>
                    {!nav ? <HiMenu className="h-10 w-10 hover:text-indigo-500"/> : <HiOutlineX className="w-10 h-10 hover:text-indigo-500"/>}
                    
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-gray-200 w-full px-8"}>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Home</li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 flex"><FaUsers className="text-lg mt-1 mr-1"/>About ABC<FaAngleDown className="text-sm mt-1 ml-2"/></li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 flex"><FaRegEdit className="text-lg mt-1 mr-1"/>Admission<FaAngleDown className="text-sm mt-1 ml-2"/></li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 flex"><FaFutbol className="mt-1 mr-1"/>Sports</li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Videos</li></a>
                {/* <div className="flex flex-col my-3">
                    <button className="bg-transparent text-indigo-500 px-6 py-2 mb-3">Sign In</button>
                    <button className="px-8 py-2">Sign Up</button>
                </div> */}
            </ul>
        </div>
    )
}

export default Navbar;