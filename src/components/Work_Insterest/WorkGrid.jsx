
import WorkCard from './WorkTabs'
import { ChartBar, Terminal, PieChart, Calculator, Lightbulb, TrendingUp } from 'lucide-react';

const expertiseData = [
    {
        title: "Data Science & Analytics",
        summary: "Transforming raw data into actionable insights",
        description:
            "Turning raw data into actionable insights to inform strategic decisions. Using advanced analytics techniques to extract meaning from complex datasets and drive business value.",
        icon: ChartBar,
    },
    {
        title: "AI & ML Engineering",
        summary: "Building intelligent systems for real problems",
        description:
            "Developing intelligent systems to solve real-world problems, from chatbots to decision-support tools. Creating models that learn from data and improve over time.",
        icon: Terminal,
    },
    {
        title: "Product / Feature Analysis",
        summary: "Optimizing products through data-driven decisions",
        description:
            "Evaluating and optimizing product performance through analytics. Using quantitative and qualitative methods to understand user behavior and improve experiences.",
        icon: PieChart,
    },
    {
        title: "Statistics & Decision Science",
        summary: "Applied mathematics for better decision-making",
        description:
            "Applying rigorous quantitative methods to drive better decision-making. Using statistical models and probability theory to make predictions and quantify uncertainty.",
        icon: Calculator,
    },
    {
        title: "Training and Mentorship",
        summary: "Empowering others in data science and AI",
        description:
            "Sharing knowledge and empowering others to excel in data science and AI. Creating learning materials, conducting workshops, and providing one-on-one guidance.",
        icon: Lightbulb,
    },
    {
        title: "Business Growth & Analytics",
        summary: "Data-driven strategies for business expansion",
        description:
            "Leveraging data to identify growth opportunities and craft strategies. Analyzing market trends, customer behavior, and competitive landscapes to inform business decisions.",
        icon: TrendingUp,
    },
];

const WorkGrid = () => {
    return (
        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {expertiseData.map((item, index) => (
                    <WorkCard
                        key={index}
                        title={item.title}
                        summary={item.summary}
                        description={item.description}
                        accentIndex={index}
                        icon={item.icon}
                    />

                ))}
            </div>
        </div>
    );
};

export default WorkGrid;