import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { testimonialsData } from '../../Data/HeroSectionData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
        appendDots: dots => (
            <div className="relative bottom-4">
                <ul className="flex justify-center">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full bg-gray-300"></div>
        ),
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div className="flex flex-col items-center justify-center min-h-screen py-8 md:py-16 px-4 sm:px-6 bg-black">
                    <div className="text-center mb-6 md:mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Testimonials
                        </h1>
                    </div>

                    <div className="relative w-full max-w-4xl lg:max-w-5xl">
                        <FaQuoteLeft className="absolute text-white top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl sm:text-5xl md:text-6xl opacity-50" />

                        <div className="relative w-full">
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div key={test.id} className="px-2 sm:px-4 py-6 md:py-8">
                                        <div className="flex flex-col items-center">
                                            <div className="w-full bg-white sm:w-11/12 md:w-5/6 lg:w-4/5 rounded-[20px] sm:rounded-[50px] md:rounded-[100px] p-6 sm:p-8 pt-12 sm:pt-16 mt-8 sm:mt-12 shadow-md">
                                                <p className="italic text-base sm:text-lg md:text-xl mb-4 sm:mb-6 px-2 sm:px-4">
                                                    {test.text}
                                                </p>
                                                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                                                    {test.name}
                                                </h1>
                                                <h4 className="text-sm sm:text-base md:text-lg text-gray-600">
                                                    {test.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            <button
                                className="hidden sm:flex absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full items-center justify-center shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                                onClick={gotoPrev}
                            >
                                <FaArrowLeft
                                    aria-label="Previous testimonial"
                                    className="text-lg md:text-xl text-black"
                                />
                            </button>

                            <button
                                className="hidden sm:flex absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full items-center justify-center shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                                onClick={gotoNext}
                            >
                                <FaArrowRight
                                    aria-label="Next testimonial"
                                    className="text-lg md:text-xl text-black"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;