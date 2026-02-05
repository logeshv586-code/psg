import { Link } from "react-router-dom";

const BusinessCardsSection = () => {
  const businessCards = [
    {
      title: "Environmental Consultancy & Study",
      description: "Driving sustainability through expert solutions",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      image: "/api/placeholder/400/300",
      link: "/environmental",
    },
    {
      title: "Digital Health",
      description: "Enhancing healthcare with technology",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      image: "/api/placeholder/400/300",
      link: "/digital-health",
    },
    {
      title: "Construction & Interior Supplies",
      description: "Innovative IT and AI solutions for growth",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
      image: "/api/placeholder/400/300",
      link: "/construction",
    },
    {
      title: "Travel & Tourism",
      description: "Creating seamless, memorable travel",
      bgColor: "bg-pink-50",
      textColor: "text-pink-900",
      image: "/api/placeholder/400/300",
      link: "/tourism",
    },
    {
      title: "Software Development & AI",
      description: "Innovative IT and AI solutions for growth",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      image: "/api/placeholder/400/300",
      link: "/software",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Prime Source Global
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            your trusted partner in a diverse range of industries, including construction, 
            information technology, artificial intelligence, eHealth, and travel and tourism.
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {businessCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={`${card.bgColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex flex-col h-full">
                <h3 className={`text-xl font-bold ${card.textColor} mb-4 min-h-[60px]`}>
                  {card.title}
                </h3>
                <p className={`text-sm ${card.textColor} opacity-80 mb-6`}>
                  {card.description}
                </p>
                <div className="mt-auto">
                  <div className="w-full h-48 bg-white/50 rounded-lg overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
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

export default BusinessCardsSection;
