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
            <div className="w-3 h-3 mx-1 rounded-full bg-gray-300"></div>
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
                <div
                    className="flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-black"
                >
                    <div className="text-center mb-8">
                        <h1
                            className="text-4xl text-white md:text-5xl font-bold"
                        >
                            Testimonials
                        </h1>
                    </div>

                    <div className="relative w-full max-w-5xl">
                        <FaQuoteLeft
                            className="absolute text-white top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-5xl md:text-6xl opacity-50"
                        />

                        <div
                            className="relative w-full"
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div key={test.id} className="px-4 py-8">
                                        <div className="flex flex-col items-center">
                                            {/* <div
                                                className="w-24 bg-white h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-md z-10"
                                            >
                                                <img
                                                    src={test.image}
                                                    alt={test.name}
                                                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                                                />
                                            </div> */}

                                            <div
                                                className="w-full bg-white md:w-5/6 lg:w-4/5 rounded-[200px] md:rounded-[100px] p-8 pt-16 mt-12 shadow-md"
                                            >
                                                <p className="italic text-lg md:text-xl mb-6 px-4">
                                                    {test.text}
                                                </p>
                                                <h1 className="text-xl md:text-2xl font-semibold">
                                                    {test.name}
                                                </h1>
                                                <h4 className="text-base md:text-lg">
                                                    {test.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            <button
                                className="hidden bg-white md:flex absolute top-1/2 left-4 transform -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center shadow-lg"
                                onClick={gotoPrev}
                            >
                                <FaArrowLeft
                                    aria-label="Previous testimonial"
                                    className="text-xl text-black"
                                />
                            </button>

                            <button
                                className="hidden bg-white md:flex absolute top-1/2 right-4 transform -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center shadow-lg"
                                onClick={gotoNext}
                            >
                                <FaArrowRight
                                    aria-label="Next testimonial"
                                    className="text-xl text-black"
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