import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import DigitalHealthHero from "../assets/digital-health.jpg";

const DigitalHealth = () => {
  const [activeTab, setActiveTab] = useState('scribing');

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${DigitalHealthHero})`,
        }}
      >
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-bold mb-6">Digital Health</h1>
            <p className="text-xl italic mb-4">"Great things in business are never done by one person, they're done by a team of people"</p>
            <p className="text-lg">— Unknown</p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
          <p className="text-sm uppercase tracking-widest mb-2">Scroll Down</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">SERVICES</span>
              <h2 className="text-4xl font-bold mb-6">Streamlined and Accurate Healthcare Documentation Services</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Prime source Global, we offer a range of specialized healthcare documentation services designed to streamline your medical practice and improve operational efficiency. Our team of experts brings industry-leading skills and in-depth knowledge of medical terminology, compliance standards, and patient care to help you maintain a smooth, accurate, and cost-effective workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap border-b border-gray-200 mb-12">
            <button 
              className={`px-8 py-4 font-semibold transition ${activeTab === 'scribing' ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => showTab('scribing')}
            >
              Virtual Medical Scribing
            </button>
            <button 
              className={`px-8 py-4 font-semibold transition ${activeTab === 'transcription' ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => showTab('transcription')}
            >
              Medical Transcription
            </button>
            <button 
              className={`px-8 py-4 font-semibold transition ${activeTab === 'coding' ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => showTab('coding')}
            >
              Medical Coding
            </button>
            <button 
              className={`px-8 py-4 font-semibold transition ${activeTab === 'summarization' ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => showTab('summarization')}
            >
              Medical Summarization
            </button>
          </div>

          {/* Tab Content: Scribing */}
          <div className={`tab-content ${activeTab === 'scribing' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Virtual Medical Scribing</h3>
                <p className="text-gray-600 mb-6">Introducing Prime Source Global's Virtual Scribe Services: Precision and Efficiency in Healthcare Documentation!</p>
                <p className="text-gray-600 mb-8">Virtual medical scribes are revolutionizing healthcare across the U.S. Unlike traditional in-person scribes, Prime Source Global's virtual scribes offer unparalleled flexibility, serving practices from anywhere in the world.</p>
                <h4 className="text-xl font-bold mb-4">Benefits:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h5 className="font-bold mb-1">Cost-effective</h5>
                    <p className="text-xs text-gray-600">Our scribes go beyond charting, handling various administrative tasks.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h5 className="font-bold mb-1">Non-intrusive</h5>
                    <p className="text-xs text-gray-600">Our scribes go beyond charting, handling various administrative tasks.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/a8ba5c8afdb45991203a5eec73595a6f-qydy79aaxqwqv79a1it4eugpoy70bbo1ewyaluyqv2.jpg" alt="Virtual Scribing" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Tab Content: Transcription */}
          <div className={`tab-content ${activeTab === 'transcription' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Medical Transcription</h3>
                <p className="text-gray-600 mb-6">Experience Excellence in Medical Transcription with MD24 Global!</p>
                <p className="text-gray-600 mb-8">We understand that accuracy and timeliness are critical in healthcare documentation. Our transcription services are designed to meet the high standards of medical professionals while ensuring rapid turnaround times.</p>
                <h4 className="text-xl font-bold mb-4">Why Prime Source Global?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• High Accuracy & HIPAA Compliant</li>
                  <li>• Rapid Turnaround Times</li>
                  <li>• Seamless EHR Integration</li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/7cd298736d839252c55182e6dae504a3-1-qyduuqfamhx676bptfb8p9czmc8pch726dkzclo0ou.jpg" alt="Medical Transcription" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Tab Content: Coding */}
          <div className={`tab-content ${activeTab === 'coding' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Medical Coding</h3>
                <p className="text-gray-600 mb-6">Unlock Efficiency with Prime Source Global's Medical Coding Services!</p>
                <p className="text-gray-600 mb-8">Our certified coders ensure that your practice remains compliant while maximizing revenue through accurate coding. We stay up-to-date with the latest ICD-10, CPT, and HCPCS guidelines.</p>
                <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• ICD-10 & CPT Expertise</li>
                  <li>• Revenue Cycle Optimization</li>
                  <li>• Compliance & Audit Support</li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/1f69e56d9a8c12bd79a5ccfd18663010-1-qydv92goujjl93i544df8551qvl7qb3p5bqjtievsu.jpg" alt="Medical Coding" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Tab Content: Summarization */}
          <div className={`tab-content ${activeTab === 'summarization' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Medical Summarization</h3>
                <p className="text-gray-600 mb-6">Streamlining Legal Cases with Prime Source Global's Medical Summarization!</p>
                <p className="text-gray-600 mb-8">We provide concise, accurate, and easy-to-read medical summaries for legal and insurance purposes. Our team of medical experts distills complex medical records into actionable insights.</p>
                <h4 className="text-xl font-bold mb-4">Our Expertise:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chronological Record Organization</li>
                  <li>• Key Findings Identification</li>
                  <li>• Medical Opinion Summaries</li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://www.psgbiz.com/wp-content/uploads/elementor/thumbs/a62a93798935272379e491e847335e23-qydvlt7z2e4mpxp8271n12l29j0j3vlyv2n75p8g46.jpg" alt="Medical Summarization" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default DigitalHealth;
