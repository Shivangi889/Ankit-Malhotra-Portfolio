import React from 'react';
import { ExternalLink, Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: "Graduate Consultant",
      company: "Citrus Grove Catering",
      location: "Riverside, CA",
      period: "January 2025 – March 2025",
      description:
        "Led a cross-functional MBA team to design and implement a digital ordering system, replacing manual workflows and reducing order errors by 50% for a local catering business.",
      achievements: [
        "Conducted end-to-end journey mapping and operational analysis to uncover bottlenecks, leading to a 20% increase in throughput and improved communication across teams.",
        "Designed a user-centric interface with curated menus, dietary filters, and upsell prompts, resulting in a 15% projected uplift in online conversions based on early user testing.",
        "Aligned product features with sales and operational data, optimizing layout to highlight high-margin items and improve the overall purchasing experience.",
        "Applied McKinsey 7S and PESTLE frameworks to assess organizational readiness, enabling smooth change management and a phased rollout strategy across departments.",
        "Created a robust implementation roadmap with onboarding plans, KPIs, and future AI enhancements, ensuring long-term scalability and platform adoption.",
        "Used Tableau and SQL to analyze customer behavior and flow bottlenecks, informing UX decisions that boosted projected platform engagement by 18%."
      ],
    },
    {
      title: "Product Manager",
      company: "FinAI Project (MBA Independent Project)",
      location: "Riverside, CA",
      period: "June 2024 – September 2024",
      description:
        "Led design and delivery of a proof-of-concept AI platform for retail investors, validating market need through research and testing, and defining a feature roadmap and MVP scope.",
      achievements: [
        "Conducted 15+ user interviews and UX surveys to identify unmet investor needs, prioritizing features and improving user flow efficiency by 35% through focused design updates.",
        "Designed Figma wireframes and interactive prototypes informed by behavioral insights, then ran iterative tests that increased task success rates by 40% in usability studies.",
        "Researched competitors and investor behavior to define product-market fit, ensuring the backlog aligned with user expectations and positioned the tool against existing market gaps."
      ],
    },
    {
      title: "Co-Founder & Director of Product & Operations",
      company: "Whiffs of Nature",
      location: "Mumbai, India",
      period: "June 2020 – September 2023",
      description:
        "Launched a custom gifting startup from ideation to $50K+ in recurring annual revenue, securing B2B clients and scaling through PR hampers for beauty and lifestyle brands.",
      achievements: [
        "Designed personalized gifting strategies aligned with brand goals, improving experience consistency and driving a 40% increase in client retention and reorder rates year over year.",
        "Streamlined operations using lean workflows and inventory controls, enabling 30% faster production cycles while maintaining premium quality during high-volume order surges.",
        "Negotiated strategic contracts with enterprise clients, directly contributing to $15K in new annual revenue through tailored solutions and relationship management.",
        "Executed targeted outreach and influencer campaigns, building brand recognition and generating a 3x increase in qualified inbound leads within 12 months of launch.",
        "Led cross-functional teams across packaging, logistics, and fulfillment, ensuring timely, high-quality delivery for large-scale PR and holiday campaigns under tight deadlines."
      ],
    },
    {
      title: "Business Development Analyst",
      company: "Arthayan Advisory Services Pvt Ltd",
      location: "Mumbai, India",
      period: "April 2021 – May 2022",
      description:
        "Onboarded 100+ early-stage startups to a beta investor matchmaking platform, laying the groundwork for testing and increasing investor-founder match conversion by 25%.",
      achievements: [
        "Worked cross-functionally with founders and product teams to implement UX changes, improving platform matching accuracy and engagement by 15% during beta.",
        "Used Excel and SQL to analyze user flow and friction points, identifying fixes that reduced churn by 18% and improved beta testing outcomes.",
        "Conducted interviews and competitive research to define positioning and contributed insights that informed go-to-market strategy and platform differentiation.",
        "Facilitated investor-startup connections by evaluating pitches and scouting high-potential startups, boosting firm-wide client acquisition by 25% within 12 months."
      ],
    }
  ];
  const leadership = [
    {
      title: "Student Advisor & Mentor",
      company: "International Collegiate Business Strategy Competition (ICBSC)",
      location: "",
      period: "January 2025 – April 2025",
      description:
        "Mentored 20 students across three teams in a four-month business simulation, advising on financial, marketing, and operations strategy for a consumer goods manufacturing firm.",
      achievements: [
        "Coached team CEOs on leadership by guiding decisions, asking key questions, and encouraging ownership of outcomes.",
        "Helped teams create Board-style documents, reports, and executive presentations for investor panels.",
        "Analyzed team financials, adjusted strategy, and improved performance in a competitive simulation.",
        "Guided UCR teams to 3 awards at ICBSC 2025 through advising, coaching, and cross-functional support."
      ],
    },
    {
      title: "President",
      company: "AGSM Women in Business",
      location: "",
      period: "June 2024 – June 2025",
      description:
        "Led a cross-functional executive board of 35 members across 6 departments including Marketing, Partnerships, Finance, and Communications, fostering strategic collaboration and operational efficiency.",
      achievements: [
        "Executed the flagship UC Women in Business Leadership Summit during Women’s History Month—co-hosted with UCSD, UCI & UCR WIB chapters—drawing 150+ attendees for a full day of learning, networking, and empowerment.",
        "Designed and managed high-impact professional development initiatives such as a 3-day Business Case Study Competition and panel discussions with seasoned professionals across MBA concentrations.",
        "Cultivated strong relationships with alumni, local businesses, faculty, and academic leaders to expand access to speaking engagements, mentorship, and career opportunities for MBA students.",
        "Elevated the visibility and reach of the organization through strategic community engagement and inclusive programming aimed at fostering leadership, empowerment, and career readiness."
      ],
    },
    {
      title: "Chief Strategy Officer",
      company: "ICBSC Business Strategy Competition – EcoChew",
      location: "",
      period: "2024",
      description:
        "Placed 2nd in overall performance and 1st in Best Documents Award in a prestigious global competition where MBA teams manage a simulated manufacturing company, making strategic decisions across marketing, sales, finance, operations, and production.",
      achievements: [
        "Competed against graduate business school teams worldwide, securing top rankings among five finalist teams."
      ],
    }
  ];


  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "University of California, Riverside",
      specialization: "Business Analytics & Marketing",
      period: "Graduated June 2025",
      achievements: [
        "GPA: 3.85",
        "President, AGSM Women in Business",
        "Large Events Lead, AGSM Student Association",
        "Peer Mentor, Graduate Student Success",
        "Graduate Student Ambassador, AGSM School of Business"
      ]
    },
    {
      degree: "Bachelor of Accounting and Finance",
      school: "Kishinchand Chellaram College, University of Mumbai",
      specialization: "Accounting and Finance",
      period: "Graduated 2019",
      achievements: [
        "GPA: 3.40"
      ]
    }
  ];


  const certifications = [
    {
      authority: "Product School",
      title: "Artificial Intelligence Micro-Certification (AIC)™️",
      year: "2025",
      link: "https://drive.google.com/file/d/1GcD16HnCFXBYkZxSDshNuV38yIdv80pY/view?usp=sharing",
    },
    {
      authority: "Product School",
      title: "Product Analytics Micro-Certification (PAC)™️",
      year: "2025",
      link: "https://drive.google.com/file/d/1_OB6GJmV2dapaa4te4MQfsU7WQO8fFSG/view?usp=drive_link", // Add actual link if available
    },
    {
      authority: "HubSpot Academy",
      title: "Inbound Marketing Certified",
      year: "2025",
      link: "https://app-na2.hubspot.com/academy/achievements/x58wwfcq/en/1/pooja-bhatia/inbound-marketing", // Add actual link if available
    },
    {
      authority: "Six Sigma Online",
      title: "Lean Six Sigma White Belt Certification",
      year: "2025",
      link: "https://drive.google.com/file/d/1GcD16HnCFXBYkZxSDshNuV38yIdv80pY/view?usp=sharing", // Add actual link if available
    },
    {
      authority: "CFA Institute",
      title: "Passed CFA Level 1 Examination",
      year: "2019",
      link: "#", // Add actual link if available
    },
  ];



  return (
    <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light font-tenor-sans text-gray-900 mb-4">
            Resume
          </h1>
          <p className="text-lg text-gray-600 font-tenor-sans max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey, education,
            and key achievements in business analytics and strategic marketing.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/bhatiapooja43/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <ExternalLink size={18} /> LinkedIn Profile
            </a>
          </div>
        </header>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#fff27d] rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-gray-900" />
            </span>
            Professional Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[#fff27d] before:rounded-full"
              >
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-sm transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2 pl-1">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="text-gray-700 before:content-['•'] before:text-[#fff27d] before:font-bold before:inline-block before:w-4"
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* LEADERSHIP AND CAMPUS INVOLVEMENT */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#fff27d] rounded-full flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-gray-900" />
            </span>
            Leadership & Campus Involvement
          </h2>
          <div className="space-y-10">
            {leadership.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[#fff27d] before:rounded-full"
              >
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-sm transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2 pl-1">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="text-gray-700 before:content-['•'] before:text-[#fff27d] before:font-bold before:inline-block before:w-4"
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#fff27d] rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-gray-900" />
            </span>
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-sm transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-gray-800 font-medium">{edu.school}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.specialization}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" /> {edu.period}
                </div>
                <ul className="space-y-2 pl-1">
                  {edu.achievements.map((a, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 before:content-['•'] before:text-[#fff27d] before:font-bold before:inline-block before:w-4"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Skills */}
        <section className='mb-16'>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 pb-2 border-b border-gray-100 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#fff27d] rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-gray-900" />
            </span>
            Certifications & Skills
          </h2>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex w-full justify-between items-start text-gray-700">
                  <div className="flex gap-3">
                    <span className="w-2 h-2 bg-[#fff27d] rounded-full mt-1 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold">{cert.authority}</span>{' '}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800"
                      >
                        {cert.title}
                      </a>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1  text-right">{cert.year}</div>
                </li>
              ))}
            </ul>
          </div>
        </section >
        <section className='mb-1'>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Product Strategy & Roadmapping',
                'User Research & UX Optimization',
                'Cross-Functional Team Leadership',
                'Data Analytics & Insights (SQL, Tableau, Python, Excel)',
                'Go-to-Market Strategy',
                'Stakeholder Management',
                'Agile Product Development',
                'Customer-Centric Product Design',
                'Business & Financial Acumen',
                'Leadership & Organizational Management',
                'Communication & Presentation',
                'Market & Competitive Research'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#fff27d]/80 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#fff27d] transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div >
  );
};

export default Resume;