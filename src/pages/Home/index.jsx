import { div } from 'framer-motion/client'
import React from 'react'
import HeroSection from '../../components/Home Components/HeroSection'
import Achievement from '../../components/Home Components/Achievement'
import AreasWorkInterest from '../../components/Home Components/AreasWorkInterest'
import ToolsSection from '../../components/Home Components/Tools'
import Testimonials from '../../components/Home Components/Testimonials'
import Blog from '../../components/Home Components/Blog'
import AboutMe from '../../components/Home Components/AboutMe'
// import Achievements from '../../components/Achievements'
const Hero = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Achievement />
            <AreasWorkInterest />
            <ToolsSection />
         
            <Testimonials />
            <Blog />
        </>
    )
}

export default Hero