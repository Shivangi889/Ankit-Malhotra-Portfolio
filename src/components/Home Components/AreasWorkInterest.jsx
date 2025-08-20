import { useState } from "react";
import { Database, Brain, Code, BarChart, Briefcase, TrendingUp, DollarSign } from "lucide-react";
import Data from "../../assets/Download Data word lettering illustration for free.jpeg";
import Ai from "../../assets/The Linux Foundation has reached an agreement with….jpeg";
import Product from "../../assets/イノベーションを生み出すブレインストーミングのテクニックについて _ ASOBOAD.jpeg";
import Statistics from "../../assets/Enhancing Advantage+ Campaigns with Data.jpeg";
import Mentor from "../../assets/Mentorship in Addiction Recovery _ AKUA Mind Body.jpeg";
import Business from "../../assets/Interpretación de gráficos y tablas financieras en inglés.jpeg";
import Financial from "../../assets/When it comes to establishing a career in Finance….jpeg";

const AreasWorkInterest = () => {
  const [activeTab, setActiveTab] = useState("data-science");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const areasOfExpertise = [
    {
      id: "data-science",
      title: "Data Science & Analytics",
      description: "Transforming complex, unstructured data into actionable insights through data cleaning, exploration, modeling, and visualization. Enables organizations to make informed strategic decisions based on data trends, predictive models, and performance metrics.",
      icon: <Database size={24} />,
      color: "blue-500",
      imageUrl: Data,
      tags: [
        "Data Mining",
        "Predictive Modeling",
        "Data Visualization",
        "ETL Pipelines"
      ]
    },
    {
      id: "ai-ml",
      title: "AI & ML Engineering",
      description: "Building intelligent applications that learn from data and adapt over time. Includes developing chatbots, recommendation engines, computer vision, and predictive analytics using algorithms that drive automation, efficiency, and innovation in business.",
      icon: <Brain size={24} />,
      color: "purple-500",
      imageUrl: Ai,
      tags: [
        "Neural Networks",
        "NLP",
        "Computer Vision",
        "Recommendation Systems"
      ]
    },
    {
      id: "product-analysis",
      title: "Product / Feature Analysis",
      description: "Using data to evaluate product features, user behavior, and market trends. Helps businesses refine offerings, identify areas of improvement, and align development with user needs through A/B testing, funnel analysis, and usage metrics.",
      icon: <Code size={24} />,
      color: "emerald-500",
      imageUrl: Product,
      tags: [
        "A/B Testing",
        "User Behavior",
        "Feature Metrics",
        "Conversion Rates"
      ]
    },
    {
      id: "statistics",
      title: "Statistics & Decision Science",
      description: "Employing statistical models and probability theory to interpret data patterns and uncertainty. Supports evidence-based decisions through hypothesis testing, regression, and optimization techniques to solve complex business problems.",
      icon: <BarChart size={24} />,
      color: "orange-500",
      imageUrl: Statistics,
      tags: [
        "Hypothesis Testing",
        "Regression Analysis",
        "Bayesian Methods",
        "Experimental Design"
      ]
    },
    {
      id: "training",
      title: "Training and Mentorship",
      description: "Providing hands-on guidance, structured learning, and practical mentorship in data science and AI. Focused on upskilling individuals and teams, fostering collaboration, and nurturing talent to bridge the gap between theory and real-world applications.",
      icon: <Briefcase size={24} />,
      color: "red-500",
      imageUrl: Mentor,
      tags: [
        "Workshops",
        "Technical Coaching",
        "Curriculum Design",
        "Team Upskilling"
      ]
    },
    {
      id: "business-growth",
      title: "Business Growth Analytics",
      description: "Using KPIs, customer insights, and market trends to identify growth drivers. Empowers leadership with dashboards, cohort analysis, and forecasts that shape marketing, sales, and operational strategies to maximize profitability and scalability.",
      icon: <TrendingUp size={24} />,
      color: "indigo-500",
      imageUrl: Business,
      tags: [
        "Market Trends",
        "Customer Segmentation",
        "Revenue Optimization",
        "Competitive Analysis"
      ]
    },
    {
      id: "financial-analytics",
      title: "Financial Analytics",
      description: "Analyzing financial statements, trends, and ratios to assess company health. Supports budgeting, forecasting, and investment decisions by delivering accurate models that optimize cash flow, profitability, and risk management.",
      color: "green-500",
      icon: <DollarSign size={24} />,
      imageUrl: Financial,
      tags: [
        "Risk Assessment",
        "Investment Analysis",
        "Financial Modeling",
        "Cost Optimization"
      ]
    },
  ];

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const activeArea = areasOfExpertise.find(area => area.id === activeTab) || areasOfExpertise[0];

  // Color mapping for dynamic classes
  const colorMap = {
    "blue-500": "bg-blue-500 text-blue-500 bg-blue-500/10",
    "purple-500": "bg-purple-500 text-purple-500 bg-purple-500/10",
    "emerald-500": "bg-emerald-500 text-emerald-500 bg-emerald-500/10",
    "orange-500": "bg-orange-500 text-orange-500 bg-orange-500/10",
    "red-500": "bg-red-500 text-red-500 bg-red-500/10",
    "indigo-500": "bg-indigo-500 text-indigo-500 bg-indigo-500/10",
    "green-500": "bg-green-500 text-green-500 bg-green-500/10",
  };

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas of Work and Interest
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional expertise and personal interests span a wide range of disciplines, all united by a common thread – a passion for data and technology.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex overflow-x-auto bg-gray-50 px-2 border-b border-gray-200">
            {areasOfExpertise.map((area) => {
              const active = activeTab === area.id;
              const colorClass = colorMap[area.color].split(' ');
              return (
                <button
                  key={area.id}
                  onClick={() => handleTabChange(area.id)}
                  className={`flex items-center gap-2 px-4 py-4 whitespace-nowrap transition-colors relative ${active
                      ? `font-semibold ${colorClass[1]}`
                      : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  <span>{area.icon}</span>
                  <span>{area.title.split(' ')[0]}</span>
                  {active && (
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1/2 ${colorClass[0]} rounded-t`}
                    ></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={activeArea.imageUrl}
                  alt={activeArea.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorMap[activeArea.color].split(' ')[2]} ${colorMap[activeArea.color].split(' ')[1]} mr-4`}
                  >
                    {activeArea.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{activeArea.title}</h3>
                </div>

                <div className="h-px bg-gray-200 my-6"></div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeArea.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeArea.tags.map((tag) => {
                    const colorClass = colorMap[activeArea.color].split(' ');
                    return (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass[2]} ${colorClass[1]}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-black rounded-xl shadow-md p-8 max-w-4xl mx-auto text-center">
          <p className="text-xl italic text-gray-100">
            "Each of these areas represents my commitment to innovation and my belief in the transformative power of technology."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreasWorkInterest;