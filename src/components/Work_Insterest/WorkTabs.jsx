import React, { useState } from "react";
import { Users, Target, BarChart2, BookOpen, Layers } from "lucide-react";
import Brand from "../../assets/Works/Brand.png";
import Leadership  from "../../assets/Works/Leadership.png";
import Market from "../../assets/Works/market.png";
import Analytic from "../../assets/Works/marketing-analytics.png";
import Project from "../../assets/Works/Project.png";
const WorkCard = ({ title, description, icon, image ,tag}) => {
  return (
    <div className="max-w-6xl border  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative sm:h-64 h-auto md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-[#fff27d] rounded-lg text-black">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 ml-3">{title}</h2>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tag.map((tag) => (
            <span
              key={tag}
              className ="px-3 py-1 text-l font-medium bg-[#fff27d] text-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState("customer-insights");

  const areasOfExpertise = [
    {
      id: "customer-insights",
      title: "Customer & Market Insights",
      description: "I'm deeply curious about people—what they need, how they think, and why they buy. I enjoy diving into qualitative interviews, surveys, and data analysis to explore everything from audience segmentation to sentiment trends.",
      icon: <Users className="w-5 h-5" />,
      imageUrl: Market,
      tag:["User Research", "Segmentation"," Consumer Behavior"," Sentiment Analysis"]
    },
    {
      id: "product-strategy",
      title: "Product Strategy & Go-to-Market",
      description: "I'm drawn to the process of building thoughtful, user-centered products. Defining MVPs, mapping roadmaps, and planning go-to-market strategies are areas where I love to contribute.",
      icon: <Target className="w-5 h-5" />,
      imageUrl: Project,
      tag:["MVP Definition","Product Roadmap","GTM Planning","Feature Prioritization"]
    },
    {
      id: "marketing-analytics",
      title: "Marketing Analytics & Experimentation",
      description: "Turning data into direction excites me. I enjoy analyzing campaign performance, running A/B tests, and using tools like SQL and Tableau to refine what works—and what doesn't.",
      icon: <BarChart2 className="w-5 h-5" />,
      imageUrl: Analytic,
      tag:[" A/B Testing","Campaign Metrics","SQL & Tableau","Performance Optimization"] 
    },
    {
      id: "brand-strategy",
      title: "Brand & Content Strategy",
      description: "I'm passionate about roles that involve messaging, storytelling, and brand positioning. Whether crafting decks, building narratives, or launching campaigns, I aim to make every word purposeful.",
      icon: <BookOpen className="w-5 h-5" />,
      imageUrl: Brand,
      tag:[" MarCom","Email Marketing","Brand Positioning"]
    },
    {
      id: "leadership-management",
      title: "Leadership & Program Management",
      description: "I find joy in leading teams and programs that bring people together. From managing $20K+ event budgets to growing a 35-member board, I thrive in environments where impact is shared and momentum is built collectively.",
      icon: <Layers className="w-5 h-5" />,
      imageUrl: Leadership,
      tag:["Team Leadership","Budget Oversight","Cross-functional Collaboration"]
    },
  ];

  const activeArea = areasOfExpertise.find((area) => area.id === activeTab) || areasOfExpertise[0];

  return (
    <div className="space-y-6">
      <div className="flex overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex space-x-1 mx-auto px-4">
          {areasOfExpertise.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === area.id
                  ? 'bg-[#fff27d] text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {area.icon}
              {area.title.split(" & ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="transition-opacity duration-300">
        <WorkCard
          title={activeArea.title}
          description={activeArea.description}
          icon={activeArea.icon}
          image={activeArea.imageUrl}
          tag={activeArea.tag}
        />
      </div>
    </div>
  );
};

export default WorkTabs;