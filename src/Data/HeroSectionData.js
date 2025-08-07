import resume from '../assets/pdf/resume.pdf'
import profile from '../assets/images/profile.jpeg'

import Post1 from "../assets/images/Ankit's post Linkedin.jpeg";
import Post2 from "../assets/images/UCR.jpg";
import Post3 from "../assets/images/STORED POWER TECHNOLOGY INC..jpeg"
import project from "../assets/images/download.jpeg"

import {
  Brain,
  Bot,
  TrendingUp,
  Sun,
  Heart,
  Scan,
  Users,
  Shield,
  Music,
  DollarSign,
} from 'lucide-react';



export const headerData = {
  name: 'Ankit  Malhotra',
  title: "Data Analyst",
  desciption: "Hi, I’m Ankit Malhotra— a data enthusiast, AI innovator, and lifelong learner with a passion for solving complex problems through the power of technology. From designing AI bots that provide instant therapy to building university scheduling systems, I’ve dedicated my career to creating impactful solutions that improve lives. ",
  desciption1: "This site is where I bring my journey to life. Here, you’ll find a showcase of my professional work, achievements, and the moments I’ve been privileged to share as a speaker, mentor, and judge at AI events and competitions.",
  desciption2: "Whether you’re here to explore my portfolio, learn more about my expertise, or discuss a potential collaboration, I invite you to connect and join me on this exciting journey of discovery and innovation.",
  image: profile,
  resumePdf: resume
}


export const socialsData = {
  github: 'https://github.com/',
  facebook: 'https://www.facebook.com/',
  linkedIn: 'https://www.linkedin.com/in',
  instagram: 'https://www.instagram.com/',
  codepen: 'https://codepen.io/',
  twitter: 'https://twitter.com/',
  reddit: 'https://www.reddit.com/user/',
  blogger: 'https://www.blogger.com/',
  medium: 'https://medium.com/@',
  stackOverflow: 'https://stackoverflow.com/users/',
  gitlab: 'https://gitlab.com/',
  youtube: 'https://youtube.com/'
}




export const achievementData = {
  bio: "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
  achievements: [
    {
      id: 1,
      title: 'Beta Gamma Sigma Award Holder 2024 (Best in Business)',
      details: `I was deeply honored to receive the Beta Gamma Sigma (BGS) award, recognizing excellence in business studies.`,
      date: '2024',
      field: 'Business',
      //   image: Beta
    },
    {
      id: 2,
      title: 'Invited Speaker and Judge',
      details: `I've had the privilege of being invited as a speaker for a technology (AI) talk by the AIS & ACM club at UCR and serving as a judge for AI pitch competitions hosted by both the AIS Club UCR and the Business Strategy Club (for a Sustainability AI pitch competition).`,
      date: '2023-2024',
      field: 'AI & Technology',
      //   image: Speaker
    },
    {
      id: 3,
      title: 'Founder of Qimension',
      details: `I successfully founded and currently operate Qimension, a 3D printing company based in Hyderabad, India. Built from the ground up, this venture has garnered support from the government.`,
      date: '2022-Present',
      field: 'Entrepreneurship',
      image: 'https://images.unsplash.com/photo-1581092338447-c3c01f6d5b43?auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 4,
      title: 'San Diego Sustainability Intersolar Expo Recognition',
      details: `I received a recognition award at the San Diego Sustainability Intersolar Expo and conference.`,
      date: '2023',
      field: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 5,
      title: 'Proactiveness Recognition by Student Association',
      details: `Recognition given by the Student Association for exceptional contribution to the UCR Graduate School of Business.`,
      date: '2023',
      field: 'Academic Excellence',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 6,
      title: 'Times of India Student of the Year',
      details: `A significant honor was being named the Student of the Year by the Times of India.`,
      date: '2023',
      field: 'Academic',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 7,
      title: 'Contribution to the India Covid-19 Dashboard',
      details: `I contributed to the development of the Covid-19 Dashboard in India for approximately six months. This crucial tool was utilized daily by over 3,000,000 people across the country. My background in Data Science & Analytics and AI & ML Engineering was instrumental in this project.`,
      date: '2020',
      field: 'Data Science & AI',
      image: 'https://images.unsplash.com/photo-1581090700227-39a0f1a1f7e7?auto=format&fit=crop&w=1050&q=80'
    }
  ]


}






