import React from 'react';
import { 
  Building, 
  GraduationCap, 
  Car, 
  Smartphone, 
  Users, 
  Heart, 
  BookOpen, 
  Shield, 
  Briefcase, 
  MapPin, 
  Calendar,
  ExternalLink,
  Code,
  Database,
  BarChart3,
  Zap
} from 'lucide-react';

const fullTimeExperience = [
  {
    id: '1',
    company: 'University of California, Riverside',
    position: 'Artificial Intelligence Instructor',
    duration: 'Aug 2025 - Present • 1 mo',
    location: 'California, United States • On-site',
    type: 'Part-time',
    icon: <GraduationCap className="w-6 h-6" />,
    description: [
      'Teaching AI concepts and methodologies to university students',
      'Developing curriculum and course materials for AI courses',
      'Mentoring students in AI research projects and applications'
    ]
  },
  {
    id: '2',
    company: 'University of California, Riverside',
    position: 'Grading Assistant',
    duration: 'Sep 2024 - Dec 2024 • 4 mos',
    location: 'Remote',
    type: 'Part-time',
    icon: <GraduationCap className="w-6 h-6" />,
    description: [
      'Evaluated assignments, projects, and exams for 50+ students, providing timely feedback on data visualization, statistical analysis, and predictive modeling',
      'Assisted in maintaining grading accuracy and fairness, aligning evaluations with course objectives and learning outcomes',
      'Supported students by clarifying course material and addressing questions related to business analytics concepts'
    ]
  },
  {
    id: '3',
    company: 'University of California, Riverside',
    position: 'Peer Mentor',
    duration: 'Jun 2024 - Dec 2024 • 7 mos',
    location: 'Hybrid',
    type: 'Part-time',
    icon: <GraduationCap className="w-6 h-6" />,
    description: [
      'Conducted orientation programs for incoming graduate students, facilitating a seamless transition to academic and campus life',
      'Delivered tailored workshops on learning strategies, time management, and technical tools to support students from diverse backgrounds',
      'Provided personalized mentorship to students, guiding them on academic challenges, career planning, and resource utilization'
    ]
  },
  {
    id: '4',
    company: 'STORED POWER TECHNOLOGY INC',
    position: 'Manager - Business Research & Analytics',
    duration: 'May 2025 - Present • 4 mos',
    location: 'California, United States • On-site',
    type: 'Full-time',
    icon: <Zap className="w-6 h-6" />,
    description: [
      'Leading business research initiatives and analytics strategy for power technology solutions',
      'Managing cross-functional teams to drive data-driven decision making',
      'Developing strategic insights for business growth and market expansion'
    ]
  },
  {
    id: '5',
    company: 'STORED POWER TECHNOLOGY INC',
    position: 'Business Analyst',
    duration: 'Mar 2025 - Jul 2025 • 5 mos',
    location: 'Riverside, California, United States',
    type: 'Full-time',
    icon: <Zap className="w-6 h-6" />,
    description: [
      'Analyzed sales data using Python, SQL, and Tableau to drive revenue growth and optimize business strategies',
      'Collaborated with cross-functional teams to develop actionable insights for customer acquisition and retention',
      'Created dashboards and visualizations to communicate KPIs, sales forecasts, and market analysis to stakeholders'
    ]
  },
  {
    id: '6',
    company: 'Uber',
    position: 'Senior Data Analyst',
    duration: 'Aug 2022 - Jun 2023 • 11 mos',
    location: 'Hyderabad, Telangana, India • Hybrid',
    type: 'Full-time',
    icon: <Car className="w-6 h-6" />,
    description: [
      'Specialized in optimizing data processes and delivering actionable insights through advanced analytics and sophisticated visualizations',
      'Conducted deep dive analyses on top-ups, writing highly optimized and complex SQL queries for detailed analysis, reporting, and dashboard creation',
      'Developed dashboards using GDS and Tableau, automating reports and visualizations with Python to improve data accessibility'
    ],
    skills: ['API', 'Data Analysis', 'Financial Analysis', 'SDLC', 'Tableau', 'Requirements Gathering', 'Workflow Automation', 'Business Intelligence']
  },
  {
    id: '7',
    company: 'LEO1',
    position: 'Data Analyst',
    duration: 'Feb 2020 - Aug 2022 • 2 yrs 7 mos',
    location: 'Hyderabad Area, India',
    type: 'Full-time',
    icon: <BarChart3 className="w-6 h-6" />,
    description: [
      'Developed software for data visualization, building over 100 automated dashboards with filters and parameters to enhance data reporting efficiency',
      'Designed and implemented Lender Management System Integrations and OCR projects using Django & React-JS, improving processing performance',
      'Created algorithmic logics for efficient money handling, automating back-office processing, and significantly reducing manual labor and time'
    ],
    skills: ['API', 'Agile Methodologies', 'Data Analysis', 'Financial Analysis', 'SDLC', 'Tableau', 'Stored Procedures', 'Business Intelligence']
  },
  {
    id: '8',
    company: 'Vodafone Business',
    position: 'Technical Analyst',
    duration: 'Aug 2019 - Feb 2020 • 7 mos',
    location: 'Pune',
    type: 'Full-time',
    icon: <Smartphone className="w-6 h-6" />,
    description: [
      'Designed and implemented redundancy routing systems for first-level support, improving network reliability',
      'Collaborated with clients to optimize fixed-line network designs, enhancing network efficiency and client satisfaction'
    ]
  }
];

