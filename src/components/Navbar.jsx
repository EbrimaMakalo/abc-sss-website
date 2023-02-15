import React, {useState} from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] lg:h-[100px] z-10 bg-gray-200 fixed">
            <div className="px-2 lg:px-10 xl:px-20 2xl:px-40 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="font-bold text-3xl lg:text-4xl md:mr-10 lg:mr-16">ABC SSS</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About ABC</li>
                        <li>Activities</li>
                        <li>Contact</li>
                        <li>Admission</li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button className="bg-transparent border-none text-black mr-5">Sign In</button>
                    <button className=" md:px-6 lg:px-8 py-2">Sign Up</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <HiMenu className="h-10 w-10"/> : <HiOutlineX className="w-10 h-10"/>}
                    
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-gray-200 w-full px-8"}>
                <li className="border-b-2 border-gray-300 w-full">Home</li>
                <li className="border-b-2 border-gray-300 w-full">About ABC</li>
                <li className="border-b-2 border-gray-300 w-full">Activities</li>
                <li className="border-b-2 border-gray-300 w-full">Contact</li>
                <li className="border-b-2 border-gray-300 w-full">Admission</li>
                <div className="flex flex-col my-3">
                    <button className="bg-transparent text-indigo-500 px-6 py-2 mb-3">Sign In</button>
                    <button className="px-8 py-2">Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;