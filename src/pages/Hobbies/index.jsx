import React, { useEffect, useRef } from 'react';
import { Music, Gamepad, Trophy, Workflow, Briefcase, Users, GitMerge } from 'lucide-react';
import { Mic } from 'lucide-react';
import img from '../../assets/profile.jpeg'
import img1 from '../../assets/STORED POWER TECHNOLOGY INC..jpeg'
import img2 from '../../assets/images/IMG_3705.webp'


const hobbiesData = [
  {
    id: 'music',
    title: 'The Universal Language of Music',
    summary: 'Finding solace and expression in playing the guitar',
    description: 'I find solace and expression in playing the guitar, a universal language that resonates deeply. Primarily focusing on rhythm guitar, I enjoy exploring the intricate beats of Jazz and the timeless energy of Classic Rock. This practice has been a great teacher of patience and discipline.',
    imageUrl: img2,
    icon: <Music className="w-8 h-8" />,
    achievements: []
  },
  {
    id: 'gaming',
    title: 'Strategic Worlds and Team Dynamics',
    summary: 'Exploring competitive gaming landscapes',
    description: "I'm an avid gamer, delving into the strategic landscapes of titles like Rocket League, Call of Duty, and Marvel Rivals. Beyond the sheer enjoyment, gaming has honed my strategic thinking and reinforced the importance of teamwork. These virtual challenges have translated into real-world problem-solving skills and collaboration abilities.",
    imageUrl: img,
    icon: <Gamepad className="w-8 h-8" />,
    achievements: []
  },
  {
    id: 'soccer',
    title: 'The Emotion of Soccer',
    summary: 'A profound passion since childhood',
    description: 'Soccer has held a special place in my heart since childhood. I played as a goalkeeper and in defense, and had the honor of representing my state, Maharashtra, in India. For me, soccer transcends a mere game; it\'s a profound emotion. This passion has significantly contributed to developing my strategic acumen and teamwork abilities on and off the field.',
    imageUrl: img1,
    icon: <Trophy className="w-8 h-8" />,
    achievements: [
      'Represented Maharashtra state in national competitions'
    ]
  },
  {
    id: 'automation',
    title: 'The Art of Automation',
    summary: 'Creating intelligent, streamlined solutions',
    description: 'I have a strong inclination towards automating processes, believing that many modern tasks can benefit from streamlined, human-touch-minimal solutions. A personal project involved automating my coffee machine to begin brewing as soon as Alexa detects I\'ve woken up. This passion extends to professional applications where I seek to optimize workflows through intelligent automation.',
    imageUrl: img1,
    icon: <Workflow className="w-8 h-8" />,
    achievements: [
      'Developed smart home automation systems',
      'Created workflow optimizations for business processes'
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Innovative Ventures',
    summary: 'Building solutions through entrepreneurship',
    description: 'I successfully founded and currently operate Qimension, a 3D printing company based in Hyderabad, India. Built from the ground up, this venture has garnered support from the government. This experience has taught me invaluable lessons in innovation, perseverance, and business strategy.',
    imageUrl: img1,
    icon: <Briefcase className="w-8 h-8" />,
    achievements: [
      'Founder of Qimension (3D printing company)',
      'Government-recognized venture'
    ]
  },
  {
    id: 'mentorship',
    title: 'Adaptive Mentorship',
    summary: 'Sharing knowledge and guiding others',
    description: 'I possess a strong aptitude for mentoring, grounded in the ability to tailor my teaching approach to meet the unique needs of each learner. Whether simplifying intricate subjects or reinforcing core concepts, I ensure comprehensive understanding through breaking down challenges and cultivating supportive learning environments.',
    imageUrl: img,
    icon: <Users className="w-8 h-8" />,
    achievements: [
      'Speaker for AIS & ACM club at UCR',
      'Judge for AI pitch competitions',
      'Proactiveness Recognition for exceptional contribution to UCR GSB'
    ]
  },
  {
    id: 'open-source',
    title: 'Open Source & Collaborative Development',
    summary: 'Building something larger than any individual could create',
    description: 'I am a firm believer in the power of collaborative innovation, which is why I am an active contributor to several open-source projects, particularly within the AI domain. My passion lies in helping to build something larger than any single individual could create. This involves a comprehensive skill set that spans the full project lifecycle—from high-level strategizing and hands-on coding to meticulous troubleshooting and optimization.',
    imageUrl: img, // You might want to use a different image for this
    icon: <GitMerge className="w-8 h-8" />, // Using GitMerge icon for open source
    achievements: [
      'Active contributor to multiple AI open-source projects',
      'Experience across full project lifecycle (strategy to optimization)',
      'Commitment to advancing technology through collective development'
    ]
  }, {
    id: 'industry-engagement',
    title: 'Industry Engagement & Thought Leadership',
    summary: 'Shaping conversations around AI innovation and ethics',
    description: 'I actively contribute to the technology community by sharing insights and shaping conversations around the future of Artificial Intelligence. Organizations frequently invite me to serve in various capacities where I evaluate innovative concepts, discuss emerging trends, and contribute to critical discussions on technology development.',
    imageUrl: img, // You may want to use a different image
    icon: <Mic className="w-8 h-8" />, // Using Mic icon for speaking engagements
    achievements: [
      'Invited Speaker for AIS & ACM club at UCR on AI technology',
      'Judge for innovation competitions at AIS Club UCR and Business Strategy Club',
      'Panel Member on advisory boards discussing AI ethics and best practices',
      'Evaluated business models in technology case study competitions',
      'Contributed to discussions on responsible AI development'
    ]
  }
];
const Hobbies = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const getHobbyIcon = (id) => {
    const icons = {
      music: <Music className="w-8 h-8" />,
      gaming: <Gamepad className="w-8 h-8" />,
      soccer: <Trophy className="w-8 h-8" />,
      automation: <Workflow className="w-8 h-8" />
    };
    return icons[id] || null;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="pt-24 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
          My <span className="text-bule-400">Hobbies</span>
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          These hobbies shape my creativity and problem-solving approach
        </p>
      </div>

      {/* Hobbies Grid */}
      <div className="container mx-auto px-4 pb-20 grid md:grid-cols-2 gap-6">
        {hobbiesData.map((hobby, index) => (
          <div
            key={hobby.id}
            ref={el => sectionRefs.current[index] = el}
            className="relative h-96 rounded-xl overflow-hidden group opacity-0"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${hobby.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="backdrop-blur-sm bg-black/50 p-6 rounded-lg border border-white/10 transform transition-all duration-500 group-hover:translate-y-0 translate-y-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className=" p-2 rounded-full">
                    {getHobbyIcon(hobby.id)}
                  </div>
                  {/* <span className="text-white font-mono">0{index + 1}</span> */}
                </div>
                <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
                <p className="text-gray-200 mb-3 italic">{hobby.summary}</p>
                <p className="text-gray-300 text-sm">{hobby.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;