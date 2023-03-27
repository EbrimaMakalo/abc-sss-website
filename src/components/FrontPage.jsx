import React, {useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const FrontPage = () => {

    const slides = [
        {
            url: 'https://foroyaa.net/wp-content/uploads/2019/09/The-premises-of-ABC-School-sponsored-by-Norwegians-who-are-providing-free-education-to-all-students.-Photo-by-Mutarr.jpg'
        },
        {
            url: 'https://pbs.twimg.com/media/E3ioFptXEAM3RKN.jpg:large'
        },
        {
            url: 'https://foroyaa.net/wp-content/uploads/2019/09/From-L-Mr.-Touray-ABC-Administrator-AB-Vice-Principal-Mr.-Camara-and-AB%E2%80%99s-Mom-Mrs.-Jeng-Photo-by-Matarr.jpg'
        }
    ];

    const[currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return <div className="xl:px-28 2xl:px-52 h-full w-full m-auto group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[520px] bg-cover duration-500"></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[60%] sm:top-[65%] md:top-[65%] xl:top-[60%] -translate-x-0 translate-y-[-50%] text-2xl rounded-r-full p-1 lg:p-2 bg-black/50 hover:bg-indigo-400 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={35}/>
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[60%] sm:top-[65%] md:top-[65%] xl:top-[60%] -translate-x-0 translate-y-[-50%] right-0 xl:right-28 2xl:right-52 text-2xl rounded-l-full p-1 lg:p-2 bg-black/50 hover:bg-indigo-400 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={35}/>
        </div>
        <div className="flex justify-center -translate-x-0 translate-y-[-1%]">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-3xl md:text-4xl font-bold hover:text-indigo-700 cursor-pointer">
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
}

export default FrontPage;