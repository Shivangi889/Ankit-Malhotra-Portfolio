import React, { useState } from 'react';
import { InfoModal } from '../Modals';

import img from "../../assets/images/IMG_0576.webp"
import img1 from "../../assets/images/IMG_3705.webp"

const data = [
    {
        id: 1,
        title: '👋 About Me',
        content: `Hi, I'm Ankit Malhotra — a Business Analyst, AI Engineer, and Mentor. I thrive at the intersection of data, technology, and innovation, with a passion for using data science and artificial intelligence to solve real-world problems and drive meaningful impact.`,
        image: img
    },
    {
        id: 2,
        title: '🧠 My Journey',
        content: `My journey began with a deep love for mathematics, especially Statistics and Linear Algebra. That passion naturally evolved into an interest in data analysis and artificial intelligence, leading me to build a multidisciplinary skill set that combines analytical precision with creative problem-solving.`,
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        id: 3,
        title: '💼 What I Do',
        content: `Currently, I work as a Manager of Business Research and Analytics, helping organizations leverage data for smarter, more informed decisions. In parallel, I build AI-powered solutions that are practical, ethical, and user-centric.

Some of my key work includes:
- AI Chatbot for Non-Binary Support: Developed during an internship, this chatbot provides instant therapy-like support to non-binary individuals.
- UCR Scheduling Assistant: As the Principal AI Engineer, I'm leading the development of an AI-based class scheduling tool to help students streamline course selection at the University of California, Riverside.`,
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        id: 4,
        title: '💡 Values & Approach',
        content: `I believe the best solutions lie at the crossroads of rigor and empathy. Whether it's advising businesses or mentoring peers, I strive to bring:
- Analytical depth
- Human-centered design
- Technological innovation
- Collaborative spirit`,
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        id: 5,
        title: '🎸 Outside of Work',
        content: `When I'm not immersed in models or dashboards, you'll likely find me:
- Strumming my guitar
- Deep into a video game strategy
- On the field playing soccer

These hobbies help me stay balanced, creative, and constantly learning.`,
        image: img1
    },
];

function InfoCard({ title, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-gradient-to-r from-black to-gray-800 p-8 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-slate-700 hover:border-transparent"
        >
            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                {title}
            </h3>
            <div className="mt-4 w-12 h-1 bg-slate-600 group-hover:bg-white transition-colors duration-300 rounded-full"></div>
        </div>
    );
}

const AboutMe = () => {
    const [selected, setSelected] = useState(null);
    const mainContent = data[0];
    const cardData = data.slice(1);

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                        About Me
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Passionate about transforming data into insights and building AI solutions that make a difference
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-slate-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                {mainContent.title}
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {mainContent.content}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                    Business Analyst
                                </span>
                                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                                    AI Engineer
                                </span>
                                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                                    Mentor
                                </span>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:order-last">
                            <div className="relative">
                                <img
                                    src={mainContent.image}
                                    alt="About Ankit Malhotra"
                                    className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        Explore My Story
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cardData.map((item) => (
                            <InfoCard
                                key={item.id}
                                title={item.title}
                                onClick={() => setSelected(item)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <InfoModal
                    title={selected.title}
                    content={selected.content}
                    image={selected.image}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
};

export default AboutMe;