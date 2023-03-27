import React from 'react'

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
        {imageSlider.map((slide, index) => (
            <div 
                key={index} 
                className={index === activeIndex ? 'slides active' : 'inactive'}
            >
                <img className='slide-image xl:px-28 2xl:px-52 w-full h-[35vh] sm:h-[51vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] absolute object-cover' src={slide.urls} alt="/" />
                <button className='slide-title text-indigo-500 ml-14 md:ml-20 xl:ml-48 2xl:ml-72 text-3xl md:text-4xl absolute text-center top-[15%] sm:top-[27%] md:top-[34%] lg:top-[37%] xl:top-[44%] z-10 p-5 bg-gray-200/80 border-r-8 border-r-indigo-500 rounded-tr-full'>{slide.title}</button>
            </div>
        ))}
    </section>
  )
}

export default SliderContent