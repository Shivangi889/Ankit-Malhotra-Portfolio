import React from "react";
import ProfilePic from "../assets/images/Profile pic.jpeg"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HeroSection({ onAboutClick }) {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col lg:flex-row ">
            <div className="lg:w-[35%]">
                <div className="w-full h-80 overflow-hidden shadow-sm">
                    <img
                        src={ProfilePic}
                        alt="Pooja Bhatia"
                        className="w-full h-full object-cover object-center"
                    />
                </div>


                <div className="text-center mt-2">
                    <h1 className="text-black text-[40px] font-[400] font-tenor-sans leading-snug">
                        Pooja Bhatia <br /><span className="">(She/Her)</span>
                    </h1>
                    <p className="text-lg text-black font-tenor-sans mt-2">Product and Brand Marketing</p>
                    <div className="flex justify-center gap-6 mt-10 text-2xl cursor-pointer sm:mb-0 mb-2">
                        <a
                            href="https://github.com/bhatia-pooja"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <IoLogoGithub className="text-gray-800 hover:text-black hover:scale-110 transition duration-200" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/bhatiapooja43"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-gray-800 hover:text-[#0A66C2] hover:scale-110 transition duration-200" />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&to=pooja.bhatia@email.ucr.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <MdEmail className="text-gray-800 hover:text-red-500 hover:scale-110 transition duration-200" />
                        </a>


                    </div>

                </div>
            </div>

            <div className="lg:w-[65%] sm:p-15 p-5 bg-[#fff27d]">
                <div className="sm:w-xl sm:m-auto">
                    <h2 className=" font-tenor-sans text-4xl font-[400] uppercase border-b border-black pb-5 mb-5">
                        WELCOME to <span className="bg-white px-1">MY DIGITAL HUB</span>
                    </h2>

                    <p className="mb-4 font-roboto text-md font-[500] leading-[28px] text-start">
                        Hi, I’m Pooja Bhatia—an MBA in <strong>Business Analytics</strong> and <strong>Marketing</strong> with a heart
                        for customer-centered innovation. Whether I’m prototyping an AI tool
                        for investors, reimagining digital ordering for a catering business,
                        or <strong>leading</strong> a women’s leadership summit, I bring <strong>curiosity, creativity</strong>,
                        and a <strong>love for solving real problems</strong>.
                    </p>

                    <p className="mb-4 font-roboto text-md font-[500] leading-[28px] text-start">
                        This site is my story: a collection of work that reflects my passion
                        for insights, strategy, and impact. Here, you’ll find the projects
                        I’ve led, the <strong>communities</strong> I’ve shaped, and the values that guide
                        my journey.
                    </p>

                    <p className="mb-4 font-roboto text-md font-[500] leading-[28px] text-start">
                        Whether you’re a recruiter, collaborator, or fellow explorer in the
                        world of <strong>tech and strategy</strong>, I’m glad you’re here. Let’s build
                        something meaningful together.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={onAboutClick}
                            className="border border-black px-8 sm:px-12 py-2 hover:bg-black hover:text-white transition text-sm font-bold"
                        >
                            About Me
                        </button>
                        <button onClick={() => navigate("/project")} className="border border-black px-8 sm:px-12 py-2 hover:bg-black hover:text-white transition text-sm font-bold">
                            Projects
                        </button>
                        <button onClick={() => navigate("/resume")} className="border border-black px-8 sm:px-12 py-2 hover:bg-black hover:text-white transition text-sm font-bold">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
