import { Eye, Target, ArrowRight } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Navy Box with Content */}
          <div className="bg-navy rounded-3xl p-8 lg:p-12 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/30 mb-6">
              <span className="text-sm font-medium uppercase tracking-wide">
                ABOUT US
              </span>
              <div className="w-3 h-3 rounded-full bg-lime-400"></div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              About our Vision & Mission
            </h2>

            <p className="text-white/90 text-base leading-relaxed mb-6">
              At Prime Source Global, we are committed to "pioneering solutions globally" 
              across diverse sectors, including trading, travel and tourism, eHealth, 
              environmental consulting, and software development. Our mission is to drive 
              innovation and excellence, delivering exceptional value while prioritizing 
              sustainability and community impact.
            </p>

            <p className="text-white/90 text-base leading-relaxed mb-6">
              Through our collaborative approach, we create tailored solutions that cater 
              to our clients' unique needs, ensuring they thrive in today's dynamic landscape.
            </p>

            <p className="text-white/90 text-base leading-relaxed mb-8">
              Our diverse team of experts works diligently to address the challenges of 
              each industry we serve. From enhancing healthcare accessibility through 
              eHealth solutions to promoting responsible practices in environmental 
              consulting, we strive to make a meaningful difference. At Prime Source 
              Global, we believe in the power of integrity and accountability, and we 
              are passionate about shaping a better future through our pioneering efforts 
              and unwavering commitment to quality.
            </p>

            <button className="inline-flex items-center gap-3 bg-white text-navy px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 group">
              Learn More
              <div className="bg-lime-400 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-navy" />
              </div>
            </button>
          </div>

          {/* Right Side - Vision & Mission Cards with Target Icon */}
          <div className="flex flex-col justify-center">
            {/* Center Target Icon */}
            <div className="flex justify-center mb-12 lg:mb-16">
              <div className="relative w-64 h-64">
                {/* Outer lime green circle */}
                <div className="absolute inset-0 rounded-full border-[20px] border-lime-400"></div>
                
                {/* Middle navy circle */}
                <div className="absolute inset-[30px] rounded-full border-[15px] border-navy"></div>
                
                {/* Inner lime circle */}
                <div className="absolute inset-[60px] rounded-full border-[12px] border-lime-400"></div>
                
                {/* Center navy dot */}
                <div className="absolute inset-[90px] rounded-full bg-navy"></div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-navy" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our vision is to be a global leader in diverse sectors by integrating 
                    expertise, sustainability, and customer-centric approaches. We aim to 
                    inspire trust and innovation, empowering businesses and individuals to 
                    thrive in a dynamic world
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-navy" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to provide exceptional value and innovative solutions 
                    across diverse industries, including general trading, technology, travel, 
                    and environmental consulting. We are committed to fostering sustainable 
                    practices, enhancing customer experiences, and driving positive impact 
                    in every community we serve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