export const testimonialsData = [
  {
    id: 1,
    name: 'DebiPrasad Baral',
    title: 'Co-Founder & CTO, Financepeer (now Leo1)',
    text: "Ankit Malhotra is an absolute powerhouse of motivation and skill! Working together for 2.5 years was a joy as he showcased brilliant creativity and technical prowess. Ankit not only aced RDBMS optimization but also rocked a 10-month project, flaunting his wizardry in algorithms and mathematics. His kindness and generosity are heartwarming, and paired with his stellar analytical skills, he's truly an invaluable asset. Recommending Ankit is a no-brainer – he's the kind of professional dreams are made of!",
  },
  {
    id: 2,
    name: 'MohanaSundaram R.',
    title: 'Senior Assistant Professor, VIT University, SCOPE (School of Computer Science Engineering)',
    text: "Ankit Malhotra is an exceptional professional, showcasing unparalleled skills in problem-solving, technical execution, and leadership. His dedication to academics, coupled with a passion for continuous learning, sets him apart. Ankit's collaborative spirit and outstanding performance in diverse projects make him an invaluable asset. I wholeheartedly recommend Ankit for any academic or professional endeavor; his commitment and expertise speak volumes.",
  }
]





export const blogData = [
  {
    id: 1,
    title: "Reflections on Two Years of Growth",
    description: "The past two years have been an incredible ride of learning, growth and self-reflection. Now that I look back, I don't think I would do anything differently.",
    date: 'May 02, 2025',
    image: Post2,
    url: 'https://www.linkedin.com/posts/malhotra-ankit_the-past-two-years-have-been-an-incredible-activity-7345609623602663425-6yHL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-jVsBfXYxeqDyPjePfM__Ty1zVgNaR3U'
  },
  {
    id: 2,
    title: "When AI Meets Education: My Panel Experience at UCR's Career Summit",
    description: 'Still buzzing from the fantastic discussions at the 4th Annual All Advisory Board Meeting at the UCR Career Center on Friday, May 16th! A big thank you to Michelle S. Gomez & Alex Muro for the invitation and for coordinating everything so smoothly.',
    date: 'May 31, 2025',
    image: Post1,
    url: 'https://www.linkedin.com/posts/malhotra-ankit_ai-futureofwork-edtech-activity-7334035841410834433-wGnV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-jVsBfXYxeqDyPjePfM__Ty1zVgNaR3U'
  },
  {
    id: 3,
    title: 'STORED POWER TECHNOLOGY INC. ',
    description: "Happy to share that I've joined STORED POWER TECHNOLOGY INC. as a Business Analyst!I'm passionate about leveraging technology to drive impactful decisions and help businesses grow, and I'm excited to apply those skills to analyzing sales performance, identifying key trends, and developing strategic recommendations at Stored Power Technology Inc. ",
    date: 'April 04, 2020',
    image: Post3,
    url: 'https://www.linkedin.com/posts/malhotra-ankit_businessanalyst-dataanalysis-storedpowertechnology-activity-7305784687501684739-uHDF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf-jVsBfXYxeqDyPjePfM__Ty1zVgNaR3U'
  },
  // {
  //     id: 4,
  //     title: 'CHECK INTERNET SPEED FROM THE COMMAND LINE',
  //     description: 'Want to check your internet speed from the terminal? Here\'s the perfect way to the that.',
  //     date: 'Sep 17, 2020',
  //     image: 'https://1.bp.blogspot.com/-XTVMsZP3HaM/Xxpl394txlI/AAAAAAAABws/zovXWiuNGg4TzBwYYVFfJ1ixDb3JfVokgCNcBGAsYHQ/w400-h195/speedtest.png',
  //     url: 'https://hackzism.blogspot.com/2020/07/check-internet-speed-from-command-line.html'
  // },
  // {
  //     id: 5,
  //     title: 'GET MICHAEL\'S OR TREVOR\'S VEHICLES FULLY UPGRADED IN GTA V FOR FREE',
  //     description: 'In case you haven\'t heard of this game, GTA stands for \'Grand Theft Auto\'. It is an open-world game published by Rockstar Games.',
  //     date: 'Oct 1, 2020',
  //     image: 'https://1.bp.blogspot.com/-jhdtUBIRD_s/XxLFKQuRz9I/AAAAAAAABsM/mClfbfDFKvsUwA7Wyi25Lzu3DEmL2lxrACNcBGAsYHQ/s1919/gta.jpg',
  //     url: 'https://hackzism.blogspot.com/2020/07/how-can-you-get-michaels-or-trevors.html'
  // },
]



