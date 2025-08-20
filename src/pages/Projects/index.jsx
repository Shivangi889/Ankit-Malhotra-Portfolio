import React, { useState } from 'react';
import {
  Brain,
  Bot,
  TrendingUp,
  Sun,
  Users,
  Github,
  ExternalLink,
  Code,
  Database,
  ChevronRight,
  Sparkles,
  Filter,
  ArrowLeft
} from 'lucide-react';

import { projects } from '../../Data/HeroSectionData'
import ProjectDetails from './ProjectDetails';
import { useNavigate } from 'react-router-dom';

const techIcons = {
  'Python': Code,
  'R': TrendingUp,
  'SQL': Database,
  'TensorFlow': Brain,
  'Vertex AI': Sparkles,
  'Gemma 3': Bot,
  'LangChain': Bot,
  'scikit-learn': Brain,
  'caret': TrendingUp,
  'Deep Learning': Brain,
  'Random Forest': TrendingUp,
  'Logistic Regression': TrendingUp,
  'Clustering Algorithms': Users,
  'Tableau': TrendingUp,
  'NLP': Bot,
  'CRM APIs': ExternalLink,
  'Weather APIs': Sun,
  'Close.io APIs': ExternalLink
};

const categories = ["All", "AI/ML", "Healthcare", "Business Intelligence", "FinTech", "Data Analysis", "Sustainability"];

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getTechIcon = (tech) => {
    const IconComponent = techIcons[tech] || Code;
    return IconComponent;
  };

  if (selectedProject) {
    return <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-15">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Data Into
              <span className="block text-black">
                Intelligent Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore my journey in AI, machine learning, and data science through innovative projects
              that solve real-world problems and create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-black border border-black rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-100">Projects Completed</div>
              </div>
              <div className="bg-black border border-black rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-100">Technologies Mastered</div>
              </div>
              <div className="bg-black border border-black rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-sm text-gray-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center mb-12">
          <div className="w-full max-w-4xl">
            <div className="bg-black border border-black rounded-full p-1 overflow-x-auto">
              <div className="flex items-center min-w-max">
                <Filter className="w-4 h-4 text-gray-400 mx-3" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${selectedCategory === category
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-black border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
              >
                {/* Header */}
                <div className="bg-white text-black p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-black p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{project.role}</p>
                </div>

                {/* Content */}
                <div className="p-6 bg-black flex-grow flex flex-col">
                  <div className="flex-grow">
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 mb-4">
                      <p className="text-gray-300 text-xs">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                        Impact: {project.impact}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const TechIcon = getTechIcon(tech);
                          return (
                            <div
                              key={tech}
                              className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-2 py-1 rounded-md text-xs font-medium text-gray-300 transition-colors"
                            >
                              <TechIcon className="w-3 h-3" />
                              <span>{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Fixed at bottom */}
                  <div className="mt-auto">
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.id);
                        }}
                        className="flex-1 bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 group/btn">
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-center">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-700 rounded-full px-4 py-2 mb-6">
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Open Source Contributor</span>
            </div>
            <h2 className="text-3xl text-white lg:text-5xl font-bold mb-6">
              Interested in exploring
              <span className="block text-white">
                more of my work?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Visit my GitHub portfolio for detailed code repositories, documentation,
              and comprehensive project breakdowns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group">
                <Github className="w-5 h-5" />
                <a href="https://github.com/MalhotraAnkit97">
                  <span>Visit GitHub Portfolio</span>
                </a>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
