import { useState, useEffect } from "react";
import heroSoftware from "@/assets/software.jpg";
import heroTourism from "@/assets/tourism.jpg";
import heroHealth from "@/assets/digital-health.jpg";
import heroTimber from "@/assets/timber.png";
import heroEnvironmental from "@/assets/environmental.jpg";

const services = [
  {
    id: 1,
    badge: "SERVICES",
    title: "Innovating the Future: Smart Software Development & AI Solutions",
    description: "In a digital-first world, intelligent software and artificial intelligence (AI) are driving business transformation across every industry. Our Software Development & AI services combine cutting-edge technology with agile development practices to deliver powerful, scalable, and future-ready solutions.",
    image: heroSoftware,
  },
  {
    id: 2,
    badge: "SERVICES",
    title: "Discover the World: Your Gateway to Unforgettable Travel Experiences",
    description: "Travel opens the door to new cultures, breathtaking landscapes, and unforgettable memories. Whether you're craving a tropical beach escape, a hike through majestic mountains, or a deep dive into rich historical heritage, the world offers endless possibilities.",
    image: heroTourism,
  },
  {
    id: 3,
    badge: "SERVICES",
    title: "Empowering Wellness Through Digital Health Innovation",
    description: "Digital health is revolutionizing the way we approach healthcare—making it more accessible, efficient, and personalized. From mobile health apps and wearable fitness trackers to telemedicine and AI-powered diagnostics, technology is transforming how we manage our well-being.",
    image: heroHealth,
  },
  {
    id: 4,
    badge: "SERVICES",
    title: "Building Excellence: Your Trusted Partner in Construction & Interior Supply",
    description: "At the heart of every great structure lies quality materials and innovative design. Our Construction and Interior Supply solutions are tailored to meet the demands of modern architecture, blending durability with style.",
    image: heroTimber,
  },
  {
    id: 5,
    badge: "SERVICES",
    title: "Sustainable Solutions: Expert Environmental Consultancy & Studies",
    description: "Protecting the environment while supporting sustainable development is at the core of our mission. Our Environmental Consultancy and Study services provide expert guidance to businesses, governments, and organizations aiming to meet environmental regulations and achieve eco-friendly goals.",
    image: heroEnvironmental,
  },
];

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Slider Container */}
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-lime-400 text-foreground font-semibold text-sm">
                      <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                      {service.badge}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-lime-400 w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