export const projects = [
  {
    id: 1,
    title: "AI-Powered Class Scheduling System",
    role: "Principal AI Engineer – Volunteer",
    description: "Leading development of an AI scheduling tool for UCR students using advanced LLMs & data pipelines.",
    fullDescription: "As the Principal AI Engineer for an innovative project at UCR, I am leading the development of an AI-powered scheduling tool designed to simplify and streamline the scheduling process for students. Spearheaded data gathering, cleaning, and transformation pipelines, ensuring high-quality inputs for training AI models. Fine-tuned large language models (LLMs) using Gemma 3 and Vertex AI, optimizing the system's performance and usability. Directed the overall project strategy, establishing best practices for effective implementation.",
    impact: "This tool aims to significantly reduce time spent on course scheduling, improving the student experience at UCR.",
    technologies: ["Python", "R", "SQL", "Vertex AI", "Gemma 3", "TensorFlow"],
    category: "AI/ML",
    icon: Brain,
    image:project,
    achievements: [
      "Spearheaded data gathering, cleaning, and transformation pipelines",
      "Fine-tuned large language models using Gemma 3 and Vertex AI",
      "Directed overall project strategy and best practices",
      "Optimized system performance and usability"
    ]
  },
  {
    id: 2,
    title: "Non-Binary Therapy Chatbot",
    role: "Data Science Intern – Generative AI",
    description: "Designed AI-driven chatbot providing instant therapy support for non-binary individuals using NLP.",
    fullDescription: "As part of my internship at InPower, I designed and deployed an AI-driven chatbot tailored to provide instant therapy and support for non-binary individuals. Developed an interactive chatbot system leveraging natural language processing (NLP) to optimize data retrieval workflows. Fine-tuned the underlying AI models to improve accuracy and ensure empathetic responses aligned with therapeutic goals.",
    impact: "This chatbot serves as a supportive mental health resource, empowering users with accessible and responsive AI-driven therapy.",
    technologies: ["Python", "TensorFlow", "LangChain"],
    category: "AI/ML",
    icon: Bot,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Developed interactive chatbot system using NLP",
      "Fine-tuned AI models for empathetic responses",
      "Optimized data retrieval workflows",
      "Deployed production-ready therapy support system"
    ]
  },
  {
    id: 3,
    title: "Automated AI Sales Channel",
    role: "Business Sales Analyst",
    description: "Developing AI-based automated sales channel with personalized recommendations and CRM integration.",
    fullDescription: "At Stored Power Technology Inc, I am designing and developing an AI-based automated sales channel to streamline and enhance customer interactions. Leveraged machine learning algorithms to predict customer preferences, enabling a personalized sales approach. Integrated CRM data pipelines using Close.io APIs to automate lead management and sales tracking. Built advanced recommendation models to suggest tailored products/services, optimizing conversion rates and customer satisfaction.",
    impact: "The AI-driven sales channel is projected to improve customer acquisition efficiency and boost revenue by automating repetitive tasks and enhancing decision-making.",
    technologies: ["Python", "SQL", "R", "TensorFlow", "CRM APIs"],
    category: "Business Intelligence",
    icon: TrendingUp,
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Leveraged ML algorithms for customer preference prediction",
      "Integrated CRM data pipelines using Close.io APIs",
      "Built advanced recommendation models",
      "Optimized conversion rates and customer satisfaction"
    ]
  },
  {
    id: 4,
    title: "Solar Energy Optimization Using AI",
    role: "Business Sales Analyst",
    description: "Analyzing solar energy usage data across USA to optimize consumption and reduce carbon footprints.",
    fullDescription: "I am currently working on a cutting-edge project analyzing solar energy usage data across the USA to identify new features for our AI lab. Processed data from multiple sources, including weather tracking APIs and home usage records, to track energy consumption patterns. Built models to predict energy usage and recommend optimizations for cost savings. Designed algorithms to optimize solar energy consumption at the household and corporate levels, reducing carbon footprints and improving energy efficiency.",
    impact: "This project aims to empower residents and businesses to maximize their solar energy usage while minimizing costs, contributing to a more sustainable future.",
    technologies: ["Python", "R", "SQL", "TensorFlow", "Weather APIs"],
    category: "Sustainability",
    icon: Sun,
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Processed data from weather APIs and usage records",
      "Built predictive models for energy usage optimization",
      "Designed algorithms for household and corporate optimization",
      "Reduced carbon footprints and improved energy efficiency"
    ]
  },
  {
    id: 5,
    title: "Heart Rate Prediction",
    role: "Personal Project",
    description: "Machine learning model predicting heart rate variations using advanced regression techniques.",
    fullDescription: "Developed a machine learning model to predict heart rate variations using advanced regression techniques. Analyzed physiological data and applied predictive modeling to improve health monitoring accuracy.",
    impact: "This project demonstrates the potential of AI to enhance health diagnostics and preventative care.",
    technologies: ["R", "Python", "scikit-learn", "caret"],
    category: "Healthcare",
    icon: Heart,
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Developed advanced regression models",
      "Analyzed physiological data patterns",
      "Applied predictive modeling techniques",
      "Improved health monitoring accuracy"
    ]
  },
  {
    id: 6,
    title: "X-Ray Disease Prediction",
    role: "Personal Project",
    description: "Deep learning model predicting diseases from X-ray images using convolutional neural networks.",
    fullDescription: "Designed a deep learning model to predict diseases from X-ray images, improving diagnostic accuracy and efficiency. Utilized convolutional neural networks (CNNs) to classify X-ray images and detect abnormalities.",
    impact: "This project highlights the role of AI in advancing medical imaging and decision-making processes.",
    technologies: ["Python", "TensorFlow", "Deep Learning"],
    category: "Healthcare",
    icon: Scan,
    image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Designed deep learning models for medical imaging",
      "Utilized CNNs for X-ray image classification",
      "Detected abnormalities with high accuracy",
      "Improved diagnostic efficiency"
    ]
  },
  {
    id: 7,
    title: "Customer Churn Prediction",
    role: "Personal Project",
    description: "Classification model with 82% accuracy predicting customer churn using feature engineering.",
    fullDescription: "Built a classification model with 82% accuracy to predict customer churn for businesses. Conducted feature engineering and applied machine learning algorithms to identify at-risk customers.",
    impact: "Enabled businesses to proactively address churn and improve customer retention strategies.",
    technologies: ["Python", "scikit-learn", "SQL"],
    category: "Business Intelligence",
    icon: Users,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Achieved 82% prediction accuracy",
      "Conducted advanced feature engineering",
      "Applied machine learning algorithms",
      "Identified at-risk customers effectively"
    ]
  },
  {
    id: 8,
    title: "InsightX – Fraud Detection System",
    role: "Personal Project",
    description: "Comprehensive fraud detection system identifying anomalies in financial transactions.",
    fullDescription: "Developed a comprehensive fraud detection system to identify anomalies in financial transactions. Designed and implemented machine learning models to detect fraud patterns using Random Forest and Logistic Regression.",
    impact: "Improved fraud detection accuracy, reducing false positives and safeguarding financial integrity.",
    technologies: ["Python", "Random Forest", "Logistic Regression"],
    category: "FinTech",
    icon: Shield,
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Developed comprehensive fraud detection system",
      "Implemented Random Forest and Logistic Regression models",
      "Reduced false positives significantly",
      "Safeguarded financial transaction integrity"
    ]
  },
  {
    id: 9,
    title: "Spotify Cohort Analysis",
    role: "Personal Project",
    description: "Cohort analysis grouping Spotify users based on listening behaviors with visual dashboards.",
    fullDescription: "Performed a cohort analysis to group Spotify users based on their listening behaviors and preferences. Conducted clustering analysis and developed visual dashboards to present insights.",
    impact: "Improved recommendation systems, enhancing user satisfaction and engagement.",
    technologies: ["R", "Python", "Clustering Algorithms", "Tableau"],
    category: "Data Analysis",
    icon: Music,
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Performed cohort analysis on user behaviors",
      "Conducted advanced clustering analysis",
      "Developed visual dashboards",
      "Enhanced recommendation system performance"
    ]
  },
  {
    id: 10,
    title: "FinAI – Financial News Tool",
    role: "Personal Project",
    description: "Financial news analysis tool using NLP to provide sentiment analysis and actionable insights.",
    fullDescription: "Created a financial news analysis tool leveraging natural language processing (NLP) to assist investors in decision-making. Processed and analyzed financial news articles to provide sentiment analysis and actionable insights.",
    impact: "Empowered users to make informed financial decisions based on real-time news analysis.",
    technologies: ["Python", "NLP", "LangChain", "TensorFlow"],
    category: "FinTech",
    icon: DollarSign,
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
    achievements: [
      "Created NLP-powered financial analysis tool",
      "Processed and analyzed news articles",
      "Provided sentiment analysis and insights",
      "Enabled informed investment decisions"
    ]
  }
];