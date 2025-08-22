import React, { useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, GraduationCap, Zap, Database, Code, Shield, BookOpen, Users, Heart, Car, Smartphone, BarChart3, Building, Book } from 'lucide-react';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 'stored-power',
      company: 'STORED POWER TECHNOLOGY INC',
      type: 'Full-time · 6 mos',
      location: 'On-site',
      positions: [
        {
          id: 'manager',
          title: 'Manager - Business Research & Analytics',
          duration: 'May 2025 - Present · 4 mos',
          location: 'California, United States',
          description: [
            'Spearheaded the company\'s Hydrogen Project from concept to execution, securing a formal R&D partnership with UCR, crucial Letters of Support from state and local government, and culminating in a $30M investment.',
            'Architected the AI product roadmap for the in-house Energy Management System (EMS), developing predictive models for equipment maintenance and solar energy storage optimization to maximize grid efficiency.',
            'Drove the creation of an AI-powered model to predict energy usage across California, identifying optimal grid nodes for curtailed electricity to be used in green hydrogen production.',
            'Directed a comprehensive competitor analysis initiative that delivered actionable market intelligence, directly contributing to an increased sales win rate and enhancing the company\'s overall market valuation.'
          ],
          icon: <Zap className="w-5 h-5" />,
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600'
        },
        {
          id: 'business-analyst',
          title: 'Business Analyst',
          duration: 'Mar 2025 - Jul 2025 · 5 mos',
          location: 'Riverside, California, United States',
          description: [
            'Engineered and deployed an automated sales workflow using CRM APIs, significantly increasing lead processing capacity and drastically reducing first-call response times for prospective clients.',
            'Developed a machine learning recommendation model that improved lead-to-meeting conversion rates by automatically qualifying high-potential leads and flagging low-quality prospects based on user data.',
            'Championed the technical integration of IBM WatsonX with the company\'s core platform, enabling real-time energy grid monitoring and enhancing analytical capabilities for enterprise clients.'
          ],
          icon: <BarChart3 className="w-5 h-5" />,
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600'
        }
      ]
    },
    {
      id: 'ucr',
      company: 'University of California, Riverside',
      type: 'Part-time · 7 mos',
      location: 'Riverside, California, United States',
      positions: [
        {
          id: 'ai-instructor',
          title: 'Artificial Intelligence Instructor',
          duration: 'Aug 2025 - Present · 1 mo',
          location: 'California, United States · On-site',
          description: [
            'Designed and delivered a graduate-level curriculum on advanced AI, covering Natural Language Processing (NLP), Supervised/Unsupervised Learning, and LLM-RAG architectures, achieving a 100% student satisfaction rating.',
            'Mentored a student team through the end-to-end development of a "Smart Gym Posture-Correction Application," guiding them from concept to a functional prototype using computer vision and machine learning.',
            'Guided an international student cohort in successfully completing all capstone project objectives, fostering practical AI skills and preparing the next generation of talent for careers in the technology sector.'
          ],
          icon: <Code className="w-5 h-5" />,
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600'
        },
        {
          id: 'grading-assistant',
          title: 'Grading Assistant',
          duration: 'Sep 2024 - Dec 2024 · 4 mos',
          location: 'Remote',
          description: [
            'Evaluated assignments, projects, and exams for 50+ students, providing timely feedback on data visualization, statistical analysis, and predictive modeling.',
            'Assisted in maintaining grading accuracy and fairness, aligning evaluations with course objectives and learning outcomes.',
            'Supported students by clarifying course material and addressing questions related to business analytics concepts, fostering deeper understanding.'
          ],
          icon: <GraduationCap className="w-5 h-5" />,
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600'
        },
        {
          id: 'peer-mentor',
          title: 'Peer Mentor',
          duration: 'Jun 2024 - Dec 2024 · 7 mos',
          location: 'Hybrid',
          description: [
            'Conducted orientation programs for incoming graduate students, facilitating a seamless transition to academic and campus life.',
            'Delivered tailored workshops on learning strategies, time management, and technical tools to support students from diverse backgrounds.',
            'Provided personalized mentorship to students, guiding them on academic challenges, career planning, and resource utilization.'
          ],
          icon: <Users className="w-5 h-5" />,
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600'
        }
      ]
    },
    {
      id: 'inpower',
      company: 'We Are InPower',
      type: 'Internship · 3 mos',
      location: 'California, United States · Remote',
      positions: [
        {
          id: 'gen-ai-intern',
          title: 'Data Science Intern (Generative AI)',
          duration: 'Apr 2024 - Jun 2024 · 3 mos',
          location: 'California, United States · Remote',
          description: [
            'Spearheaded the creation of an innovative AI chatbot to support non-binary individuals. Leveraging advanced Large Language Model (LLM) fine-tuning, developed a counseling chatbot capable of empathetic and human-like interactions.',
            'Managed end-to-end project development, including design, implementation, and continuous improvement.',
            'Focused on inclusive and empathetic communication to ensure effective and sensitive interactions.'
          ],
          skills: ['API', 'Python', 'Data Analysis', 'Large Language Models (LLM)', 'Data Mining', 'SDLC', 'Requirements Gathering', 'Workflow Automation', 'Database Design', 'Product Development'],
          icon: <Code className="w-5 h-5" />,
          iconBg: 'bg-pink-100',
          iconColor: 'text-pink-600'
        }
      ]
    },
    {
      id: 'isync',
      company: 'iSYNC Technologies',
      type: 'Internship · 2 mos',
      location: 'California, United States · Remote',
      positions: [
        {
          id: 'data-science-intern',
          title: 'Data Science Intern',
          duration: 'Apr 2024 - May 2024 · 2 mos',
          location: 'California, United States · Remote',
          description: [
            'Integrated SAP ERP S4Hana with Python, developing methodologies for AI-generated reports using Gemini-Pro LLM and Hugging-Face API.',
            'Analyzed critical financial and controlling modules to automate reporting and data inflow, enhancing financial transactions and internal cost management.'
          ],
          skills: ['API', 'Data Analysis', 'SDLC', 'Root Cause Problem Solving'],
          icon: <Database className="w-5 h-5" />,
          iconBg: 'bg-orange-100',
          iconColor: 'text-orange-600'
        }
      ]
    },
    {
      id: 'uber',
      company: 'Uber',
      type: 'Full-time · 11 mos',
      location: 'Hyderabad, Telangana, India · Hybrid',
      positions: [
        {
          id: 'senior-data-analyst',
          title: 'Senior Data Analyst',
          duration: 'Aug 2022 - Jun 2023 · 11 mos',
          location: 'Hyderabad, Telangana, India · Hybrid',
          description: [
            'Specialised in optimising data processes and delivering actionable insights through advanced analytics and sophisticated visualisations. My role involved enhancing operational efficiency, automating reporting systems, and conducting deep dive analyses to support strategic decision-making.',
            'Conducted deep dive analyses on top-ups, writing highly optimised and complex SQL queries for detailed analysis, reporting, and dashboard creation to support strategic decisions.',
            'Developed dashboards using GDS and Tableau, automating reports and visualisations with Python to improve data accessibility.'
          ],
          skills: ['API', 'Data Analysis', 'Financial Analysis', 'SDLC', 'Tableau', 'Requirements Gathering', 'Workflow Automation', 'Root Cause Problem Solving', 'Data Strategies', 'Business Intelligence (BI)'],
          icon: <Car className="w-5 h-5" />,
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600'
        }
      ]
    },
    {
      id: 'leo1',
      company: 'LEO1',
      type: 'Full-time · 2 yrs 7 mos',
      location: 'Hyderabad Area, India',
      positions: [
        {
          id: 'data-analyst-leo',
          title: 'Data Analyst',
          duration: 'Feb 2020 - Aug 2022 · 2 yrs 7 mos',
          location: 'Hyderabad Area, India',
          description: [
            'As a Data Analyst and Backend Developer at Financepeer, I focused on developing advanced data visualization tools and optimizing backend processes to improve operational efficiency and reporting capabilities.',
            'Developed software for data visualization, building over 100 automated dashboards with filters and parameters to enhance data reporting efficiency.',
            'Designed and implemented Lender Management System Integrations and OCR projects using Django & React-JS, improving processing performance through database tuning.',
            'Created algorithmic logics for efficient money handling, automating back-office processing, and significantly reducing manual labor and time.'
          ],
          skills: ['API', 'Agile Methodologies', 'Data Analysis', 'Financial Analysis', 'SDLC', 'Tableau', 'Stored Procedures', 'Requirements Gathering', 'Workflow Automation', 'Root Cause Problem Solving', 'Business Intelligence (BI)'],
          icon: <Database className="w-5 h-5" />,
          iconBg: 'bg-indigo-100',
          iconColor: 'text-indigo-600'
        }
      ]
    },
    {
      id: 'vodafone',
      company: 'Vodafone Business',
      type: 'Full-time · 7 mos',
      location: 'Pune',
      positions: [
        {
          id: 'technical-analyst',
          title: 'Technical Analyst',
          duration: 'Aug 2019 - Feb 2020 · 7 mos',
          location: 'Pune',
          description: [
            'Designed and implemented redundancy routing systems for first-level support, improving network reliability.',
            'Collaborated with clients to optimize fixed-line network designs, enhancing network efficiency and client satisfaction.'
          ],
          icon: <Smartphone className="w-5 h-5" />,
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600'
        }
      ]
    },
    {
      id: 'birla',
      company: 'Aditya Birla Sun Life Insurance',
      type: 'Contract · 3 mos',
      location: 'Hyderabad, Telangana, India',
      positions: [
        {
          id: 'support-exec',
          title: 'Support Executive',
          duration: 'Mar 2019 - May 2019 · 3 mos',
          location: 'Hyderabad, Telangana, India',
          description: [
            'Supported the back-end operations team by designing and writing scripts to fasten the process of insurance application processing.',
            'Collaborated on the strategic development of Application timing, processing and optimisation.'
          ],
          icon: <Shield className="w-5 h-5" />,
          iconBg: 'bg-teal-100',
          iconColor: 'text-teal-600'
        }
      ]
    },
    {
      id: 'newton',
      company: 'Newton School',
      type: 'Freelance · 2 yrs 2 mos',
      location: 'Hyderabad, Telangana, India · Remote',
      positions: [
        {
          id: 'education-mentor',
          title: 'Education Mentor',
          duration: 'Aug 2021 - Sep 2023 · 2 yrs 2 mos',
          location: 'Hyderabad, Telangana, India · Remote',
          description: [
            'Mentor for Data Science and Analytics certification. Responsible for mentoring 15+ students on all the doubts related to python, SQL, Excel, Data Visualisation tools, ML engineering and intermediate mathematics'
          ],
          skills: ['Data Analysis'],
          icon: <Book className="w-5 h-5" />,
          iconBg: 'bg-amber-100',
          iconColor: 'text-amber-600'
        }
      ]
    }
  ];

  const volunteering = [
    {
      id: 'iste',
      company: 'Indian Society for Technical Education',
      type: 'Volunteer · 10 mos',
      location: 'VIT University',
      positions: [
        {
          id: 'core-member-iste',
          title: 'Core Committee Member',
          duration: 'Nov 2015 - Aug 2016 · 10 mos',
          location: 'VIT University',
          description: [
            'Work here involved strategy development for technical college events.',
            'Also included a lot of managerial work.',
            'It was University club/chapter.'
          ],
          icon: <Users className="w-5 h-5" />,
          iconBg: 'bg-indigo-100',
          iconColor: 'text-indigo-600'
        }
      ]
    },
    {
      id: 'sae',
      company: 'Society of Automotive Engineers (VIT, Vellore)',
      type: 'Volunteer · 9 mos',
      location: 'VIT Vellore',
      positions: [
        {
          id: 'core-member-sae',
          title: 'Core Committee Member',
          duration: 'Sep 2015 - May 2016 · 9 mos',
          location: 'VIT Vellore',
          description: [
            'Technical work related to the automotive industry.',
            'Involved designing college technical events and managing those events.'
          ],
          icon: <Car className="w-5 h-5" />,
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600'
        }
      ]
    },
    {
      id: 'connectedreams',
      company: 'Connectedreams.com',
      type: 'Freelance · 6 mos',
      location: 'New York, New York',
      positions: [
        {
          id: 'research-analyst',
          title: 'Research Analyst and Content Developer',
          duration: 'Sep 2016 - Feb 2017 · 6 mos',
          location: 'New York, New York',
          description: [
            'Conducted research and analysis for various projects',
            'Developed content for web platforms and digital marketing',
            'Contributed to data-driven content strategies'
          ],
          icon: <Heart className="w-5 h-5" />,
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600'
        }
      ]
    }
  ];

  const allSections = [...experiences, ...volunteering];

  const ExperienceSection = ({ company }) => (
    <div key={company.id} className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
      {/* Company Header */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">{company.company}</h2>
        <div className="flex flex-wrap items-center mt-2 text-gray-600">
          <span className="flex items-center mr-4">
            <Briefcase className="w-4 h-4 mr-1" />
            {company.type}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {company.location}
          </span>
        </div>
      </div>

      {/* Positions */}
      <div className="divide-y divide-gray-100">
        {company.positions.map((position, positionIndex) => {
          const isExpanded = expandedItems[position.id];
          const showSeeMore = position.description.length > 2 || (position.skills && position.skills.length > 0);
          
          return (
            <div key={position.id} className="p-6">
              <div className="flex">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center mr-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${position.iconBg} ${position.iconColor}`}>
                    {position.icon}
                  </div>
                  {positionIndex < company.positions.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                  )}
                </div>

                {/* Position content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                  
                  <div className="flex flex-wrap items-center mt-2 text-gray-600 mb-4">
                    <span className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {position.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="text-gray-700 space-y-2 mb-4">
                    {position.description.slice(0, isExpanded ? position.description.length : 2).map((item, index) => (
                      <li key={index} className="flex">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  {isExpanded && position.skills && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* See more/less button */}
                  {showSeeMore && (
                    <button 
                      onClick={() => toggleExpand(position.id)}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          See more
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Experience</h1>
          <p className="text-gray-600">A comprehensive timeline of my career journey across various roles and organizations</p>
        </div>

        <div className="space-y-6">
          {allSections.map(company => (
            <ExperienceSection key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;