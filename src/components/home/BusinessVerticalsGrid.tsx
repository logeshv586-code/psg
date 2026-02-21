
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import environmentalImg from "../../assets/new images/Enhanced Environmental.png";
import constructionImg from "../../assets/new images/Enhanced Timber Logs.png";
import tourismImg from "../../assets/new images/Enhanced Dubai Skyline.png";
import itImg from "../../assets/new images/Enhanced IT Professional.png";
import digitalHealthImg from "../../assets/new images/Enhanced Digital Health.png";
import mepInstallationSite from "../../assets/new images/MEP Installation Site.png";
import generalTradingImg from "../../assets/new images/Construction Industry.png";

const BusinessVerticalsGrid = () => {
  const verticals = [
    {
      title: "Environmental",
      description: "We also provide expert MEP services, ensuring every space is both functional and stylish, tailored to your vision",
      image: environmentalImg,
      link: "/environmental",
      bgColor: "bg-green-600",
    },
    {
      title: "Construction & Interior Supplies",
      description: "Construction and interiors supply provides building materials, furniture, decors and fixtures.",
      image: constructionImg,
      link: "/construction",
      bgColor: "bg-gray-800",
    },
    {
      title: "Tourism",
      description: "Tourism involves travel, exploration, culture, hospitality, leisure, and economic growth.",
      image: tourismImg,
      link: "/tourism",
      bgColor: "bg-purple-600",
    },
    {
      title: "IT",
      description: "Information Technology covers computing, data, networking, software, hardware, and cybersecurity.",
      image: itImg,
      link: "/software",
      bgColor: "bg-blue-900",
    },
    {
      title: "Digital Health",
      description: "Digital health integrates technology, healthcare, data, wellness, innovation, and accessibility.",
      image: digitalHealthImg,
      link: "/digital-health",
      bgColor: "bg-blue-700",
    },
    {
      title: "HVAC Trading",
      description: "Complete MEP, HVAC, Fire Fighting, Plumbing, and Electrical solutions.",
      image: mepInstallationSite,
      link: "/hvac-trading",
      bgColor: "bg-orange-600",
    },
    {
      title: "General Trading",
      description: "Sourcing and delivering high-quality materials for diverse industrial and commercial needs.",
      image: generalTradingImg,
      link: "/general-trading",
      bgColor: "bg-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="relative rounded-2xl overflow-hidden group h-64 lg:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${item.bgColor} bg-opacity-80 p-8 flex flex-col justify-end transition-all duration-300 group-hover:bg-opacity-90`}>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white text-sm mb-4 opacity-90">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-white font-semibold">
                  Learn More
                  <div className="bg-lime-400 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticalsGrid;
