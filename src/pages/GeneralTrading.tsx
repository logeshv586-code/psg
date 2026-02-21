import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe, 
  Shield, 
  Award, 
  TrendingUp,
  Building2,
  Package,
  Truck,
  Users,
  CheckCircle,
  Star,
  Clock,
  MapPin,
  BarChart3
} from "lucide-react";
import heroTrading from "@/assets/new images/Trading Website Hero 2.png";
import trustBg from "@/assets/new images/Trading Website Hero 1.png";
import { AnimatedSection, AnimatedCard, AnimatedButton, StaggeredList } from "@/components/shared/AnimatedComponents";
import { generalTradingData } from "./GeneralTradingData";
import type { TradingContent } from "@/types/trading";

const GeneralTrading = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "pipes", label: "Steel Pipes" },
    { id: "industrial", label: "Industrial Supplies" },
    { id: "logistics", label: "Logistics" },
  ];

  const tradingStats = [
    { label: "Years Experience", value: "15+", icon: Clock },
    { label: "Global Partners", value: "500+", icon: Globe },
    { label: "Projects Completed", value: "1000+", icon: Building2 },
    { label: "Client Satisfaction", value: "98%", icon: Star },
  ];

  const currentContent: TradingContent = generalTradingData[activeTab as keyof typeof generalTradingData];
  const safeContent: TradingContent = currentContent ?? generalTradingData.overview;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section - Enterprise Level Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroTrading})` }}>
        
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Global Trading
              </span>
              <br />
              <span>Excellence</span>
            </h1>
            
            <p className="text-xl leading-relaxed">
              PSG delivers world-class trading solutions with uncompromising quality, 
              global reach, and trusted partnerships across diverse industrial sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => scrollToSection('trading-tabs')} 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 text-lg rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center gap-2"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-8 py-4 text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Consult Our Experts
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
          <p className="text-sm uppercase tracking-widest mb-2">Scroll Down</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Enterprise Solutions Navigation */}
      <AnimatedSection id="trading-tabs" className="py-20 bg-white scroll-mt-24" animationType="fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Navigation Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Building2 className="w-4 h-4" />
                Enterprise Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Comprehensive Trading Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From premium steel pipes to industrial supplies, we deliver excellence across every trading category
              </p>
            </div>

            {/* Tab Navigation - Enterprise Style */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {tabs.map((tab, index) => (
                <AnimatedButton
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  size="md"
                  animationType={activeTab === tab.id ? 'scale' : 'lift'}
                  variant="custom"
                >
                  {tab.label}
                </AnimatedButton>
              ))}
            </div>

            {/* Tab Content - Enterprise Layout */}
            <div key={activeTab} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-blue-600 font-semibold mb-4 shadow-sm">
                      <Package className="w-4 h-4" />
                      {safeContent.label}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                      {safeContent.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-blue-700 mb-6 font-semibold">
                      {safeContent.subtitle}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {safeContent.description}
                    </p>
                  </div>

                  {safeContent.features && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Key Advantages
                      </h4>
                      <StaggeredList
                        items={safeContent.features.map(feature => (
                          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="font-medium text-slate-800">{feature}</span>
                          </div>
                        ))}
                        className="space-y-3"
                        staggerDelay={100}
                        animationType="fade-in-left"
                      />
                    </div>
                  )}
                </div>

                <div className="relative">
                  <AnimatedCard hoverEffect="glow" className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={safeContent.image} 
                      alt={safeContent.title}
                      className="w-full h-96 object-cover"
                    />
                  </AnimatedCard>
                  
                  {/* Professional Overlay */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-4 rounded-xl shadow-lg">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Products Section - Enterprise Grid */}
              {safeContent.sections && (
                <div id="products-section" className="mt-16 space-y-16">
                  {safeContent.sections.map((section, index) => (
                    <div key={index} className="animate-fade-in-up">
                      <div className="mb-8 border-b border-slate-200 pb-6">
                        <h3 className="text-3xl font-bold text-slate-900 mb-3">{section.title}</h3>
                        <p className="text-lg text-slate-600 max-w-4xl">
                          {section.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {section.products.map((product, pIndex) => (
                          <AnimatedCard
                            key={pIndex}
                            hoverEffect="lift"
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            animationDelay={pIndex * 100}
                          >
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 mb-4 h-32 flex items-center justify-center">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/150?text=${encodeURIComponent(product.name)}`;
                                }}
                              />
                            </div>
                            <h5 className="font-bold text-slate-900 text-lg mb-2">{product.name}</h5>
                            <p className="text-sm text-slate-500 mb-3">{product.category}</p>
                            
                            {product.specifications && (
                              <div className="space-y-1">
                                {product.specifications.map((spec, sIndex) => (
                                  <div key={sIndex} className="flex items-center gap-2 text-xs text-slate-600">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    {spec}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                          </AnimatedCard>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Enterprise Trust Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden" animationType="fade-in-up">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${trustBg})` }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Shield className="w-4 h-4" />
              Trusted by Industry Leaders
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up">
              Your Trusted Trading Partner
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              With over 15 years of experience, we combine global reach with local expertise to deliver 
              exceptional trading solutions that drive your business forward.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Network</h3>
                <p className="text-blue-100">Strategic partnerships across 50+ countries</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Certified</h3>
                <p className="text-blue-100">ISO certified processes and procedures</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Client Focus</h3>
                <p className="text-blue-100">Dedicated account management team</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-8 py-4 text-lg"
                size="lg" 
                animationType="scale"
                variant="custom"
                onClick={() => navigate('/contact')}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
                animationType="lift"
              >
                Download Brochure
              </AnimatedButton>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Professional Contact Section */}
      <AnimatedSection className="py-24 bg-white" animationType="fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Phone className="w-4 h-4" />
                Get Expert Consultation
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Transform Your Supply Chain?
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Connect with our trading experts to discover how we can optimize your procurement 
                process and deliver exceptional value to your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+97172586848" className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                  <Phone className="w-5 h-5" />
                  +971 72586848
                </a>
                
                <a href="mailto:sales@psgbiz.com" className="flex items-center justify-center gap-3 bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-200 transition-all">
                  <Mail className="w-5 h-5" />
                  sales@psgbiz.com
                </a>
              </div>
              
              <p className="text-slate-500">
                Available 24/7 for urgent inquiries and emergency procurement needs
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default GeneralTrading;
