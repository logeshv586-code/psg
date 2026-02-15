import { useState } from "react";
import { Phone, Mail, ArrowRight, Plane } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Images
import skydivingImg from "@/assets/tourism_images/07f201db989b67b27e1078ab2c931eae-scaled-qyaqk9uwzzxpgibik3iy0w68dr5sfewdof8lv9sbrk.jpg";
import burjImg from "@/assets/tourism_images/3450719924e79a232e2e120205fc7ca0-scaled-qyaqp5mqi0mbrl871pi6h5tfgt3feta6ol8em0jpg0.jpg";
import marinaImg from "@/assets/tourism_images/6f367ded12caace1a60c9659d7eb6918-1-qyaq23n8vb24zwpso8qlth9exkqbm2r76h6nuoqc28.jpg";
import camelImg from "@/assets/tourism_images/890bfe499b5c1f6b2f848b53920805c2-qyap0zyl3q9oq0lybpdqwcbet1lqs6gmeu5owhqro0.jpg";
import ferrariImg from "@/assets/tourism_images/d2d02fe1c8745078ebc1ec38294a045d-scaled-qyaqshy2st711odfj5ifcbgfi4mes2jtt4qk1flbbk.jpg";
import coupleImg from "@/assets/tourism_images/174613dbe56b4f7e41a6d704e6ee3ab5-1024x1024.png";

import group197 from "@/assets/tourism_images/Group-197.png";
import group8 from "@/assets/tourism_images/Group-8.png";
import group9 from "@/assets/tourism_images/Group-9.png";
import maskGroup15 from "@/assets/tourism_images/Mask-group-15.png";
import visaImg from "@/assets/tourism_images/Group-358-2-qyasg9ilk47k6xnmh3q2xoik1at1gc3o7eqizg6sze.png";
import group337 from "@/assets/tourism_images/Group-337.png"; // UAE extra image
import group582 from "@/assets/tourism_images/Group-582.svg"; // Souvenir signature?
import group283 from "@/assets/tourism_images/Group-283.png"; // Souvenir signature?

// UAE Logos
import logo378 from "@/assets/tourism_images/Group-378-1-150x69.png";
import logo380 from "@/assets/tourism_images/Group-380-1.png";
import logo383 from "@/assets/tourism_images/Group-383-1.png";
import logo384 from "@/assets/tourism_images/Group-384-1.png";
import logo385 from "@/assets/tourism_images/Group-385-1.png";
import logo388 from "@/assets/tourism_images/Group-388-1.png";

import logo258 from "@/assets/tourism_images/logo-258x300.png";

// Saudi Logos
import saudi627 from "@/assets/tourism_images/Group-627.png";
import saudi628 from "@/assets/tourism_images/Group-628.png";
import saudi392 from "@/assets/tourism_images/Group-392.png";
import saudi629 from "@/assets/tourism_images/Group-629.png";
import saudi634 from "@/assets/tourism_images/Group-634.png";
import saudi633 from "@/assets/tourism_images/Group-633.png";
import saudi632 from "@/assets/tourism_images/Group-632.png";
import saudi631 from "@/assets/tourism_images/Group-631.png";

import heroTourism from "@/assets/new images/Enhanced Dubai Skyline.png"; 

