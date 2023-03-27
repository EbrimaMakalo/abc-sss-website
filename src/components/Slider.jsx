import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Arrows from './Arrows';
import Dots from './Dots';
import imageSlider from './imageSlider';
import './slider.css';

const len = imageSlider.length - 1;

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  //image changes authomatically after every 5 seconds
  useEffect(() => {
    const internal = setInterval( () => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(internal);
  }, [activeIndex]);

  return (
    <div className='slider-container h-[35vh] sm:h-[51vh] md:h-[60vh] lg:h-[65vh] xl:h-[75vh] w-full sticky m-auto overflow-hidden'>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
        <Arrows 
          prevSlide={() => 
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() => 
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          } 
        />
        <Dots 
          activeIndex={activeIndex} 
          imageSlider={imageSlider} 
          onClick={(activeIndex) => setActiveIndex(activeIndex)} 
        />
    </div>
  );
}

export default Slider;