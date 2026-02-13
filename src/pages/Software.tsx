
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { softwareTabsData } from "./SoftwareData";

const Software = () => {
  const [activeTab, setActiveTab] = useState(softwareTabsData[0].tab);

  const activeTabData = softwareTabsData.find((t) => t.tab === activeTab);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center min-h-[600px] flex items-center"
        style={{
          backgroundImage: "url('https://www.psgbiz.com/wp-content/uploads/2024/12/9a936956f5986fd8d23072ec6feb477c.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for readability */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">
              Software & AI
            </h1>
            
            <div className="mb-12 max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-light leading-relaxed mb-6">
                “The future of healthcare is not just about technology; it's about how to combine technology with human touch”
              </h2>
              <p className="text-xl font-bold">“Steve Jobs”</p>
            </div>

            <a 
              href="#services" 
              className="inline-flex items-center gap-2 text-lg font-semibold hover:text-[#A0E75A] transition-colors group"
            >
              Scroll Down
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="19" 
                viewBox="0 0 20 19" 
                fill="none"
                className="transform group-hover:translate-y-1 transition-transform"
              >
                <path d="M0.231943 9.73851L9.0058 18.5124C9.07995 18.5871 9.16817 18.6465 9.26537 18.687C9.36257 18.7275 9.46682 18.7483 9.57212 18.7483C9.67741 18.7483 9.78167 18.7275 9.87886 18.687C9.97606 18.6465 10.0643 18.5871 10.1384 18.5124L18.9123 9.73851C19.0608 9.58907 19.1442 9.38691 19.1442 9.17619C19.1442 8.96547 19.0608 8.76331 18.9123 8.61387C18.8381 8.53911 18.7499 8.47977 18.6527 8.43927C18.5555 8.39878 18.4513 8.37793 18.346 8.37793C18.2407 8.37793 18.1364 8.39878 18.0392 8.43927C17.942 8.47977 17.8538 8.53911 17.7797 8.61387L9.57212 16.8214L1.36457 8.61387C1.29042 8.53911 1.2022 8.47977 1.105 8.43927C1.00781 8.39878 0.903552 8.37793 0.798256 8.37793C0.69296 8.37793 0.588706 8.39878 0.491508 8.43927C0.394311 8.47977 0.306093 8.53911 0.231943 8.61387C0.083385 8.76331 0 8.96547 0 9.17619C0 9.38691 0.083385 9.58907 0.231943 9.73851Z" fill="currentColor"></path>
                <path d="M9.0058 10.1344C9.07995 10.2092 9.16817 10.2685 9.26537 10.309C9.36257 10.3495 9.46682 10.3704 9.57212 10.3704C9.67741 10.3704 9.78167 10.3495 9.87886 10.309C9.97606 10.2685 10.0643 10.2092 10.1384 10.1344L18.9123 1.36058C19.0608 1.21114 19.1442 1.00898 19.1442 0.79826C19.1442 0.58754 19.0608 0.38538 18.9123 0.235936C18.8381 0.161176 18.7499 0.101837 18.6527 0.0613426C18.5555 0.0208483 18.4513 0 18.346 0C18.2407 0 18.1364 0.0208483 18.0392 0.0613426C17.942 0.101837 17.8538 0.161176 17.7797 0.235936L9.57212 8.44348L1.36457 0.235936C1.29042 0.161176 1.2022 0.101837 1.105 0.0613426C1.00781 0.0208483 0.903552 0 0.798256 0C0.69296 0 0.588706 0.0208483 0.491508 0.0613426C0.394311 0.101837 0.306093 0.161176 0.231943 0.235936C0.083385 0.38538 0 0.58754 0 0.79826C0 1.00898 0.083385 1.21114 0.231943 1.36058L9.0058 10.1344Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section id="services" className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#E8F8D6] text-[#69B51E] px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6">
              SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Empowering Innovation<br />
              with Tailored IT Solutions
            </h2>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200">
            {softwareTabsData.map((tab) => (
              <button
                key={tab.tab}
                onClick={() => setActiveTab(tab.tab)}
                className={`pb-4 px-4 font-semibold text-lg transition-all relative ${
                  activeTab === tab.tab
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Main Description for Tab */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 hidden">{activeTabData?.tab}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {activeTabData?.main_description}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {activeTabData?.cards.map((card, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-start p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-transparent hover:border-gray-100"
                >
                  <div 
                    className="mb-6 transform transition-transform group-hover:scale-110"
                    dangerouslySetInnerHTML={{ __html: card.svg }}
                  />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#69B51E] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section Removed - Handled by Layout's GlobalMapSection */}
    </Layout>
  );
};

export default Software;
