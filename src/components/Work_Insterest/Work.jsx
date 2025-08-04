import React, { useEffect } from 'react';
import WorkTabs from './WorkTabs';

const Work = () => {

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.card-container');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <header
        className="relative min-h-[50vh] flex items-center justify-center px-4 pt-4 pb-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in bg-white p-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif mb-6">
            Areas of Work and Interest
          </h1>
          <div className="w-24 h-2 bg-black mx-auto mb-2"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            My professional expertise and personal interests span a wide range of disciplines,
            all united by a common thread – a passion for data and technology.
          </p>
        </div>
      </header>

      <main>
        <section className="pt-1 pb-5">
         <div className="max-w-7xl mx-auto px-4">
            <WorkTabs />
          </div>
        </section>
        <div className=" px-4 max-w-7xl mx-auto">
          <p className="text-center font-serif text-lg italic text-gray-500">
            Each of these areas represents my commitment to innovation and my belief
            in the transformative power of technology.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Work;
