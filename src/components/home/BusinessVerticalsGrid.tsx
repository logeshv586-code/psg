import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import environmentalImg from "../../assets/environmental.jpg";
import constructionImg from "../../assets/scraped/hero-timber.jpg";
import tourismImg from "../../assets/tourism.jpg";
import itImg from "../../assets/software.jpg";
import digitalHealthImg from "../../assets/digital-health.jpg";

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
      featured: true,
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
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Environmental - Top Left */}
          <Link
            to={verticals[0].link}
            className="relative rounded-2xl overflow-hidden group h-64 lg:h-80"
          >
            <img
              src={verticals[0].image}
              alt={verticals[0].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${verticals[0].bgColor} bg-opacity-80 p-8 flex flex-col justify-end transition-all duration-300 group-hover:bg-opacity-90`}>
              <h3 className="text-2xl font-bold text-white mb-3">
                {verticals[0].title}
              </h3>
              <p className="text-white text-sm mb-4 opacity-90">
                {verticals[0].description}
              </p>
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                Learn More
                <div className="bg-lime-400 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </Link>

          {/* Construction - Center (Featured, spans 2 rows on large screens) */}
          <Link
            to={verticals[1].link}
            className="relative rounded-2xl overflow-hidden group md:col-span-2 lg:row-span-2 h-64 lg:h-[656px]"
          >
            <img
              src={verticals[1].image}
              alt={verticals[1].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${verticals[1].bgColor} bg-opacity-80 p-8 flex flex-col justify-end transition-all duration-300 group-hover:bg-opacity-90`}>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {verticals[1].title}
              </h3>
              <p className="text-white text-base lg:text-lg mb-6 opacity-90 max-w-xl">
                {verticals[1].description}
              </p>
              <div className="inline-flex items-center gap-2 text-white font-semibold text-lg">
                Learn More
                <div className="bg-lime-400 rounded-full p-2 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </Link>

          {/* Tourism - Top Right */}
          <Link
            to={verticals[2].link}
            className="relative rounded-2xl overflow-hidden group h-64 lg:h-80"
          >
            <img
              src={verticals[2].image}
              alt={verticals[2].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${verticals[2].bgColor} bg-opacity-80 p-8 flex flex-col justify-end transition-all duration-300 group-hover:bg-opacity-90`}>
              <h3 className="text-2xl font-bold text-white mb-3">
                {verticals[2].title}
              </h3>
              <p className="text-white text-sm mb-4 opacity-90">
                {verticals[2].description}
              </p>
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                Learn More
                <div className="bg-lime-400 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </Link>

          {/* IT - Bottom Left */}
          <Link
            to={verticals[3].link}
            className="relative rounded-2xl overflow-hidden group h-64 lg:h-80"
          >
            <img
              src={verticals[3].image}
              alt={verticals[3].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${verticals[3].bgColor} bg-opacity-80 p-8 flex flex-col justify-end transition-all duration-300 group-hover:bg-opacity-90`}>
              <h3 className="text-2xl font-bold text-white mb-3">
                {verticals[3].title}
              </h3>
              <p className="text-white text-sm mb-4 opacity-90">
                {verticals[3].description}
              </p>
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                Learn More
                <div className="bg-lime-400 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </Link>

          {/* Digital Health - Bottom Right */}
          <Link
            to={verticals[4].link}
            className="relative rounded-2xl overflow-hidden group h-64 lg:h-80"
          >
            <img
              src={verticals[4].image}
              alt={verticals[4].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${verticals[4].bgColor} bg-opacity-80 p-8 flex flex-col justify-end transition-all duration-300 group-hover:bg-opacity-90`}>
              <h3 className="text-2xl font-bold text-white mb-3">
                {verticals[4].title}
              </h3>
              <p className="text-white text-sm mb-4 opacity-90">
                {verticals[4].description}
              </p>
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                Learn More
                <div className="bg-lime-400 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticalsGrid;
