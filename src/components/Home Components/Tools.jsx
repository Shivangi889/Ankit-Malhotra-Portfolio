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
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
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
          name: "Tools",
          image: [
            "data:image/png;base64,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", // Looker
            "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png", // Tableau
            "https://www.r-project.org/logo/Rlogo.svg" // R (ggplot2)
          ]
        }
      ]
    },
    {
      id: 3,
      category: "Web Technologies",
      items: [
        {
          name: "Technologies",
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
          name: "Platforms",
          image: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", // AWS
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", // GCP
            "https://images.indianexpress.com/2024/04/vertex-ai-featured.jpg?w=640" // Vertex AI
          ]
        }
      ]
    },
    {
      id: 5,
      category: "Project Management",
      items: [
        {
          name: "Tools",
          image: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
          ]
        }
      ]
    },
    {
      id: 6,
      category: "Machine Learning Libraries",
      items: [
        {
          name: "Libraries",
          image: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
            "https://avatars.githubusercontent.com/u/64029103?s=280&v=4" // LangChain
          ]
        }
      ]
    },
    {
      id: 7,
      category: "Data Analysis Libraries",
      items: [
        {
          name: "Libraries",
          image: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
            "https://www.r-project.org/logo/Rlogo.svg" // R (caret)
          ]
        }
      ]
    },
    {
      id: 8,
      category: "Other Tools",
      items: [
        {
          name: "Tools",
          image: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Alteryx_logo.svg", // Alteryx
            "https://www.rensvandeschoot.com/wp-content/uploads/2019/01/spss-1-logo-png-transparent.png", // SPSS
            "https://toppng.com/uploads/preview/ithub-logo-transparent-informatica-logo-115629974494d6anhaupe.png", // Informatica
            "https://www.logo.wine/a/logo/Snowflake_Inc./Snowflake_Inc.-Logo.wine.svg" // Snowflake
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
                  <span className="inline-block w-2 h-6 bg-black rounded mr-3"></span>
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
