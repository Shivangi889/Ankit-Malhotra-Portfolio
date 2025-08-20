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
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../../Data/HeroSectionData';

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

function ProjectDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const projectId = Number(id);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/project')}
            className="bg-white text-[#000] border hover:bg-black hover:text-white px-4 py-2 rounded-lg"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }
  const IconComponent = project.icon;

  const getTechIcon = (tech) => {
    const IconComponent = techIcons[tech] || Code;
    return IconComponent;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={()=>navigate('/project')}
            className="flex items-center gap-2 text-white hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
          <div className="flex items-start gap-6">
            <div className="bg-white p-4 rounded-xl">
              <IconComponent className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-white">{project.title}</h1>
              <p className="text-white text-lg mb-4">{project.role}</p>
              <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <section>
              <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                <img
                  src={project.image}
                  alt={`${project.title} dashboard`}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm bg-black/50 backdrop-blur-sm rounded px-3 py-1 inline-block">
                    Project Dashboard Preview
                  </p>
                </div>
              </div>
            </section>

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Project Overview</h2>
              <p className="text-black leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </section>

            {/* Key Achievements */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Key Achievements</h2>
              <div className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black">{achievement}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Project Impact</h2>
              <div className="bg-black border border-gray-800 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <section>
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="space-y-3">
                {project.technologies.map((tech) => {
                  const TechIcon = getTechIcon(tech);
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-3 bg-black border border-gray-800 rounded-lg p-3 hover:border-gray-700 transition-colors"
                    >
                      <TechIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Project Preview */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-2">Project Preview</h4>
              <div className="relative rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

            {/* Actions */}
            {/* <section>
              <h3 className="text-xl font-bold mb-4">Explore More</h3>
              <div className="space-y-3">
                <button className="w-full bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </button>
                <button className="w-full border border-gray-700 hover:border-gray-600 text-black px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </section> */}

            {/* Project Stats */}
            <section>
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="bg-black border border-gray-800 rounded-xl p-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technologies</span>
                  <span className="text-white">{project.technologies.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role</span>
                  <span className="text-white text-sm">{project.role.split(' – ')[0]}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectDetails