import React, {useState} from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] lg:h-[100px] z-10 bg-gray-200 fixed">
            <div className="px-2 lg:px-10 xl:px-20 2xl:px-40 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="font-bold text-indigo-500 text-3xl lg:text-4xl md:mr-10 lg:mr-16">ABC SSS</h1>
                    <ul className="hidden md:flex xl:text-xl pt-1">
                        <a href=""><li className="font-bold hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">Home</li></a>
                        <a href=""><li className="font-bold hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">About ABC</li></a>
                        <a href=""><li className="font-bold hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">Activities</li></a>
                        <a href=""><li className="font-bold hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">Contact</li></a>
                        <a href=""><li className="font-bold hover:text-indigo-500 focus:border-b-8 focus:border-b-indigo-500">Admission</li></a>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button className="bg-transparent border-none text-black mr-5">Sign In</button>
                    <button className=" md:px-6 lg:px-8 py-2">Sign Up</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <HiMenu className="h-10 w-10 hover:text-indigo-500"/> : <HiOutlineX className="w-10 h-10 hover:text-indigo-500"/>}
                    
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-gray-200 w-full px-8"}>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Home</li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">About ABC</li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Activities</li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Contact</li></a>
                <a href=""><li className="border-b-2 border-gray-300 w-full hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500">Admission</li></a>
                <div className="flex flex-col my-3">
                    <button className="bg-transparent text-indigo-500 px-6 py-2 mb-3">Sign In</button>
                    <button className="px-8 py-2">Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;