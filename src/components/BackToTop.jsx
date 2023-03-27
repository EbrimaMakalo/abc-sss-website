import React from 'react'
import { useEffect, useState } from 'react';
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return <div>

    {backToTop && (
        <button className='fixed top-[82%] right-1 lg:right-5 xl:right-12 h-12 w-12 font-[50px]' onClick = {scrollUp}><HiArrowUp className='bg-indigo-500 h-10 w-10 text-white hover:text-black p-2 rounded-full'/></button>
    )}

  </div>
}

export default BackToTop;