const internshipExperience = [
  {
    id: '1',
    company: 'iSYNC Technologies',
    position: 'Data Science Intern',
    duration: 'Apr 2024 - May 2024 • 2 mos',
    location: 'California, United States • Remote',
    type: 'Internship',
    icon: <Database className="w-6 h-6" />,
    description: [
      'Integrated SAP ERP S4Hana with Python, developing methodologies for AI-generated reports using Gemini-Pro LLM and Hugging-Face API',
      'Analyzed critical financial and controlling modules to automate reporting and data inflow, enhancing financial transactions and internal cost management'
    ],
    skills: ['API', 'Data Analysis', 'SDLC', 'Root Cause Problem Solving']
  },
  {
    id: '2',
    company: 'We Are InPower',
    position: 'Data Science Intern (Generative AI)',
    duration: 'Apr 2024 - Jun 2024 • 3 mos',
    location: 'California, United States • Remote',
    type: 'Internship',
    icon: <Code className="w-6 h-6" />,
    description: [
      'Spearheaded the creation of an innovative AI chatbot to support non-binary individuals using advanced Large Language Model (LLM) fine-tuning',
      'Managed end-to-end project development, including design, implementation, and continuous improvement',
      'Focused on inclusive and empathetic communication to ensure effective and sensitive interactions'
    ],
    skills: ['API', 'Python', 'Data Analysis', 'Large Language Models', 'Data Mining', 'SDLC', 'Requirements Gathering', 'Product Development']
  },
  {
    id: '3',
    company: 'Aditya Birla Sun Life Insurance',
    position: 'Support Executive',
    duration: 'Mar 2019 - May 2019 • 3 mos',
    location: 'Hyderabad, Telangana, India',
    type: 'Contract',
    icon: <Shield className="w-6 h-6" />,
    description: [
      'Supported the back-end operations team by designing and writing scripts to fasten the process of insurance application processing',
      'Collaborated on the strategic development of Application timing, processing and optimization'
    ]
  },
  {
    id: '4',
    company: 'Defense Research and Development Laboratory',
    position: 'Summer Intern',
    duration: 'May 2018 - Jun 2018 • 2 mos',
    location: 'Hyderabad, Telangana, India',
    type: 'Internship',
    icon: <Shield className="w-6 h-6" />,
    description: [
      'Training on subsystems of Guided Missiles',
      'Gained hands-on experience with defense technology and missile systems'
    ]
  },
  {
    id: '5',
    company: 'Next Education India Pvt Ltd',
    position: 'Subject Matter Expert Intern',
    duration: 'Feb 2018 - Jun 2018 • 5 mos',
    location: 'Hyderabad, Telangana, India',
    type: 'Internship',
    icon: <BookOpen className="w-6 h-6" />,
    description: [
      'Worked as subject matter expert developing educational content and curriculum',
      'Contributed to educational technology solutions and learning materials'
    ]
  }
];

