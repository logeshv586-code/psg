import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";
import heroTimber from "@/assets/scraped/hero-timber.jpg";
import heroConstruction from "@/assets/new images/Construction Industry.png";
import { AnimatedSection, AnimatedCard, AnimatedButton, StaggeredList } from "@/components/shared/AnimatedComponents";
import { constructionData } from "./ConstructionData";

interface ConstructionSection {
  title: string;
  description: string;
  products: {
    name: string;
    image: string;
    category: string;
  }[];
}

interface ConstructionContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  features?: string[];
  sections?: ConstructionSection[];
}

const Construction = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "timber", label: "Timber" },
    { id: "plywood", label: "Plywood" },
    { id: "mdf", label: "MDF & Chipboard" },
    { id: "hardwares", label: "Hardwares" },
    { id: "mep", label: "MEP" },
    { id: "hvac", label: "HVAC" },
    { id: "fire", label: "Fire Fighting" },
    { id: "plumbing", label: "Plumbing" },
    { id: "electrical", label: "Electrical" },
  ];

  const currentContent = constructionData[activeTab as keyof typeof constructionData] as ConstructionContent;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTimber}
            alt="Construction Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up stagger-1">
              {currentContent.title}
            </h1>
            <p className="text-lg md:text-2xl mb-6 md:mb-8 animate-fade-in-up stagger-2">
              {currentContent.subtitle}
            </p>
            <div 
              className="text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in-up stagger-3"
              dangerouslySetInnerHTML={{ __html: currentContent.description }}
            />
            <AnimatedButton 
              onClick={() => {
                if (currentContent.sections) {
                  scrollToSection('products-section');
                } else {
                  scrollToSection('construction-tabs');
                }
              }} 
              variant="accent" 
              size="lg"
              className="animate-fade-in-up stagger-4 w-full md:w-auto"
            >
              {currentContent.cta}
              <ChevronRight className="ml-2 w-5 h-5 inline" />
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Construction Solutions Tabs */}
      <AnimatedSection id="construction-tabs" className="py-12 md:py-24 bg-white scroll-mt-24" animationType="fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-8 md:mb-16 no-scrollbar">
              {tabs.map((tab, index) => (
                <AnimatedButton
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "primary" : "outline"}
                  size="md"
                  className={`mx-1 whitespace-nowrap flex-shrink-0 ${activeTab === tab.id ? 'shadow-lg' : ''}`}
                  animationType={activeTab === tab.id ? 'scale' : 'lift'}
                >
                  {tab.label}
                </AnimatedButton>
              ))}
            </div>

            {/* Tab Content */}
            <div key={activeTab}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-left">
                      {currentContent.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-gray-600 mb-6 animate-fade-in-left stagger-2">
                      {currentContent.subtitle}
                    </h3>
                    <div 
                      className="text-lg text-gray-700 leading-relaxed animate-fade-in-left stagger-3"
                      dangerouslySetInnerHTML={{ __html: currentContent.description }}
                    />
                  </div>

                  {currentContent.features && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900 animate-fade-in-up stagger-4">Key Features</h4>
                      <StaggeredList
                        items={currentContent.features.map(feature => (
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                        className="space-y-3"
                        staggerDelay={100}
                        animationType="fade-in-left"
                      />
                    </div>
                  )}


                </div>

                <div className="relative sticky top-24">
                  <AnimatedCard hoverEffect="glow" className="rounded-2xl overflow-hidden">
                    <img 
                      src={currentContent.image} 
                      alt={currentContent.title}
                      className="w-full h-96 object-cover"
                    />
                  </AnimatedCard>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                </div>
              </div>

              {/* Products Section - Full Width */}
              {currentContent.sections && (
                <div id="products-section" className="mt-24 space-y-20 scroll-mt-24">
                  {currentContent.sections.map((section, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="mb-8 border-b border-gray-200 pb-4">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{section.title}</h3>
                        {section.description && (
                          <div 
                            className="text-lg text-gray-600 max-w-3xl"
                            dangerouslySetInnerHTML={{ __html: section.description }}
                          />
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {section.products.map((product, pIndex) => (
                          <AnimatedCard
                            key={pIndex}
                            hoverEffect="lift"
                            className="p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100"
                            animationDelay={pIndex * 50}
                          >
                            <div className="bg-white rounded-lg p-2 mb-3 shadow-sm h-24 md:h-32 flex items-center justify-center">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/150?text=${encodeURIComponent(product.name)}`;
                                }}
                              />
                            </div>
                            <h5 className="font-semibold text-gray-900 text-sm md:text-base leading-tight mb-1">{product.name}</h5>
                            <p className="text-xs text-gray-500">{product.category}</p>
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

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white" animationType="fade-in-up">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl mb-12 text-gray-300 animate-fade-in-up stagger-2">
              Let's discuss your construction project and bring your ideas to life with our expertise and innovative solutions.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3 cursor-pointer"
              onClick={() => navigate('/contact')}
            >
              <AnimatedButton 
                variant="accent" 
                size="lg" 
                animationType="scale"
              >
                Start Your Project
                <ChevronRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                size="lg" 
                animationType="lift"
              >
                Request Consultation
              </AnimatedButton>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Construction;
