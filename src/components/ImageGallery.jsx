import React, { useState } from 'react';
import './gallery.css';

import sports1 from '../assets/sports1.webp';
import sports2 from '../assets/sports2.jpg';
import sports3 from '../assets/sports3.jpg';
import sports4 from '../assets/sports4.jpg';
import sports5 from '../assets/sports5.webp';

const ImageGallery = () => {
  
    let data = [
        {
            id: 1,
            imgSrc: sports1,
        },
        {
            id: 1,
            imgSrc: sports2,
        },
        {
            id: 1,
            imgSrc: sports3,
        },
        {
            id: 1,
            imgSrc: sports4,
        },
        {
            id: 1,
            imgSrc: sports5,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }

    return (
        <>

        <div className={model? 'model open' : 'model'}>
            <img src={tempImgSrc} />
        </div>
        <div className='mt-20 gallery lg:mx-2 xl:mx-28 2xl:mx-52'>
            {data.map((item, index) => {
                return(
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="/" style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>

        </>
  )
}

export default ImageGallery