const volunteerExperience = [
  {
    id: '1',
    company: 'Indian Society for Technical Education',
    position: 'Core Committee Member',
    duration: 'Nov 2015 - Aug 2016 • 10 mos',
    location: 'VIT University',
    type: 'Volunteer',
    icon: <Users className="w-6 h-6" />,
    description: [
      'Work involved strategy development for technical college events',
      'Included extensive managerial work for university club/chapter',
      'Organized and coordinated technical events and workshops'
    ]
  },
  {
    id: '2',
    company: 'Society of Automotive Engineers (VIT, Vellore)',
    position: 'Core Committee Member',
    duration: 'Sep 2015 - May 2016 • 9 mos',
    location: 'VIT Vellore',
    type: 'Volunteer',
    icon: <Car className="w-6 h-6" />,
    description: [
      'Technical work related to the automotive industry',
      'Involved designing college technical events and managing those events',
      'Contributed to automotive engineering projects and competitions'
    ]
  },
  {
    id: '3',
    company: 'Connectedreams.com',
    position: 'Research Analyst and Content Developer',
    duration: 'Sep 2016 - Feb 2017 • 6 mos',
    location: 'New York, New York',
    type: 'Freelance',
    icon: <Heart className="w-6 h-6" />,
    description: [
      'Conducted research and analysis for various projects',
      'Developed content for web platforms and digital marketing',
      'Contributed to data-driven content strategies'
    ]
  },
  {
    id: '4',
    company: 'Internshala',
    position: 'Student Partner 8.0',
    duration: 'Sep 2017 - Feb 2018 • 6 mos',
    location: 'Vellore, Tamil Nadu, India',
    type: 'Volunteer',
    icon: <Briefcase className="w-6 h-6" />,
    description: [
      'Promoted internship opportunities among university students',
      'Organized workshops and career guidance sessions',
      'Facilitated connections between students and potential employers'
    ]
  },
  {
    id: '5',
    company: 'Yes Property',
    position: 'Content Developer and Researcher',
    duration: 'Sep 2017 - Nov 2017 • 3 mos',
    location: 'Bangalore',
    type: 'Freelance',
    icon: <Building className="w-6 h-6" />,
    description: [
      'Developed content for real estate platforms and marketing materials',
      'Conducted market research and analysis for property trends',
      'Created engaging content for digital marketing campaigns'
    ]
  }
];

const ExperienceCard = ({ experience, index }) => (
  <div className="relative">
    {/* Timeline connector */}
    <div className="absolute left-8 top-16 w-0.5 h-full bg-slate-200 -z-10"></div>
    
    <div className="flex items-start space-x-6 group">
      {/* Timeline icon */}
      <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:bg-gray-700 transition-colors duration-300">
  <span className="text-white">
    {experience.icon}
  </span>
</div>

      
      {/* Experience card */}
      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-slate-100">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-1">{experience.position}</h3>
            <h4 className="text-lg font-semibold text-blue-600 mb-2">{experience.company}</h4>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
              {experience.type}
            </span>
          </div>
        </div>
        
        {experience.description && (
          <div className="mb-4">
            <ul className="space-y-2">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="text-slate-700 text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {experience.skills && (
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md font-medium">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ExperienceSection = ({ title, experiences, icon, gradient }) => (
  <section className="mb-16">
    <div className={`text-center mb-12 p-8 rounded-2xl ${gradient}`}>
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-grey-700">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <p className=" text-blue-100 max-w-2xl mx-auto">
        {title === 'Full-time Experience' && 'Professional roles and positions that have shaped my career journey'}
        {title === 'Internship Experience' && 'Learning opportunities and hands-on experience in various industries'}
        {title === 'Volunteer Experience' && 'Community involvement and contributions to various organizations'}
      </p>
    </div>
    
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp.id} experience={exp} index={index} />
      ))}
    </div>
  </section>
);

function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my professional journey, including full-time positions, internships, 
              and volunteer contributions that have shaped my expertise in data analytics, AI, and business intelligence.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <ExperienceSection 
          title="Full-time Experience" 
          experiences={fullTimeExperience}
          icon={<Briefcase className="w-6 h-6" />}
          gradient="bg-gradient-to-r from-slate-800 to-slate-900"
        />
        
        <ExperienceSection 
          title="Internship Experience" 
          experiences={internshipExperience}
          icon={<GraduationCap className="w-6 h-6" />}
          gradient="bg-gradient-to-r from-slate-800 to-slate-900"
        />
        
        <ExperienceSection 
          title="Volunteer Experience" 
          experiences={volunteerExperience}
          icon={<Heart className="w-6 h-6" />}
          gradient="bg-gradient-to-r from-slate-800 to-slate-900"
        />
      </main>

   
    </div>
  );
}

export default Experience;