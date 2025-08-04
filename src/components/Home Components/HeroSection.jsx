import { headerData, socialsData } from '../../Data/HeroSectionData';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function HeroSection() {

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center h-full relative w-full">
        {/* Left Container - Social Icons */}
        <div className="flex-35 h-full flex items-end justify-start bg-black">
          <div className="m-12 w-full flex items-center justify-start">
            {socialsData.linkedIn && (
              <a
                target="_blank"
                rel="noreferrer"
                className="mx-4  transition-transform duration-500 hover:scale-125"
              >
                <FaLinkedin
                  className="text-4xl text-white"
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a
                href={socialsData.github}
                target="_blank"
                rel="noreferrer"
                className="mx-4 transition-transform duration-500 hover:scale-125"
              >
                <FaGithub
                  className="text-4xl text-white"
                  aria-label="GitHub"
                />
              </a>
            )}
          </div>
        </div>

        {/* Profile Image */}
        <img
          src={headerData.image}
          alt="Profile"
          className="absolute left-[35%] translate-x-[-50%] w-[400px] h-[400px] object-cover rounded-full shadow-lg transition-opacity duration-300 "
        />

        {/* Right Container - Content */}
        <div
          className="flex-65 h-full flex flex-col items-end justify-center bg-gray-200"
        >
          <div
            className="w-[45%] mr-28"
          >
            <p className="mt-4 font-medium text-base opacity-70">
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

            <p className="mt-1 font-medium text-base opacity-70">
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
            <div className="mt-8 w-[350px] flex items-center justify-between">
              {headerData.resumePdf && (
                <a
                  href="https://ankit-portfolio-zeta.vercel.app/"
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="px-6 py-3 rounded-full border-3 text-base font-medium hover:bg-black hover:text-white transition-colors duration-100"
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