const Tourism = () => {
  const [activeTab, setActiveTab] = useState("uae");

  const tabs = [
    { id: "uae", label: "UAE Tourism" },
    { id: "saudi", label: "Saudi Tourism" },
    { id: "solo", label: "Solo Travelers & Backpackers" },
    { id: "honeymoon", label: "Romantic Honeymoon Packages" },
    { id: "group", label: "Group Tours with a Personal Touch" },
  ];

  const tabContent: Record<string, {
      title: string;
      text: React.ReactNode;
      image: string;
      logos?: string[];
      extraImage?: string;
  }> = {
      uae: {
          title: "UAE Tourism",
          text: (
            <>
              <p className="mb-4">At PSG, we are delighted to offer an exclusive selection of customized tour packages tailored to help you explore the most Iconic and Breathtaking attractions across the UAE.</p>
              <p>Whether you're seeking an adventure, relaxation or cultural discovery we ensure every experience is unforgettable.</p>
            </>
          ),
          image: marinaImg,
          logos: [logo378, logo380, logo388, logo383, logo384, logo385],
          extraImage: group337
      },
      saudi: {
          title: "SAUDI TOURISM",
          text: (
              <>
                  <p className="mb-4">At PSG, we are delighted to offer an exclusive selection of customized tour packages tailored to help you explore the most Iconic and Breathtaking attractions across the UAE.</p>
                  <p>Whether you're seeking an adventure, relaxation or cultural discovery we ensure every experience is unforgettable.</p>
              </>
          ),
          image: camelImg,
          logos: [saudi627, saudi628, saudi392, saudi629, saudi634, saudi633, saudi632, saudi631]
      },
      solo: {
          title: "SOLO TRAVELERS & BACKPACKERS",
          text: (
              <>
                  <p className="mb-4">We understand that life may feel overwhelming and sometimes all you need is an escape to reset and recharge.</p>
                  <p>Whether you're a solo traveler seeking adventure or a backpacker in search of new horizons our tailored travel and adventure packages are designed to help you step away from the everyday and embark on a transformative journey.</p>
              </>
          ),
          image: skydivingImg,
      },
      honeymoon: {
          title: "ROMANTIC HONEYMOON PACKAGES",
          text: (
              <>
                  <p className="mb-4">Celebrate your love with a honeymoon that's as unique as your relationship. Our exclusive Honeymoon Packages are crafted for couples seeking an Intimate and Memorable Escape.</p>
                  <p>From secluded beaches to cozy mountain retreats each itinerary is filled with thoughtful surprises and once in a lifetime experience to make your honeymoon truly special.</p>
              </>
          ),
          image: burjImg,
      },
      group: {
          title: "GROUP TOURS WITH A PERSONAL TOUCH",
          text: (
              <>
                  <p className="mb-4">At PSG, we believe group travel is about more than just sightseeing, it's about creating lasting bonds.</p>
                  <p className="mb-4">Our group tours feature Fun and Interactive experiences from team building activities, Gaming to Cozy Campfires and cultural Immersions.</p>
                  <p>Whether you're traveling with family, friends or colleagues, our group tours offer a perfect blend of adventure, connection and shared experiences that will stay with you long after the trip ends.</p>
              </>
          ),
          image: ferrariImg,
      }
  };

  const currentContent = tabContent[activeTab];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTourism}
            alt="Tourism Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white h-full flex flex-col justify-center">
          <div className="max-w-4xl mt-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">Tourism</h1>
            
            <div className="relative pl-6 border-l-4 border-[#C785EC] mb-12">
              <p className="text-xl md:text-3xl font-light leading-relaxed italic">
                "Traveling, It leaves you speechless, then turns you into a storyteller"
              </p>
              <p className="text-lg mt-4 font-semibold text-[#C785EC]">– Ibn Battuta</p>
            </div>
            
            <a href="#tour-form" className="bg-[#0e1a35] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-900 transition-all flex items-center gap-3 group w-fit">
              Get in touch 
              <span className="bg-[#C785EC] rounded-full w-8 h-8 flex items-center justify-center text-[#0e1a35] group-hover:scale-110 transition-transform">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>
          
        </div>
      </section>

      {/* Explore the World Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 relative">
             <div className="absolute -top-10 -left-20 pointer-events-none hidden md:block">
                <img src={group8} alt="Decor" className="w-64 opacity-50" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#0e1a35] leading-tight relative z-10">
              Explore the World<br />
              with PSG Tourism
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <p>
                Start planning your dream getaway today and create memories that will last forever.
                </p>
                <p>
                At PSG Tourism, we focus on creating custom travel experiences for all types of travellers. Whether you're seeking adventure through trekking and hiking, looking to Indulge in a Romantic Honeymoon, or Planning a memorable Group Tour, we offer the perfect package for you. Our carefully crafted itineraries span destinations across the globe, offering something for every type of explorer.
                </p>
            </div>
             <div className="absolute -bottom-10 -right-20 pointer-events-none hidden md:block">
                <img src={group8} alt="Decor" className="w-64 opacity-50 transform rotate-180" />
            </div>
          </div>

          <div className="w-full mb-24">
             <img src={group197} alt="World Map" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Effortless Travel Solutions */}
      <section className="py-24 bg-[#FDF4FF]">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
                <div className="flex-1">
                    <button className="bg-white text-[#0e1a35] px-6 py-2 rounded-full font-bold text-sm mb-6 border border-gray-100 shadow-sm flex items-center gap-2">
                        Why Choose PSG <span className="bg-[#C785EC] rounded-full w-2 h-2"></span>
                    </button>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0e1a35]">
                        Effortless Travel<br />
                        Solutions with PSG
                    </h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            At PSG Tourism, we focus on creating custom travel experiences for all types of travellers. Whether you're seeking adventure through trekking and hiking, looking to Indulge in a Romantic Honeymoon, or Planning a memorable Group Tour, we offer the perfect package for you. Our carefully crafted itineraries span destinations across the globe, offering something for every type of explorer.
                        </p>
                        <p>
                            In addition to visa services, PSG provides affordable, tailored tourism packages designed to meet the needs of both leisure and business travelers. Our solutions are crafted to deliver exceptional experiences without exceeding your budget.
                        </p>
                        <p>
                            Choose PSG for hassle-free travel planning, expert guidance, and seamless support every step of the way.
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex gap-4">
                     <div className="flex-1">
                        <img src={group9} alt="Travel 1" className="w-full h-auto rounded-3xl shadow-lg" />
                     </div>
                     <div className="flex-1 pt-12">
                        <img src={maskGroup15} alt="Travel 2" className="w-full h-auto rounded-3xl shadow-lg" />
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* VISA Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
                <div className="flex-1 w-full">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img src={visaImg} className="w-full h-full object-cover" alt="Visa Services" />
                    </div>
                </div>
                <div className="flex-1">
                    <button className="bg-white text-[#0e1a35] px-6 py-2 rounded-full font-bold text-sm mb-6 border border-gray-100 shadow-sm flex items-center gap-2">
                        WHAT WE DO <span className="bg-[#C785EC] rounded-full w-2 h-2"></span>
                    </button>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0e1a35]">VISA Services</h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                        <p>
                            At PSG, we offer comprehensive end-to-end visa consultation services for GCC countries, ensuring a smooth and efficient application process.
                        </p>
                        <p>
                            Our expert team simplifies the visa procedure with minimal documentation requirements saving your valuable time and effort.
                        </p>
                         <p>
                            At PSG, we offer comprehensive end-to-end visa consultation services for GCC countries, ensuring a smooth and efficient application process.
                        </p>
                    </div>
                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-3 text-[#0e1a35] font-semibold text-lg">
                            <span className="text-[#C785EC]"><ArrowRight size={20} /></span> Preparation of Dubai Visas
                        </div>
                         <div className="flex items-center gap-3 text-[#0e1a35] font-semibold text-lg">
                            <span className="text-[#C785EC]"><ArrowRight size={20} /></span> Preparation of Saudi Arabia Visas
                        </div>
                    </div>
                    
                    <button className="bg-[#0e1a35] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-900 transition-all flex items-center gap-3 group">
                      Learn More 
                      <span className="bg-[#C785EC] rounded-full w-8 h-8 flex items-center justify-center text-[#0e1a35] group-hover:scale-110 transition-transform">
                        <ArrowRight size={18} />
                      </span>
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* PSG Tourism (Tabs) */}
      <section className="py-24 bg-[#FDF4FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12">
                <button className="bg-white text-[#0e1a35] px-6 py-2 rounded-full font-bold text-sm mb-6 border border-gray-100 shadow-sm flex items-center gap-2 mx-auto">
                    WHAT WE DO <span className="bg-[#C785EC] rounded-full w-2 h-2"></span>
                </button>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0e1a35]">PSG Tourism</h2>
             </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-lg font-medium transition-all pb-4 border-b-2 px-4 ${
                    activeTab === tab.id
                      ? "text-[#0e1a35] border-[#0e1a35] font-bold"
                      : "text-gray-500 border-transparent hover:text-[#C785EC]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
                 <div className="flex-1 pt-8">
                    <h3 className="text-3xl font-bold mb-8 text-[#0e1a35] uppercase">{currentContent.title}</h3>
                    
                    {currentContent.logos && (
                        <div className="flex flex-wrap gap-4 mb-8">
                             {currentContent.logos.map((logo, index) => (
                                 <img key={index} src={logo} alt="Logo" className="h-12 object-contain" />
                             ))}
                        </div>
                    )}

                    {currentContent.extraImage && (
                        <div className="mb-8">
                            <img src={currentContent.extraImage} alt="Extra" className="h-16 object-contain" />
                        </div>
                    )}

                    <div className="text-lg text-gray-700 leading-relaxed mb-8">
                        {currentContent.text}
                    </div>

                    <button className="bg-[#0e1a35] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-900 transition-all flex items-center gap-3 group">
                      Learn more 
                      <span className="bg-[#C785EC] rounded-full w-8 h-8 flex items-center justify-center text-[#0e1a35] group-hover:scale-110 transition-transform">
                        <ArrowRight size={18} />
                      </span>
                    </button>
                 </div>
                 <div className="flex-1 w-full">
                     <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
                         <img src={currentContent.image} alt={currentContent.title} className="w-full h-full object-cover" />
                     </div>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Souvenir Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
                <div className="flex-1">
                    <button className="bg-white text-[#0e1a35] px-6 py-2 rounded-full font-bold text-sm mb-6 border border-gray-100 shadow-sm flex items-center gap-2">
                        WHY CHOOSE PSG <span className="bg-[#C785EC] rounded-full w-2 h-2"></span>
                    </button>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0e1a35]">A Thoughtful Souvenir</h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            We believe the memories of your travel should live on long after you return home.
                        </p>
                        <p>
                            As a token of appreciation for choosing PSG, we present our valued customers with a special gift at the end of every tour.
                        </p>
                        <p>
                            These keepsakes are our way of saying thank you and ensuring that PSG will always be a part of your travel story.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-6">
                        <img src={group582} alt="Signature" className="h-24 object-contain" />
                        <img src={group283} alt="Signature 2" className="h-16 object-contain" />
                    </div>
                </div>
                <div className="flex-1 relative">
                     <div className="absolute inset-0 bg-[#FDF4FF] rounded-full transform scale-90 translate-x-8 translate-y-8 -z-10"></div>
                     <div className="relative z-10">
                        <img src={coupleImg} alt="Souvenir" className="w-full max-w-md mx-auto rounded-full border-8 border-white shadow-2xl aspect-square object-cover" />
                         
                         {/* Decor elements */}
                         <div className="absolute top-0 right-0 text-[#C785EC] transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
                             <Plane className="w-8 h-8" />
                         </div>
                     </div>
                </div>
           </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-24 bg-[#FDF4FF]" id="tour-form">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
            {/* Left Column: Info */}
            <div>
              <button className="bg-white text-[#0e1a35] px-6 py-2 rounded-full font-bold text-sm mb-6 border border-gray-100 shadow-sm flex items-center gap-2">
                ENQUIRE NOW <span className="bg-[#C785EC] rounded-full w-2 h-2"></span>
              </button>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0e1a35] leading-tight">
                Let PSG Tourism Craft<br />
                Your Next Adventure
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                At PSG Tourism, we believe that travel is more than just a trip.
                It's an opportunity to create meaningful & life-changing experiences.
                <br /><br />
                We are here to help the travellers to Craft an unforgettable journey that
                resonates long after the journey ends.
              </p>

              <div className="space-y-6 mt-12">
                <div className="flex items-center gap-4 text-gray-700 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#0e1a35] group-hover:bg-[#C785EC] transition-colors">
                     <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-medium">+971 72586848</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#0e1a35] group-hover:bg-[#C785EC] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-medium">Sales@psgbiz.com</span>
                </div>
              </div>
              
              <div className="mt-12">
                  <img src={logo258} alt="PSG Logo" className="w-48 object-contain" />
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Your first name</label>
                        <input type="text" placeholder="enter your first name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Your last name</label>
                        <input type="text" placeholder="enter your last name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your email address</label>
                    <input type="email" placeholder="enter your email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Your phone number</label>
                        <input type="tel" placeholder="enter your phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50" />
                    </div>
                     <div>
                        <label className="block text-gray-700 mb-2 font-medium">Your date</label>
                        <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50 text-gray-500" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Your destination</label>
                        <input type="text" placeholder="enter your destination" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Guest</label>
                        <input type="number" placeholder="enter number of guest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C785EC] bg-gray-50" />
                    </div>
                </div>

                <button type="submit" className="w-full bg-[#FDF4FF] text-[#0e1a35] border border-[#f3e8ff] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#F3E8FF] transition-colors mt-4 flex justify-center items-center gap-2">
                  Enquire now <span className="text-[#C785EC]">↗</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      

    </Layout>
  );
};

export default Tourism;
