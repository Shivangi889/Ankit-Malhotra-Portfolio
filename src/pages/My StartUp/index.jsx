import React from "react";
import { Box, Gift, Users, BarChart, Award  , Blocks} from "lucide-react";
import Collage from "../../assets/images/collage.webp";
import { FaInstagram } from "react-icons/fa";


const Card = ({ title, children }) => (
  <div className="bg-[#fff27d] backdrop-blur-sm border-l-4 border-black p-6 md:p-10 text-black shadow-xl animate-fade-in w-full max-w-5xl my-6">
    {title && <h2 className="text-3xl md:text-4xl font-bold font-tenor-sans mb-4">{title}</h2>}
    {children}
  </div>
);

const StatCard = ({ icon, number, label,brief }) => (
  <div className="flex flex-col items-center p-6 bg-white/90 rounded-lg shadow-md text-center">
    <div className="p-3 bg-[#fff27d] rounded-full mb-3">
      {React.cloneElement(icon, { className: "w-8 h-8 text-black" })}
    </div>
    <span className="text-4xl font-bold font-tenor-sans text-black ">{number}</span>
    <span className="text-lg text-gray-800 mt-2 font-tenor-sans">{label}</span>
    <p className="text-lg text-gray-800 mt-2 font-tenor-sans">{brief}</p>
  </div>
);

