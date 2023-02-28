import React, { useState } from 'react';
import './gallery.css';
import { AiOutlineClose } from "react-icons/ai";

import sports1 from '../assets/images/sports1.webp';
import sports2 from '../assets/images/sports2.jpg';
import sports3 from '../assets/images/sports3.jpg';
import sports4 from '../assets/images/sports4.jpg';
import sports5 from '../assets/images/sports5.webp';
import sports6 from '../assets/images/sports6.jpg';
import sports7 from '../assets/images/sports7.jpg';
import sports8 from '../assets/images/sports8.jpg';
import sports9 from '../assets/images/sports9.jpg';
import sports10 from '../assets/images/sports10.jpg';


const ImageGallery = () => {
  
    let data = [
        {
            id: 1,
            imgSrc: sports1,
        },
        {
            id: 2,
            imgSrc: sports2,
        },
        {
            id: 3,
            imgSrc: sports3,
        },
        {
            id: 4,
            imgSrc: sports4,
        },
        {
            id: 5, 
            imgSrc: sports5,
        },
        {
            id: 6,
            imgSrc: sports6,
        },
        {
            id: 7,
            imgSrc: sports7,
        },
        {
            id: 8,
            imgSrc: sports8,
        },
        {
            id: 9,
            imgSrc: sports9,
        },
        {
            id: 10,
            imgSrc: sports10,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true); 
    }

    return (
        <>

        <div className='mt-20 lg:mt-40 px-2 lg:px-5 xl:px-28 2xl:px-52'>
            <h1 className='font-bold text-2xl md:text-3xl text-indigo-500'>ABC Sports Picture Gallery</h1>
        </div>
        <div className={model? 'model open' : 'model'}>
            <img src={tempimgSrc} />
            <AiOutlineClose onClick={() => setModel(false)} />
        </div>
        <div className='mt-5 xl:mt-10 gallery md:px-2 lg:px-5 xl:px-28 2xl:px-52 lg:pb-40'>
            {data.map((item, index) => {
                return(
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="/" style={{width: '100%'}} />
                    </div>
                )
               })}   
        </div>

        <div className='px-2 lg:px-5 xl:px-28 2xl:px-52'>
            <hr />
        </div>

        </>
  )
}

export default ImageGallery;  