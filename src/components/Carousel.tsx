import React, { useState } from "react";
import image1 from "../images/generated_image_1734462556733.jpg";
import image2 from "../images/generated_image_1734463313712.jpg";
import image3 from "../images/generated_image_1734463552819.jpg";

const images = [image1, image2, image3];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div id="default-carousel" className="relative w-4/5 mx-auto" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-[450px] overflow-hidden rounded-lg md:h-[720px] lg:h-[876px] m-4">
                {images.map((image, index) => (
                    <div
                        className={`absolute block w-full transition-transform duration-700 ease-in-out ${currentIndex === index ? "translate-x-0" : "-translate-x-full"}`}
                        key={index}
                        data-carousel-item
                    >
                        <div className="flex items-center justify-center h-full">
                            <img 
                                src={image} 
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                ))}
            </div>
           
           {/* Slider indicators */}
           <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
                        aria-current={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToImage(index)}
                        key={index}
                    ></button>
                ))}
           </div>

           {/* Slider controls */}
           <button
                type="button"
                className={`absolute left-2 ${window.innerWidth <= 915 ? 'top-5' : 'top-1/3'} z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none -translate-y-1/2`}
                onClick={prevImage}
           >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white m-2">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
           </button>
           <button
                type="button"
                className={`absolute right-2 ${window.innerWidth <= 915 ? 'top-5' : 'top-1/3'} z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none -translate-y-1/2`}
                onClick={nextImage}
           >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus: ring-white m-2">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
           </button>
        </div>
    );
};

export default Carousel;