const WhiffsOfNature = () => {
  return (
    <div className="bg-[#fff] min-h-screen px-4 py-12">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="sm:text-[70px] text-[40px] font-light font-tenor-sans text-black">
          Whiffs of Nature
        </h1>
        <p className="text-xl font-semibold text-gray-700 font-tenor-sans">
          Crafting Culture, Gifting Joy – and Building Products with Purpose
        </p>
        <p className="mt-2 font-bold text-sm text-gray-600 font-tenor-sans">
          My Tenure: June 2020 - September 2025
        </p>
      </div>

      {/* Image background with glass cards */}
      <section
        className="relative w-full bg-fixed bg-cover bg-center flex flex-col items-center justify-center py-10 px-4 md:px-10"
        style={{ backgroundImage: `url(${Collage})` }}
      >
        {/* Spark */}
        <Card title="The Spark">
          <p className="text-lg leading-relaxed text-black/90 mb-4 font-tenor-sans">
           Whiffs of Nature was born in the summer of 2020, in a slowly reawakening Mumbai. It started as a small, spirited idea between me and my best friend—an attempt to bring color, thoughtfulness, and joy to people’s homes as India emerged from lockdown.
          </p>
          <p className="text-lg text-black/90 font-tenor-sans">
           That year, as the month of Shravan approached—a season rich with Indian festivals like Raksha Bandhan and Ganesh Chaturthi—we saw a shift in consumer sentiment. People still wanted to celebrate, but traditional gifting felt impersonal. There was a clear gap: the need for creative, locally available, highly personalized gifts that reflected culture with a fresh twist.
          </p>
             <p className="text-lg text-black/90 font-tenor-sans">
             This was my first product-market fit moment. We validated early interest by testing our candles and gift sets in local flea markets—watching what caught attention, what sold, and what sparked conversations. Each launch became a form of user testing, and every stall, a live research lab.
             </p>
        </Card>

        {/* Vision */}
        <Card title="The Vision">
          <p className="text-black/85 font-tenor-sans">
          Our goal was to create bespoke, giftable candles that felt rooted in Indian tradition, yet unexpected in form and experience. From “Chai Ki Tapri” candle sets inspired by Mumbai tea stalls to festival-themed packaging aligned with Diwali, every product was designed to tell a story.
          </p>
             <p className="text-lg text-black/90 font-tenor-sans">We weren't just selling candles—we were delivering delight in a box. And through every touchpoint—product, packaging, messaging—we were building a brand rooted in culture, creativity, and customer empathy.</p>
        </Card>

        {/* My Role */}
        <Card title="My Role: Building Products and Driving Growth">
          <ul className="list-disc list-inside space-y-2 text-black/85 font-tenor-sans">
            <li><strong>Product Development & Strategy:</strong> I led ideation and design of new collections, managed production timelines, sourced materials, and built fulfillment workflows—planning seasonal “roadmaps” around cultural calendars and customer needs.</li>
            <li><strong>Customer Discovery & Market Testing:</strong> Each new idea began with insights from users. We tested concepts in real-time at flea markets, adjusting scent profiles, packaging, and messaging based on live feedback.</li>
            <li><strong>Go-to-Market Execution:</strong>  I built and executed our GTM plans—launching product lines for major festivals, mapping messaging to cultural moments, and differentiating our offerings through thoughtful branding.</li>
            <li><strong>Marketing & Acquisition:</strong>  I led growth marketing using Meta and Google ads, paired with email and CRM strategies. Every campaign was data-informed, designed to convert and retain.</li>
            <li><strong>Brand Positioning & Expansion:</strong> When consumer brands began reaching out for gifting support, I launched Fête, a sister brand focused on luxury B2B gifting—ensuring our core brand Whiffs retained its retail focus while unlocking a new vertical.</li>
          </ul>
        </Card>

        {/* Milestones - Graphic Version */}
        <Card title="Milestones & Impact">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <StatCard
              icon={<Box size={24} />}
              number="12,000+"
              label="Candles Delivered"
              brief=" → Across retail, gifting, and event-based sales over 3 years."
            />
            <StatCard
              icon={<Gift size={24} />}
              number="10"
              label="Corporate Diwali Campaigns"
              brief=" → Totalling 3,000+ custom gift boxes for major B2B clients."
            />
            <StatCard
              icon={<Users size={24} />}
              number="60%"
              label="Customer Retention"
              brief=" → Through repeat purchase behavior and community-driven brand affinity."
            />
            <StatCard
              icon={<BarChart size={24} />}
              number="7+"
              label=" High-Stakes PR Campaigns"
               brief=" → Fully owned and executed under Fête for top wellness and beauty brands."
            />
            <StatCard
              icon={<Award size={24} />}
              number="5+"
              label=" Operational Tools Integrated"
              brief=" → Canva, Wix, Meta Ads, Excel, Google Suite, CRM platforms for GTM enablement."
            />
              <StatCard
              icon={< Blocks size={24} />}
              number="30+"
              label=" Flea Markets & Pop-Ups"
              brief=" → Deployed for product testing, pricing validation, and real-time customer feedback."
            />
          </div>
        </Card>

        {/* Reflection - Enhanced Visual */}
        <Card title="The Reflection">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-black/85 mb-4">
Whiffs of Nature taught me what it means to build products with empathy. From understanding why a scent matters to seeing how packaging shapes perception, I learned that every detail matters when you’re creating something people invite into their lives.              </p>
            <p className="text-black/85 mb-4">It also showed me the power of brand storytelling and user-led iteration—skills that are at the heart of great product marketing and product management. Whether I was navigating festival season demand or pitching to corporate clients, I was building strategy, testing assumptions, and learning fast.</p>   
              <p className="italic text-black/80">
If I had to sum it up?
 A culture-rooted, creativity-led venture that proved thoughtful design and bold ideas can thrive—even in uncertain times.              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg shadow-inner flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-tenor-sans font-bold mb-2">5</div>
                <div className="text-lg">Years of Fragrant Innovation</div>
                <div className="h-1 w-16 bg-black mx-auto my-3"></div>
                <div className="text-sm">From flea markets to corporate gifting</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Instagram */}
        <Card>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold mb-6">Follow Our Journey</h3>
            <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
        <a
                            href="https://www.instagram.com/whiffsofnature_kp/ "
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram"
                        >
           <FaInstagram  size={25} className="text-gray-800 hover:text-green-800 hover:scale-110 transition duration-200"/>
          
          </a> 
             <a
                            href="https://www.instagram.com/fete_kp/  "
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram"
                        >
           <FaInstagram  size={25} className="text-gray-800 hover:text-green-800 hover:scale-110 transition duration-200"/>
          
          </a> 
           </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default WhiffsOfNature;