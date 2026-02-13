import { Link } from "react-router-dom";
import environmentalImg from "../../assets/environmental.jpg";
import digitalHealthImg from "../../assets/digital-health.jpg";
import constructionImg from "../../assets/timber.png";
import tourismImg from "../../assets/tourism.jpg";
import softwareImg from "../../assets/software.jpg";

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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className={`group relative overflow-hidden rounded-2xl ${card.bgClass} min-h-[220px]`}
            >
              <div className="relative z-10 flex h-full flex-col items-center px-6 pt-6 text-center">
                <h3 className="text-sm font-semibold text-foreground leading-snug min-h-[40px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <div className="mt-auto w-full pt-5">
                  <div className="h-[110px] w-full overflow-hidden rounded-xl">
                    <img
                      src={card.image}
                      alt=""
                      className={`h-full w-full ${card.imageClass} transition-transform duration-300 group-hover:scale-[1.03]`}
                      draggable={false}
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

export default AboutBusinessCardsSection;
