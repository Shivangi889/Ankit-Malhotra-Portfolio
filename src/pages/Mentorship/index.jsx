import React from 'react';
import { Users, GraduationCap, Book, Award, MessageCircle, Target, Lightbulb, Heart } from 'lucide-react';

const Mentorship = () => {
  const mentorshipRoles = [
    {
      id: 'ai-instructor',
      title: 'Artificial Intelligence Instructor',
      organization: 'University of California, Riverside',
      duration: 'Aug 2025 - Present',
      location: 'California, United States',
      icon: <GraduationCap className="w-8 h-8" />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      achievements: [
        'Designed and delivered graduate-level curriculum on advanced AI, covering NLP, Supervised/Unsupervised Learning, and LLM-RAG architectures',
        'Achieved 100% student satisfaction rating',
        'Mentored student teams through end-to-end development of "Smart Gym Posture-Correction Application" using computer vision and ML',
        'Guided international student cohort in successfully completing all capstone project objectives',
        'Fostered practical AI skills and prepared next generation of talent for technology careers'
      ]
    },
    {
      id: 'peer-mentor',
      title: 'Peer Mentor',
      organization: 'University of California, Riverside',
      duration: 'Jun 2024 - Dec 2024 · 7 mos',
      location: 'Hybrid',
      icon: <Users className="w-8 h-8" />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      achievements: [
        'Conducted orientation programs for incoming graduate students, facilitating seamless transition to academic and campus life',
        'Delivered tailored workshops on learning strategies, time management, and technical tools',
        'Supported students from diverse backgrounds with personalized mentorship',
        'Guided students on academic challenges, career planning, and resource utilization'
      ]
    },
    {
      id: 'grading-assistant',
      title: 'Grading Assistant',
      organization: 'University of California, Riverside',
      duration: 'Sep 2024 - Dec 2024 · 4 mos',
      location: 'Remote',
      icon: <Book className="w-8 h-8" />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      achievements: [
        'Evaluated assignments, projects, and exams for 50+ students',
        'Provided timely feedback on data visualization, statistical analysis, and predictive modeling',
        'Maintained grading accuracy and fairness, aligning with course objectives',
        'Supported students by clarifying course material and addressing questions related to business analytics concepts'
      ]
    },
    {
      id: 'icbsc-advisor',
      title: 'Student Advisor & Mentor',
      organization: 'International Collegiate Business Strategy Competition (ICBSC)',
      duration: 'Jan 2025 - Apr 2025',
      location: 'Riverside, CA',
      icon: <Award className="w-8 h-8" />,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      achievements: [
        'Mentored 20 students across three teams in a four-month business simulation',
        'Advised on financial, marketing, and operations strategy for consumer goods manufacturing',
        'Coached team CEOs on leadership, decision-making, and ownership of outcomes',
        'Helped teams create Board-style documents, reports, and executive presentations',
        'Guided UCR teams to 3 awards at ICBSC 2025 through strategic advising and coaching'
      ]
    },
    {
      id: 'newton-mentor',
      title: 'Education Mentor',
      organization: 'Newton School',
      duration: 'Aug 2021 - Sep 2023 · 2 yrs 2 mos',
      location: 'Hyderabad, India · Remote',
      icon: <MessageCircle className="w-8 h-8" />,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      achievements: [
        'Mentored 15+ students for Data Science and Analytics certification',
        'Addressed doubts related to Python, SQL, Excel, Data Visualization tools, ML engineering, and intermediate mathematics',
        'Provided comprehensive guidance on technical concepts and career development',
        'Supported students in building practical skills and portfolio projects'
      ]
    },
    {
      id: 'private-tutoring',
      title: 'Private Tutoring Sessions',
      organization: 'Independent',
      duration: 'Ongoing',
      location: 'Remote/In-person',
      icon: <Heart className="w-8 h-8" />,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      achievements: [
        'Provide personalized one-on-one tutoring sessions to help students understand complex concepts',
        'Clear doubts and provide detailed explanations tailored to individual learning styles',
        'Focus on data science, AI, machine learning, and business analytics topics',
        'Help students build confidence and achieve their academic and career goals'
      ]
    }
  ];

  const speakingEngagements = [
    {
      title: 'Speaker - AIS & ACM Club at UCR',
      description: 'Invited speaker for technology (AI) talk, sharing insights on AI innovation and applications',
      type: 'Speaking Engagement'
    },
    {
      title: 'Judge - AI Pitch Competitions',
      description: 'Served as judge for AI pitch competitions hosted by AIS Club UCR and Business Strategy Club (Sustainability AI pitch competition)',
      type: 'Judging Panel'
    },
    {
      title: 'Panel Member - UCR Career Summit',
      description: 'Panel discussion on "When AI Meets Education" at UCR\'s 4th Annual All Advisory Board Meeting',
      type: 'Panel Discussion'
    }
  ];

  const mentorshipStats = [
    { label: 'Students Mentored', value: '100+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years of Experience', value: '5+', icon: <Target className="w-6 h-6" /> },
    { label: 'Satisfaction Rating', value: '100%', icon: <Award className="w-6 h-6" /> },
    { label: 'Workshops Conducted', value: '20+', icon: <Lightbulb className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My Mentorship Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation through personalized guidance, practical knowledge, and unwavering support
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mentorshipStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                <div className="flex justify-center mb-3 text-black">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Roles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Mentorship Roles & Impact
          </h2>
          <div className="space-y-8">
            {mentorshipRoles.map((role, index) => (
              <div
                key={role.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`${role.iconBg} ${role.iconColor} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {role.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-2">{role.title}</h3>
                        <p className="text-lg text-gray-700 font-medium mb-1">{role.organization}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span>{role.duration}</span>
                          <span>•</span>
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 mt-6">
                      {role.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-black mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Speaking & Judging Engagements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {speakingEngagements.map((engagement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  {engagement.type}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{engagement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{engagement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              My Mentorship Philosophy
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-200">
              <p>
                I believe in adaptive mentorship—tailoring my teaching approach to meet the unique needs of each learner. Whether simplifying intricate subjects or reinforcing core concepts, I ensure comprehensive understanding through breaking down challenges and cultivating supportive learning environments.
              </p>
              <p>
                My approach combines analytical rigor with empathy, recognizing that every student learns differently. I focus on building not just technical skills, but also confidence, critical thinking, and a growth mindset that extends beyond the classroom.
              </p>
              <p>
                Through personalized guidance, practical projects, and continuous support, I help students transform their potential into achievement, preparing them for successful careers in data science, AI, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;

