import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const ToolsSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

const technologies = [
    {
        id: 1,
        category: "Programming Languages",
        items: [
            {
                name: "Languages",
                image: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                    "https://www.r-project.org/logo/Rlogo.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                ]
            }
        ]
    },
    {
        id: 2,
        category: "Data Visualization",
        items: [
            {
                name: "Visualization Tools",
                image: [
                    "https://cdn.worldvectorlogo.com/logos/looker.svg",
                    "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
                    "https://www.r-project.org/logo/Rlogo.svg", // ggplot2 is part of R
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
                ]
            }
        ]
    },
    {
        id: 3,
        category: "Web Technologies",
        items: [
            {
                name: "Web Development",
                image: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                ]
            }
        ]
    },
    {
        id: 4,
        category: "Cloud Platforms",
        items: [
            {
                name: "Cloud Services",
                image: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                    "https://cloud.google.com/vertex-ai/images/vertex-ai-logo.svg" // Vertex AI
                ]
            }
        ]
    },
    {
        id: 5,
        category: "Project Management",
        items: [
            {
                name: "Management Tools",
                image: [
                    "https://cdn.worldvectorlogo.com/logos/trello.svg",
                    "https://cdn.worldvectorlogo.com/logos/jira-1.svg"
                ]
            }
        ]
    },
    {
        id: 6,
        category: "Machine Learning",
        items: [
            {
                name: "ML Libraries",
                image: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg",
                    "https://langchain.com/img/langchain-logo.svg" // LangChain logo
                ]
            }
        ]
    },
    {
        id: 7,
        category: "Data Analysis",
        items: [
            {
                name: "Analysis Libraries",
                image: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
                    "https://www.ibm.com/products/spss-statistics/resources/img/spss-statistics-social-share.png" // SPSS
                ]
            }
        ]
    },
    {
        id: 8,
        category: "Other Tools",
        items: [
            {
                name: "Additional Tools",
                image: [
                    "https://www.alteryx.com/sites/default/files/styles/max_650x650/public/2021-07/alteryx-logo-color-1.png", // Alteryx
                    "https://www.informatica.com/content/dam/informatica-com/en/images/meta/informatica-logo_1200x630.png", // Informatica
                    "https://www.snowflake.com/wp-content/themes/snowflake/assets/img/snowflake-logo-blue.svg", // Snowflake
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" // Git
                ]
            }
        ]
    }
];

  const toggleCategory = (id) => {
    setActiveCategoryId(prevId => prevId === id ? null : id);
  };

  const filteredTechnologies = technologies
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0);

  return (
    <section id="tools" className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 shadow-lg animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif mb-6">
            Tools and Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            My toolkit blends analytical rigor with creative execution, enabling me to navigate every phase of product and marketing development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className={`rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 overflow-hidden
                ${activeCategoryId === tech.id ? 'shadow-lg border-slate-300' : 'hover:shadow-md'}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 cursor-pointer focus:outline-none"
                onClick={() => toggleCategory(tech.id)}
                aria-expanded={activeCategoryId === tech.id}
                aria-controls={`category-${tech.id}`}
              >
                <h3 className="text-xl font-semibold flex items-center text-left">
                  <span className="inline-block w-2 h-6 bg-[#fff27d] rounded mr-3"></span>
                  {tech.category}
                </h3>
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 transition">
                  {activeCategoryId === tech.id ?
                    <ChevronUp size={20} className="text-slate-700" /> :
                    <ChevronDown size={20} className="text-slate-700" />
                  }
                </div>
              </button>

              {activeCategoryId === tech.id && (
                <div id={`category-${tech.id}`} className="px-6 pb-6 pt-2 animate-fadeIn">
                  {tech.items.map((item, idx) => (
                    <div key={`${tech.id}-${idx}`} className="mb-6 last:mb-0">
                      <h4 className="text-lg font-medium text-slate-700 mb-4">{item.name}</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {item.image.map((imgSrc, imgIdx) => (
                          <div
                            key={`${tech.id}-${idx}-${imgIdx}`}
                            className="aspect-square bg-white p-3 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                          >
                            <img
                              src={imgSrc}
                              alt=""
                              className="w-full h-full object-contain max-h-12 transition-transform duration-300 hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
