import React, { useState } from 'react';
import { InfoModal } from '../Modals';

import img from "../../assets/images/more_aboutme.JPG"
import img1 from "../../assets/images/IMG_3705.webp"
import journey from "../../assets/images/IMG_0576.webp"
import Do from "../../assets/images/IMG_5134.webp"
import Value from "../../assets/images/Value.JPEG"
const data = [
    {
        id: 1,
        title: 'About Me',
        content: `Hi, I'm Ankit Malhotra — Head of Operations at Glīd, Manager of Business Research & Analytics at Stored Power Technology, and Artificial Intelligence Instructor at UC Riverside. I thrive at the intersection of data, technology, and innovation, architecting AI platforms that synchronize logistics, optimize energy systems, and create sustainable impact. From securing $30M investments to winning TechCrunch Disrupt 2025, I combine strategic leadership with hands-on technical execution to solve real-world problems and drive meaningful change.`,
        image: img
    },
    {
        id: 2,
        title: 'My Journey',
        content: `My journey began with a deep love for mathematics, especially Statistics and Linear Algebra. What started as an academic fascination with numbers and patterns naturally evolved into a passion for uncovering insights hidden within data.

From my early days as a Data Analyst at LEO1, where I built over 100 automated dashboards and optimized backend processes, to my role as Senior Data Analyst at Uber, I've consistently sought to bridge the gap between raw data and actionable business intelligence. Each experience taught me that data isn't just numbers—it's a story waiting to be told.

The turning point came when I discovered the transformative power of artificial intelligence. During my MBA at UC Riverside, I combined my analytical foundation with cutting-edge AI technologies, leading projects like the UCR Scheduling Assistant and developing AI chatbots that provide meaningful support to underserved communities.

Today, as Head of Operations at Glīd and Manager of Business Research & Analytics at Stored Power Technology, I'm at the forefront of AI-driven innovation, architecting solutions that synchronize logistics, optimize energy systems, and create sustainable impact. My journey has been one of continuous learning—from contributing to India's COVID-19 Dashboard used by millions, to winning TechCrunch Disrupt 2025, to mentoring the next generation of data scientists and AI engineers.

What drives me is the belief that technology should serve humanity. Whether it's building AI systems that improve student experiences, creating tools for mental health support, or optimizing renewable energy solutions, I'm committed to using data and AI to solve real-world problems that matter.

This multidisciplinary path—spanning data analysis, AI engineering, product management, and leadership—has shaped me into someone who doesn't just see what data is, but imagines what it could become.`,
        image: journey
    },
    {
        id: 3,
        title: 'What I Do',
        content: `I currently serve in multiple leadership roles, combining strategic vision with hands-on technical execution to drive innovation across industries.

Head of Operations & Strategic Programs Lead at Glīd
I architect and supervise EZRA-1SIX, Glīd's proprietary AI orchestration platform that synchronizes road-to-rail logistics, autonomous mobility, and real-time intelligence. I lead grant strategy, secure funding and partnerships, and serve as a public representative at innovation summits.

Manager of Business Research & Analytics at Stored Power Technology
I spearheaded the company's Hydrogen Project, securing R&D partnerships and culminating in a $30M investment. I architect AI product roadmaps for Energy Management Systems, developing predictive models for equipment maintenance and solar energy optimization.

Artificial Intelligence Instructor at UC Riverside
I design and deliver graduate-level AI curriculum covering NLP, Supervised/Unsupervised Learning, and LLM-RAG architectures, achieving 100% student satisfaction. I mentor student teams through end-to-end AI application development.

Key Projects & Impact
- UCR Scheduling Assistant: Leading AI development to streamline student course selection
- AI Chatbot for Non-Binary Support: Empathetic counseling chatbot using advanced LLM fine-tuning
- Automated Sales Workflows: CRM integrations that significantly increased lead processing capacity
- Energy Grid Optimization: AI models optimizing renewable energy usage and reducing carbon footprints

My work spans strategic planning to technical implementation, always focused on creating practical, ethical, and impactful solutions.`,
        image: Do
    },
    {
        id: 4,
        title: 'Values & Approach',
        content: `I believe the best solutions lie at the crossroads of rigor and empathy. Whether it's advising businesses or mentoring peers, I strive to bring:

- Analytical depth
- Human-centered design
- Technological innovation
- Collaborative spirit
- Ethical AI practices
- Continuous learning mindset
- Impact-focused solutions
- Strategic thinking approach
- Mentorship and growth
- Problem-solving excellence`,
        image: Value
    },
    {
        id: 5,
        title: 'Outside of Work',
        content: `When I'm not immersed in models or dashboards, you'll likely find me:
- Strumming my guitar
- Deep into a video game strategy
- On the field playing soccer
- Educating students through private sessions, helping them understand complex concepts and clear their doubts

These activities help me stay balanced, creative, and constantly learning. Teaching in private sessions allows me to make a meaningful impact by providing personalized guidance and support to students.`,
        image: img1
    },
];

function InfoCard({ title, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-gradient-to-r from-white to-white p-8 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-slate-200 hover:border-transparent"
        >
            <h3 className="text-xl font-bold text-black group-hover:text-black transition-colors duration-300">
                {title}
            </h3>
            <div className="mt-4 w-12 h-1 bg-slate-900 group-hover:bg-white transition-colors duration-300 rounded-full"></div>
        </div>
    );
}

const AboutMe = () => {
    const [selected, setSelected] = useState(null);
    const mainContent = data[0];
    const cardData = data.slice(1);

    return (
        <div className="bg-gradient-to-b from-white to-white min-h-screen">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                        About Me
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Passionate about transforming data into insights and building AI solutions that make a difference
                    </p>
                </div> */}

                {/* Main Content Section */}
                <div className="bg-black rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-slate-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {mainContent.title}
                            </h2>
                            <p className="text-lg text-white leading-relaxed">
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