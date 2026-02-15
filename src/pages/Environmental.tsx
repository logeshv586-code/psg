import { useState } from "react";
import Layout from "@/components/layout/Layout";

const Environmental = () => {
  const [openSection, setOpenSection] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-start relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://www.psgbiz.com/wp-content/uploads/2024/12/7a54dfb0668a6bc8a82014168d836a97.jpg')`
        }}
      >
        <div className="container mx-auto px-6 pt-24 md:pt-20">
            <div className="max-w-3xl text-white">
                <img src="https://www.psgbiz.com/wp-content/uploads/2024/12/environmental-white-logo-300x124.png" alt="PSG Logo" className="h-10 md:h-16 mb-6 md:mb-8" />
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words">Environmental Consultancy and Studies</h1>
                <p className="text-base sm:text-lg md:text-xl italic mb-3 md:mb-4">"What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another"</p>
                <p className="text-sm md:text-lg">— Mahatma Gandhi</p>
            </div>
        </div>
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
            <p className="text-xs md:text-sm uppercase tracking-widest mb-2">Scroll Down</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">SERVICES</span>
                    <h2 className="text-4xl font-bold mb-6 text-green-800">Shaping a Sustainable Future Together</h2>
                </div>
                <div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At PSG, we provide expert environmental consulting services designed to help businesses implement sustainable practices, minimize their environmental footprint, and comply with global sustainability standards. Our comprehensive solutions guide organizations toward long-term sustainability, ensuring a positive impact on the planet and future generations.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 space-y-4">
            
            {/* Item 1: Environmental Management Support */}
            <div className={`border rounded-2xl overflow-hidden ${openSection === 1 ? 'bg-[#f0fdf4] border-[#16a34a]' : 'border-gray-200'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left" onClick={() => toggleAccordion(1)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide">ENVIRONMENTAL MANAGEMENT SUPPORT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${openSection === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 block ${openSection === 1 ? '' : 'hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Preparation of EIA/ESIA Reports</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Modeling of Air Emissions, Soil, Groundwater Spills</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Preparation of Emission Inventories</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Best Available Technology Evaluations</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Environmental Basis of Design Documents</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Emergency Response Manuals and Procedures</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/b1a09fa6251cd61180db14220781156d-scaled-qyaw8ot9658qk1ple4v3d973d8jwe9tntczqzev36e.jpg" alt="Environmental Management" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 2: Sustainability Management Report */}
            <div className={`border rounded-2xl overflow-hidden ${openSection === 2 ? 'bg-[#f0fdf4] border-[#16a34a]' : 'border-gray-200'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left" onClick={() => toggleAccordion(2)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide">SUSTAINABILITY MANAGEMENT REPORT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${openSection === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 block ${openSection === 2 ? '' : 'hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Preparation of Sustainability Reports (GRI)</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Greenhouse Gas Emission Inventories</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Assessment for Ecological Footprint</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Clean Development Mechanism (CDM) Projects</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/5593cea288782c77260f94caa508d976-qyawi1bh4u1e0g4st6bj5wa416haxwxkfmjksh05au.jpg" alt="Sustainability Report" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 3: Innovative Technologies */}
            <div className={`border rounded-2xl overflow-hidden ${openSection === 3 ? 'bg-[#f0fdf4] border-[#16a34a]' : 'border-gray-200'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left" onClick={() => toggleAccordion(3)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide">INNOVATIVE TECHNOLOGIES FOR SUSTAINABILITY</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${openSection === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 block ${openSection === 3 ? '' : 'hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Promoting Healthy Disruption in Markets</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Out-of-the-box Sustainable Development</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Robust Sustainable Business Models</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/7d714e3dcc774d47060977d1a4c6a770-scaled-qyawm5tz4nooyu52pyil3usxw25aq3b5o1mam6vxzq.jpg" alt="Innovative Technologies" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Item 4: Organizational Preparedness */}
            <div className={`border rounded-2xl overflow-hidden ${openSection === 4 ? 'bg-[#f0fdf4] border-[#16a34a]' : 'border-gray-200'}`}>
                <button className="w-full px-8 py-6 flex justify-between items-center text-left" onClick={() => toggleAccordion(4)}>
                    <span className="text-xl font-bold text-green-800 uppercase tracking-wide">ORGANIZATIONAL PREPAREDNESS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${openSection === 4 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`px-8 pb-8 block ${openSection === 4 ? '' : 'hidden'}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Implementing International Standard Systems</li>
                            <li className="flex items-center"><span className="text-green-600 mr-2">✔</span> Organizational Sustainable Strategy</li>
                        </ul>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/a3f650220a22129759e5113045663730-scaled-qyawql9j47sc2z180o7r8n806z3v694m9u2p16v6ue.jpg" alt="Organizational Preparedness" className="w-full h-auto" />
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
