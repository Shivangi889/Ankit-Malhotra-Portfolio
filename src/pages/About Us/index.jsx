import React, { useRef } from 'react';
import HeroSection from '../../components/HeroSection'

import AboutMe from '../../components/AboutMe'
import SpecialAboutme from '../../components/SpecialAboutme/SpecialAboutme';
import  Work from '../../components/Work_Insterest/Work';

import ToolsSection from '../../components/Tool';

const AboutUs = () => {
  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="">
   
      <div className=''>
        <HeroSection onAboutClick={handleScrollToAbout} />
        <AboutMe  refProp={aboutRef}/>
        <SpecialAboutme/>
        <Work/>
        <ToolsSection/>
      </div>

    </div>
  )
}

export default AboutUs