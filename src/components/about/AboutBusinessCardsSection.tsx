import { Link } from "react-router-dom";
import environmentalImg from "../../assets/new images/Enhanced Environmental.webp";
import digitalHealthImg from "../../assets/new images/Enhanced Digital Health.webp";
import constructionImg from "../../assets/new images/Enhanced Timber Logs.webp";
import tourismImg from "../../assets/new images/Enhanced Dubai Skyline.webp";
import softwareImg from "../../assets/new images/Enhanced IT Professional.webp";

const AboutBusinessCardsSection = () => {
  const cards = [
    {
      title: "Environmental Consultancy & Study",
      description: "Driving sustainability through expert solutions",
      image: environmentalImg,
      bgClass: "bg-green-50",
      link: "/environmental",
      imageClass: "object-cover object-left-bottom",
    },
    {
      title: "Digital Health",
      description: "Enhancing healthcare with technology",
      image: digitalHealthImg,
      bgClass: "bg-blue-50",
      link: "/digital-health",
      imageClass: "object-cover object-center",
    },
    {
      title: "Construction & Interior Supplies",
      description: "Innovative IT and AI solutions for growth",
      image: constructionImg,
      bgClass: "bg-orange-50",
      link: "/construction",
      imageClass: "object-contain object-center",
    },
    {
      title: "Travel & Tourism",
      description: "Creating seamless, memorable travel",
      image: tourismImg,
      bgClass: "bg-pink-50",
      link: "/tourism",
      imageClass: "object-cover object-center",
    },
    {
      title: "Software Development & AI",
      description: "Innovative IT and AI solutions for growth",
      image: softwareImg,
      bgClass: "bg-purple-50",
      link: "/software",
      imageClass: "object-cover object-center",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
            Prime Source Global
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            your trusted partner in a diverse range of industries, including construction,
            information technology, artificial intelligence, eHealth, and travel and tourism.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 items-start">
          {cards.map((card, index) => (
            <Link
              key={card.title}
              to={card.link}
              className={`group relative overflow-hidden rounded-3xl h-[320px] lg:h-[400px] shadow-lg transition-all duration-300 hover:shadow-xl ${card.bgClass}
                ${index === 1 || index === 3 ? 'lg:mt-12' : ''}
                ${index === 2 ? 'lg:mt-24' : ''}
              `}
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <h3 className="text-lg lg:text-xl font-bold text-white leading-tight mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBusinessCardsSection;
