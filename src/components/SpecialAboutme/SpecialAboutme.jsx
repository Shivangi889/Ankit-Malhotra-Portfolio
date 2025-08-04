import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Award, GraduationCap, Club, Star } from "lucide-react";
import image1 from "../../assets/images/IMG_8536.jpeg";
import image2 from "../../assets/images/IMG_3413.jpeg";
import image3 from "../../assets/images/IMG_3738.jpeg";
import image4 from "../../assets/images/IMG_3611.jpeg";
import Simple from "../../assets/SPECIAL.mp4"

const Special = () => {
  const specialItems = [
    {
      icon: <Award className="icon purple" />,
      title: "Problem Solver",
      description:
        " My strength lies in translating complexity into clarity. Whether it’s mapping customer journeys, decoding market signals, or aligning cross-functional teams, I approach problems with curiosity and structure. My background in business analytics gives me the toolkit to dig deep into the “what,” but it’s my marketing lens that pushes me to always ask “why”—why people behave the way they do, and how we can build for that behavior",
      tags: "Clarity-Driven ",
      para: "Translating complexity into clarity, powered by curiosity and structure.",
      img: image1
    },
    {
      icon: <GraduationCap className="icon blue" />,
      title: "Values-Led Leader & Community Builder",
      description:
        " Leadership isn’t just a title to me—it’s a practice. At UCR, I led a 35-member executive board as President of Women in Business, guiding the organization through its most significant growth to date. With a programming budget of nearly $20,000, we hosted 20+ high-impact events and expanded our presence across campuses and industries. I found purpose in mentoring peers, building inclusive communities, and creating spaces where future leaders could thrive.",
      tags: ["Values-Led "],
      para: "Guiding teams, growing communities, and creating space for others to thrive.",
      img: image2
    },
    {
      icon: <Star className="icon amber" />,
      title: " with Real-World Grit",
      description:
        "That same commitment to excellence earned me induction into Beta Gamma Sigma, the international honor society for the top 20% of graduate business students—recognition that aligned with my 3.85 GPA and dedication to both academic and applied success. I believe learning doesn’t stop at theory—real value comes from applying that knowledge with purpose and precision.",
      tags: ["Academic Achiever"],
      para: "Rooted in excellence, recognized for performance and impact.",
      img: image3
    },
    {
      icon: <Club className="icon emerald" />,
      title: "Hustler with Heart",
      description:
        " I’ve also been on the other side—building from zero, wearing every hat, and learning how to hustle with heart. As a founder of Whiffs of Nature, I learned to balance creativity with execution and customer delight with operational efficiency. That experience sharpened my ability to prioritize, adapt quickly, and deliver value—no matter the resource constraints.",
      tags: ["Entrepreneurship"],
      para: "Building from zero, wearing every hat, and learning how to hustle with heart.",
      img: image4
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % specialItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [specialItems.length]);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % specialItems.length);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + specialItems.length) % specialItems.length);
  };

  return (
    <div className="min-h-screen">
      <div className="text-center max-w-4xl mx-auto animate-fade-in bg-white sm:hidden block">
        <h3 className="text-md uppercase tracking-widest text-gray-600 font-semibold mb-1">WHAT’S</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">SPECIAL ABOUT ME?</h2>
      </div>
      <section className="px-4 md:px-5 py-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center text-center lg:text-left">
          <div className="w-full max-w-[500px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-lg "
            >
              <source src={Simple} type="video/mp4" />
              special about me
            </video>
          </div>

        </div>

        {/* Right: Card Section */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <div className="sm:block hidden">
            <h3 className="text-md uppercase tracking-widest text-gray-600 font-semibold mb-1">WHAT’S</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">SPECIAL ABOUT ME?</h2>
          </div>
          <div className="relative bg-gray-200 w-full h-[350px] p-2 md:h-[400px] rounded-2xl overflow-hidden border-2 border-black shadow-xl group">
            <img
              src={specialItems[currentItem].img}
              alt="Special"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:brightness-75 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-center justify-center px-6 text-center">
              <p className="text-white text-lg md:text-xl font-medium">
                {specialItems[currentItem].description}
              </p>
            </div>
          </div>

          {/* Tags and Title */}
          <div className="mt-4">
            <span className="bg-[#fff27d] px-3 py-1 rounded text-sm font-semibold mr-2">
              {specialItems[currentItem].tags}
            </span>
            <span className="text-lg font-semibold text-gray-800">
              {specialItems[currentItem].title}
            </span>
            <p className="text-lg font-semibold text-gray-800">
              {specialItems[currentItem].para}
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevItem}
              className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextItem}
              className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Special;
