import React from 'react';
import { ChartBar, Terminal, PieChart, Calculator, Lightbulb, TrendingUp } from 'lucide-react';
import AreasWorkInterest from './AreasWorkInterest';

const expertiseData = [
  {
    title: "Data Science & Analytics",
    summary: "Transforming raw data into actionable insights",
    description: "Turning raw data into actionable insights to inform strategic decisions. Using advanced analytics techniques to extract meaning from complex datasets and drive business value.",
    icon: <ChartBar size={24} />,
  },
  {
    title: "AI & ML Engineering",
    summary: "Building intelligent systems for real problems",
    description: "Developing intelligent systems to solve real-world problems, from chatbots to decision-support tools. Creating models that learn from data and improve over time.",
    icon: <Terminal size={24} />,
  },
  {
    title: "Product / Feature Analysis",
    summary: "Optimizing products through data-driven decisions",
    description: "Evaluating and optimizing product performance through analytics. Using quantitative and qualitative methods to understand user behavior and improve experiences.",
    icon: <PieChart size={24} />,
  },
  {
    title: "Statistics & Decision Science",
    summary: "Applied mathematics for better decision-making",
    description: "Applying rigorous quantitative methods to drive better decision-making. Using statistical models and probability theory to make predictions and quantify uncertainty.",
    icon: <Calculator size={24} />,
  },
  {
    title: "Training and Mentorship",
    summary: "Empowering others in data science and AI",
    description: "Sharing knowledge and empowering others to excel in data science and AI. Creating learning materials, conducting workshops, and providing one-on-one guidance.",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Business Growth & Analytics",
    summary: "Data-driven strategies for business expansion",
    description: "Leveraging data to identify growth opportunities and craft strategies. Analyzing market trends, customer behavior, and competitive landscapes to inform business decisions.",
    icon: <TrendingUp size={24} />,
  },
];

const ExpertiseCard = ({ title, summary, description, icon, accentIndex }) => {
  const colors = [
    'bg-blue-100 text-blue-600',
    'bg-purple-100 text-purple-600',
    'bg-green-100 text-green-600',
    'bg-yellow-100 text-yellow-600',
    'bg-red-100 text-red-600',
    'bg-indigo-100 text-indigo-600',
  ];
  const colorClass = colors[accentIndex % colors.length];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass} mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <h4 className="text-md font-semibold text-gray-600 mb-3">{summary}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ExpertiseGrid = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <AreasWorkInterest
              key={index}
              title={item.title}
              summary={item.summary}
              description={item.description}
              accentIndex={index}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGrid;