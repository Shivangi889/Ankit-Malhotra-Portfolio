import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const contactRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        try {
            await emailjs.send(
                'your_service_id',
                'your_template_id',
                templateParams,
                'your_public_key'
            );

            setFormData({ name: '', email: '', message: '' });
            setShowModal(true);
        } catch (error) {
            console.error('Email send error:', error);
            alert("Something went wrong! Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* CTA Section */}
            {/* <div className="bg-[#fff27d] text-gray-900 px-6 py-5 md:py-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h4 className="text-sm font-semibold uppercase mb-3 tracking-wider text-gray-800 font-tenor-sans">Ready to transform your product?</h4>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight font-tenor-sans">
                            Let's create something extraordinary together
                        </h2>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-gray-400/40"
                        >
                            <span className="font-medium text-white">Book a discovery call</span>
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
            </div> */}

            {/* Footer */}
            <footer className="bg-black text-white pt-10 pb-5 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div ref={contactRef} id="contact" className="space-y-6">
                        <h4 className="text-white text-xl font-bold mb-2">Get in Touch</h4>
                        <p className="text-gray-400">Have a project in mind? Let's discuss how I can help.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="3"
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-white hover:bg-gray-900 hover:text-white text-black font-medium rounded-lg transition flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white text-xl font-bold mb-2">Explore</h4>
                        <div className="grid grid-cols-1 gap-3">
                            <Link
                                to="/"
                                className="hover:text-white text-white transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                                About Me
                            </Link>
                            <Link
                                to="/project"
                                className="hover:text-white text-white transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                             Projects
                            </Link>
                            <Link
                                to="/mysandbox"
                                className="hover:text-white text-white transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                                My Sandbox
                            </Link>
                            {/* <Link
                                to="/resume"
                                className="hover:text-white text-white transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                                Experience
                            </Link> */}
                            <Link
                                to="/contact"
                                className="hover:text-white text-white transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h4 className="text-white text-xl font-bold mb-2">Connect</h4>
                        <p className="text-gray-400">Follow me on social media or drop me a message.</p>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.linkedin.com/in/malhotra-ankit/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} className="text-gray-300 hover:text-white" />
                            </a>
                            <a
                                  href="https://mail.google.com/mail/?view=cm&to=amalh017@ucr.edu"
                                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
                                aria-label="Email"
                            >
                                <Mail size={20} className="text-gray-300 hover:text-white" />
                            </a>
                            <a
                                href="https://github.com/MalhotraAnkit97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <Github size={20} className="text-gray-300 hover:text-white" />
                            </a>
                        </div>

                        {/* <div className="mt-6">
                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium transition-colors"
                            >
                                Start a conversation
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div> */}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white text-center text-white text-sm">
                    &copy; {new Date().getFullYear()} Ankit Malhotra. All rights reserved.
                </div>

                {/* Thank You Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
                        <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
                            <h3 className="text-2xl font-bold mb-4 text-center">Thank you! 🎉</h3>
                            <p className="text-center mb-6">Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </footer>
        </>
    );
};

export default Footer;