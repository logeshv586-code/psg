import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import OrganizationalPreparednessImg from "../assets/new images/Organizational Preparedness.png";
import EnhancedEnvironmentalImg from "../assets/new images/Enhanced Environmental.png";
import EnvironmentalManagementImg from "../assets/new images/Environmental Management - Real.png";
import SustainabilityReportImg from "../assets/new images/Sustainability Report - Real.png";
import InnovativeTechnologiesImg from "../assets/new images/Innovative Sustainability Tech - Real.png";

const Environmental = () => {
  const [openSection, setOpenSection] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleAccordion = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-start relative bg-cover bg-center parallax-slow"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${EnhancedEnvironmentalImg}')`
        }}
      >
        <div className="container mx-auto px-6 pt-24 md:pt-20">
            <div className={`max-w-3xl text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <img 
                  src="https://www.psgbiz.com/wp-content/uploads/2024/12/environmental-white-logo-300x124.png" 
                  alt="PSG Logo" 
                  className={`h-10 md:h-16 mb-6 md:mb-8 animate-fade-in-up stagger-1 hover-scale`} 
                />
                <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words animate-fade-in-up stagger-2 hover-scale`}>
                  Environmental Consultancy and Studies
                </h1>
                <p className={`text-base sm:text-lg md:text-xl italic mb-3 md:mb-4 animate-fade-in-up stagger-3 hover-scale`}>
                  "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another"
                </p>
                <p className={`text-sm md:text-lg animate-fade-in-up stagger-4 hover-scale`}>— Mahatma Gandhi</p>
            </div>
        </div>
        <div 
          className={`absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer interactive-button ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 stagger-5`}
          onClick={() => scrollToSection('services-intro')}
        >
            <p className="text-xs md:text-sm uppercase tracking-widest mb-2 animate-bounce-subtle">Scroll Down</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mx-auto animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </section>

      {/* Services Introduction */}
      <section id="services-intro" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-left">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4 interactive-button hover-glow">SERVICES</span>
                    <h2 className="text-4xl font-bold mb-6 text-green-800 animate-fade-in-up stagger-2 hover-scale">Shaping a Sustainable Future Together</h2>
                </div>
                <div className="animate-fade-in-right">
                    <p className="text-gray-600 text-lg leading-relaxed animate-fade-in-up stagger-3 hover-lift">
                        At PSG, we provide expert environmental consulting services designed to help businesses implement sustainable practices, minimize their environmental footprint, and comply with global sustainability standards. Our comprehensive solutions guide organizations toward long-term sustainability, ensuring a positive impact on the planet and future generations.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 space-y-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 animate-fade-in-up">Our Environmental Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up stagger-2">
              Discover our comprehensive range of environmental consulting services designed to help your organization achieve sustainability goals and regulatory compliance.
            </p>
          </div>
            
            {/* Item 1: Environmental Management Support */}
            <div className={`border rounded-2xl overflow-hidden interactive-card hover-lift ${openSection === 1 ? 'bg-gray-50 border-gray-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left interactive-button focus:outline-none" onClick={() => toggleAccordion(1)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide animate-fade-in-left">ENVIRONMENTAL MANAGEMENT SUPPORT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-500 ease-out ${openSection === 1 ? 'rotate-180 text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 transition-all duration-500 ease-out ${openSection === 1 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center animate-fade-in-left stagger-1"><span className="text-green-600 mr-3 text-lg">✔</span> Preparation of EIA/ESIA Reports</li>
                            <li className="flex items-center animate-fade-in-left stagger-2"><span className="text-green-600 mr-3 text-lg">✔</span> Modeling of Air Emissions, Soil, Groundwater Spills</li>
                            <li className="flex items-center animate-fade-in-left stagger-3"><span className="text-green-600 mr-3 text-lg">✔</span> Preparation of Emission Inventories</li>
                            <li className="flex items-center animate-fade-in-left stagger-4"><span className="text-green-600 mr-3 text-lg">✔</span> Best Available Technology Evaluations</li>
                            <li className="flex items-center animate-fade-in-left stagger-5"><span className="text-green-600 mr-3 text-lg">✔</span> Environmental Basis of Design Documents</li>
                            <li className="flex items-center animate-fade-in-left stagger-1"><span className="text-green-600 mr-3 text-lg">✔</span> Emergency Response Manuals and Procedures</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-xl hover-scale">
                            <img src={EnvironmentalManagementImg} alt="Environmental Management" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 2: Sustainability Management Report */}
            <div className={`border rounded-2xl overflow-hidden interactive-card hover-lift ${openSection === 2 ? 'bg-gray-50 border-gray-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left interactive-button focus:outline-none" onClick={() => toggleAccordion(2)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide animate-fade-in-right">SUSTAINABILITY MANAGEMENT REPORT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-500 ease-out ${openSection === 2 ? 'rotate-180 text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 transition-all duration-500 ease-out ${openSection === 2 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center animate-fade-in-right stagger-1"><span className="text-green-600 mr-3 text-lg">✔</span> Preparation of Sustainability Reports (GRI)</li>
                            <li className="flex items-center animate-fade-in-right stagger-2"><span className="text-green-600 mr-3 text-lg">✔</span> Greenhouse Gas Emission Inventories</li>
                            <li className="flex items-center animate-fade-in-right stagger-3"><span className="text-green-600 mr-3 text-lg">✔</span> Assessment for Ecological Footprint</li>
                            <li className="flex items-center animate-fade-in-right stagger-4"><span className="text-green-600 mr-3 text-lg">✔</span> Clean Development Mechanism (CDM) Projects</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-xl hover-scale">
                            <img src={SustainabilityReportImg} alt="Sustainability Report" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 3: Innovative Technologies */}
            <div className={`border rounded-2xl overflow-hidden interactive-card hover-lift ${openSection === 3 ? 'bg-gray-50 border-gray-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left interactive-button focus:outline-none" onClick={() => toggleAccordion(3)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide animate-fade-in-left">INNOVATIVE TECHNOLOGIES FOR SUSTAINABILITY</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-500 ease-out ${openSection === 3 ? 'rotate-180 text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 transition-all duration-500 ease-out ${openSection === 3 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center animate-fade-in-left stagger-1"><span className="text-green-600 mr-3 text-lg">✔</span> Promoting Healthy Disruption in Markets</li>
                            <li className="flex items-center animate-fade-in-left stagger-2"><span className="text-green-600 mr-3 text-lg">✔</span> Out-of-the-box Sustainable Development</li>
                            <li className="flex items-center animate-fade-in-left stagger-3"><span className="text-green-600 mr-3 text-lg">✔</span> Robust Sustainable Business Models</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-xl hover-scale">
                            <img src={InnovativeTechnologiesImg} alt="Innovative Technologies" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 4: Organizational Preparedness */}
            <div className={`border rounded-2xl overflow-hidden interactive-card hover-lift ${openSection === 4 ? 'bg-gray-50 border-gray-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left interactive-button focus:outline-none" onClick={() => toggleAccordion(4)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide animate-fade-in-left">ORGANIZATIONAL PREPAREDNESS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-500 ease-out ${openSection === 4 ? 'rotate-180 text-green-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 transition-all duration-500 ease-out ${openSection === 4 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center animate-fade-in-left stagger-1"><span className="text-green-600 mr-3 text-lg">✔</span> Implementing International Standard Systems</li>
                            <li className="flex items-center animate-fade-in-left stagger-2"><span className="text-green-600 mr-3 text-lg">✔</span> Organizational Sustainable Strategy</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-xl hover-scale">
                            <img src={OrganizationalPreparednessImg} alt="Organizational Preparedness" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      
    </Layout>
  );
};

export default Environmental;
