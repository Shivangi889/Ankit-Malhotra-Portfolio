import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
// import Footer from '../components/Footer'; 
const Contact = ({ scrollToFooter }) => {


  return (
    <div className="min-h-screen bg-white">
      {/* Contact Page Header */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif mb-6">
          Let's Work Together
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          Have a project in mind or want to discuss potential opportunities? 
          I'd love to hear from you. Drop me a message and I'll get back to you soon.
        </p>
        
        {/* Animated arrow button */}
        <button
          onClick={scrollToFooter}
          className="inline-flex flex-col items-center text-[#000] hover:text-yellow-500 transition-colors animate-bounce"
          aria-label="Scroll to contact form"
        >
          <span className="mb-2 font-bold">Contact me</span>
          <ArrowDown className="w-8 h-8" />
        </button>
      </section>
    </div>
  );
};

export default Contact;