import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import arrowIcon from "@/assets/arrow-icon.png";
import digitalHealth from "@/assets/new images/Enhanced Digital Health.png";
import construction from "@/assets/new images/Construction Industry.png";
import dubai from "@/assets/new images/Enhanced Dubai Skyline.png";
import finance from "@/assets/new images/Finance Professional.png";
import sustainability from "@/assets/new images/Sustainability Concept.png";

interface Slide {
  id: number;
  title: string[];
  image: string;
  category: string;
  tagline: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: ["Revolutionizing", "Healthcare with", "Precision and", "Efficiency"],
    image: digitalHealth,
    category: "Smart. Secure. Healthy",
    tagline: "Digital Health",
    description:
      "Prime Source Digital Health: Enhancing healthcare efficiency with expert medical scribing, coding, and transcription services",
    link: "/digital-health",
  },
  {
    id: 2,
    title: ["Timber,", "Hardware,", "and MEP", "Solutions for", "Every Project"],
    image: construction,
    category: "Timber for Construction",
    tagline: "Construction",
    description:
      "Your trusted partner in global timber trading and hardware solutions, offering quality materials like door handles and fixtures",
    link: "/construction",
  },
  {
    id: 3,
    title: ["Curating", "Exceptional", "Adventures and", "Memorable", "Experiences"],
    image: dubai,
    category: "Travel and Tourism",
    tagline: "Tourism",
    description:
      "Prime Source Tourism: Creating unforgettable travel experiences with personalized itineraries and expert guidance.",
    link: "/tourism",
  },
  {
    id: 4,
    title: ["Transforming", "Businesses with", "Innovative", "Technologies"],
    image: finance,
    category: "Software Development & AI",
    tagline: "Technology",
    description:
      "Prime Source Software & AI: Innovating solutions through cutting-edge software development and artificial intelligence",
    link: "/software",
  },
  {
    id: 5,
    title: ["Pioneering", "Sustainable", "Solutions for a", "Greener", "Tomorrow"],
    image: sustainability,
    category: "Environmental Consultancy & Study",
    tagline: "Environment",
    description:
      "Providing expert guidance and research to promote sustainable practices and environmental stewardship.",
    link: "/environmental",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${currentSlideData.image}")` }}
          />
        </AnimatePresence>
        {/* Background Overlay - No animation/delay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[50vh] sm:min-h-[60vh]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-white">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white"
              >
                {currentSlideData.title.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={() => {
                document
                  .getElementById("business-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="scroll-button text-white border-white/30 hover:bg-white/10"
            >
              <span>Scroll Down</span>
              <ChevronDown className="w-4 h-4 animate-bounce-subtle" />
            </motion.button>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-soft-lg ring-1 ring-white/20">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.category}
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                  />
                </div>

                {/* Card Info */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-white/90 font-medium">
                    {currentSlideData.category}
                  </p>
                  <Link to={currentSlideData.link} className="circle-arrow bg-white/10 hover:bg-white/20 border-white/20">
                    <img
                      src={arrowIcon}
                      alt="View more"
                      className="w-full h-full object-contain invert brightness-0"
                    />
                  </Link>
                </div>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                  {currentSlideData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slider-dot ${
                index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
