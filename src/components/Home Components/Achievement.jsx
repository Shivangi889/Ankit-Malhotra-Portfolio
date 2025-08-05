import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Award, GraduationCap, Club, Star } from 'lucide-react';
import Sideimage from "../../assets/Achievements_ My Special Journey - visual selection.png";

const Achievement = () => {
  // Function to highlight keywords in descriptions
  const highlightKeywords = (text) => {
    const keywords = [
      // Problem-solving related
      'analytical frameworks', 'debugging', 'system flows', 'sustainable outcomes', 'product performance',

      // Leadership related
      'led with vision', 'expert-led workshops', 'hackathons', 'community-driven',
      'collaborative culture', 'innovative tech solutions', 'team-building skills',

      // Technical skills
      'SQL Masterclass', 'development concepts',
      'career-focused skills', 'technical communication',

      // Achievements
      'interdisciplinary strengths', 'consistent performance',


      // Academic
      'stellar GPA of 4.0', 'AI seminars', 'judging panels',
      'data and AI domains'
    ];

    let highlightedText = text;
    keywords.forEach(keyword => {
      highlightedText = highlightedText.replace(
        new RegExp(keyword, 'gi'),
        match => `<span class="font-bold text-gray-900 bg-yellow-100 px-1">${match}</span>`
      );
    });
    return { __html: highlightedText };
  };

  const specialItems = [
    {
      icon: <Award className="w-12 h-12 text-purple-500" />,
      title: "Critical Problem Solver",
      description: "Consistently recognized for resolving complex challenges by fusing structured analytical frameworks with out-of-the-box thinking. I thrive under pressure, turning ambiguity into clarity and delivering high-impact, data-driven solutions. Whether debugging a codebase or designing system flows, I bring a sharp focus on root causes, efficiency, and sustainable outcomes that elevate both product and team performance.",
      tags: ["Critical Thinking", "Problem-Solving"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: "Programming Club President",
      description: "As president of the programming club, I led with vision and enthusiasm—curating expert-led workshops, hackathons, and community-driven code sprints. My leadership fostered a collaborative culture that empowered students to experiment, build, and share innovative tech solutions, while also sharpening their real-world software engineering and team-building skills.",
      tags: ["Leadership", "Organization"]
    },
    {
      icon: <Club className="w-12 h-12 text-emerald-500" />,
      title: "Workshop Organizer",
      description: "Organized and facilitated impactful workshops like 'Build Your Own Portfolio from Scratch' and 'SQL Masterclass: Things Beyond SQL'. These sessions were designed to demystify core development concepts and provide practical, career-focused skills. The initiatives drew strong engagement and helped many peers launch portfolios, learn advanced querying, and gain confidence in technical communication.",
      tags: ["Teaching", "Mentoring"]
    },
    {
      icon: <Star className="w-12 h-12 text-amber-500" />,
      title: "Award Recognitions",
      description: "Proud recipient of the Beta Gamma Sigma (BGS) honor society award for academic excellence in business, alongside the Times of India Student of the Year accolade. These awards are testaments to my dedication, interdisciplinary strengths, and consistent performance across academic and leadership endeavors, inspiring me to continuously strive for excellence.",
      tags: ["Excellence", "Recognition"]
    },
    {
      icon: <Award className="w-12 h-12 text-indigo-500" />,
      title: "Academic Achievement",
      description: "Achieved a stellar GPA of 4.0, securing prestigious scholarships and frequent invitations to AI seminars and judging panels. My academic journey reflects deep commitment, intellectual curiosity, and consistent pursuit of excellence—balancing rigorous coursework with active participation in research discussions, peer mentoring, and thought leadership in data and AI domains.",
      tags: ["Academic", "Accomplishments"]
    }
  ];

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % specialItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [specialItems.length]);

  const nextItem = () => setCurrentItem((prev) => (prev + 1) % specialItems.length);
  const prevItem = () => setCurrentItem((prev) => (prev - 1 + specialItems.length) % specialItems.length);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-8 bg-white">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src={Sideimage}
          alt="Special"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h3 className="text-sm uppercase font-bold tracking-wider text-gray-700 mb-2">
          ACHIEVEMENTS
        </h3>
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          MY SPECIAL JOURNEY
        </h1>

        {/* Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8 transition-all duration-500">
          <div className="mb-4 flex gap-2">
            {specialItems[currentItem].icon}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {specialItems[currentItem].title}
            </h2>
          </div>

          <p
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={highlightKeywords(specialItems[currentItem].description)}
          />

          <div className="flex flex-wrap gap-2">
            {specialItems[currentItem].tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevItem}
            className="bg-white hover:bg-gray-800 hover:text-white text-gray-800 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextItem}
            className="bg-white hover:bg-gray-800 hover:text-white text-gray-800 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievement;