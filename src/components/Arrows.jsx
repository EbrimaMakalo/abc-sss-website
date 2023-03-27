import React from 'react';

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className='arrows'>
        <span className='prev text-[25px] md:text-[30px] font-bold rounded-r-full hover:rounded-none text-white bg-black/60 hover:bg-indigo-500/80 hover:text-white xl:ml-28 2xl:ml-52' onClick={prevSlide}>
            &#10094;
        </span>
        <span className='next text-[25px] md:text-[30px] font-bold rounded-l-full hover:rounded-none text-white bg-black/60 hover:bg-indigo-500/80 hover:text-white xl:mr-28 2xl:mr-52' onClick={nextSlide}>
            &#10095;
        </span>
    </div>
  );
}

export default Arrows;