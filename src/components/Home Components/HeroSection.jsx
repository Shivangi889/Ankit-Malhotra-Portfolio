import { headerData, socialsData } from '../../Data/HeroSectionData';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMailOpen } from "react-icons/hi";
function HeroSection() {

  return (
  <div className="h-screen flex items-center justify-center overflow-x-hidden">
  <div className="flex flex-col lg:flex-row items-center justify-center h-full relative w-full">
    {/* Left Container - Social Icons */}
    <div className="lg:flex-35 w-full lg:h-full flex items-center lg:items-end justify-center lg:justify-start bg-white py-8 lg:py-0">
      <div className="m-4 lg:m-12 w-full flex items-center justify-center lg:justify-start">
        {socialsData.linkedIn && (
          <a
            href="https://www.linkedin.com/in/malhotra-ankit/"
            target="_blank"
            rel="noreferrer"
            className="mx-4 transition-transform duration-500 hover:scale-125"
          >
            <FaLinkedin
              className="text-3xl lg:text-4xl text-black"
              aria-label="LinkedIn"
            />
          </a>
        )}
        {socialsData.github && (
          <a
            href="https://github.com/MalhotraAnkit97"
            target="_blank"
            rel="noreferrer"
            className="mx-4 transition-transform duration-500 hover:scale-125"
          >
            <FaGithub
              className="text-3xl lg:text-4xl text-black"
              aria-label="GitHub"
            />
          </a>
        )}
          <a
             href="https://mail.google.com/mail/?view=cm&to=amalh017@ucr.edu"
            target="_blank"
            rel="noreferrer"
            className="mx-4 transition-transform duration-500 hover:scale-125"
          >
            <HiOutlineMailOpen
              className="text-3xl lg:text-4xl text-black"
              aria-label="mail"
            />
          </a>
      </div>
    </div>

    {/* Profile Image - Position changes based on screen size */}
<div className="hidden lg:block absolute right transform -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-black z-0">


</div>          
          {/* Profile Image */}
          <img
            src={headerData.image}
            alt="Profile"
            className="relative bg-black lg:absolute lg:left-[35%] lg:translate-x-[-50%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-lg transition-opacity duration-300 z-10"
          />
    {/* Right Container - Content */}
    <div className="lg:flex-65 w-full lg:h-full flex flex-col items-center lg:items-end justify-center bg- py-8 lg:py-0 px-4 lg:px-0">
      <div className="w-full lg:w-[45%] lg:mr-28 max-w-[600px] lg:max-w-none">
        <p className="mt-4 font-medium text-sm md:text-base opacity-70 text-center lg:text-left">
          Hi, I'm Ankit Malhotra— a{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            data enthusiast
          </span>
          ,{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            AI innovator
          </span>
          , and{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            lifelong learner
          </span>{' '}
          with a passion for solving complex problems through the power of technology. From designing AI bots that provide instant therapy to building university scheduling systems, I've dedicated my career to creating impactful solutions that improve lives.
        </p>

        <p className="mt-4 font-medium text-sm md:text-base opacity-70 text-center lg:text-left">
          This site is where I bring my journey to life. Here, you'll find a showcase of my{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            professional work
          </span>
          ,{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            achievements
          </span>
          , and the moments I've been privileged to share as a{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            speaker
          </span>
          ,{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            mentor
          </span>
          , and{' '}
          <span className="italic font-bold text-black bg-amber-100 hover:bg-amber-200 rounded-sm px-1 transition-all duration-300">
            judge
          </span>{' '}
          at AI events and competitions.
        </p>
        <div className="mt-8 w-full flex items-center justify-center lg:justify-between">
          {headerData.resumePdf && (
            <a
              href="https://ankit-portfolio-zeta.vercel.app/"
              download="resume"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="px-6 py-3 rounded-full border-3 text-sm md:text-base font-medium hover:bg-black hover:text-white transition-colors duration-100"
              >
                Let's Collaborate!
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default HeroSection;