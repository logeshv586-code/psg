import partnershipImg from "../../assets/html-css-collage-concept-with-person-1-768x512.jpg.jpeg";

const PartnershipsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-300 mb-6">
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                EXCELLENCE THROUGH COLLABORATION
              </span>
              <div className="w-3 h-3 rounded-full bg-lime-400"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Building Partnerships<br />
              with Trust and Vision
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Our dedicated team of professionals is committed to excellence, leveraging 
              their extensive knowledge and experience to meet the unique needs of our clients.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              We believe in fostering strong relationships with our customers and partners, 
              built on trust, collaboration, and a shared vision for success.
            </p>

            {/* Quote Box */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-lime-400">
                  <path
                    fill="currentColor"
                    d="M30,10 Q20,10 15,15 Q10,20 10,30 L10,50 Q10,60 15,65 Q20,70 30,70 L50,70 Q60,70 65,65 Q70,60 70,50 L70,30 Q70,20 65,15 Q60,10 50,10 Z"
                  />
                </svg>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed relative z-10">
                "At <span className="font-bold">Prime Source Global</span>, we are not just a 
                service provider; we are your partner in growth.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed mt-4 relative z-10">
                Join us as we pave the way for a brighter future across multiple sectors."
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Dashed border circle */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-lime-400 animate-spin-slow"></div>
              
              {/* Inner solid circle */}
              <div className="relative w-[400px] h-[400px] rounded-full bg-primary overflow-hidden">
                <img
                  src={partnershipImg}
                  alt="Professional woman with tablet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnershipsSection;
