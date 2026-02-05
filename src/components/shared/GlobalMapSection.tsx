import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalMapSection = () => {
  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      {/* Background world map image */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-[url('/api/placeholder/1920/800')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center lg:justify-end">
          <div className="bg-gradient-to-br from-lime-100 to-green-100 rounded-3xl p-12 max-w-2xl shadow-2xl">
            {/* PSG Logo */}
            <div className="mb-8">
              <img
                src="/psg-logo-full.png"
                alt="PSG Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Innovating for a<br />
              Sustainable Future<br />
              Worldwide
            </h2>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-navy/90 transition-all duration-300 hover:scale-105 group"
            >
              Learn More
              <div className="bg-lime-400 rounded-full p-2 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-navy" />
              </div>
            </Link>

            {/* Decorative PSG watermark */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
              <svg
                width="300"
                height="300"
                viewBox="0 0 100 100"
                className="text-lime-400"
              >
                <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3" />
                <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
