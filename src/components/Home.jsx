import React, {useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {

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

    return <div className="lg:px-10 xl:px-20 2xl:px-40 pt-10 h-screen w-full m-auto relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-[350px] md:h-[400px] lg:h-[675px] bg-cover duration-500"></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[30%] lg:top-[50%] -translate-x-0 translate-y-[-50%] left-2 xl:left-5 2xl:left-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={35}/>
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[30%] lg:top-[50%] -translate-x-0 translate-y-[-50%] right-2 xl:right-5 2xl:right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={35}/>
        </div>
        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-xl md:text-2xl cursor-pointer">
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
}

export default Home;