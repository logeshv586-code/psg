import { Link } from "react-router-dom";
import { Leaf, Heart, Building2, Plane, Cpu } from "lucide-react";

interface BusinessCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  colorClass: string;
}

const businessCards: BusinessCard[] = [
  {
    title: "Environmental",
    description:
      "We also provide expert MEP services, ensuring every space is both functional and stylish, tailored to your vision",
    icon: <Leaf className="w-8 h-8" />,
    link: "/environmental",
    colorClass: "business-card-environmental",
  },
  {
    title: "IT",
    description:
      "Information Technology covers computing, data, networking, software, hardware, and cybersecurity.",
    icon: <Cpu className="w-8 h-8" />,
    link: "/software",
    colorClass: "business-card-software",
  },
  {
    title: "Construction & Interior Supplies",
    description:
      "Construction and interiors supply provides building materials, furniture, decors and fixtures.",
    icon: <Building2 className="w-8 h-8" />,
    link: "/construction",
    colorClass: "business-card-construction",
  },
  {
    title: "Tourism",
    description:
      "Tourism involves travel, exploration, culture, hospitality, leisure, and economic growth.",
    icon: <Plane className="w-8 h-8" />,
    link: "/tourism",
    colorClass: "business-card-tourism",
  },
  {
    title: "Digital Health",
    description:
      "Digital health integrates technology, healthcare, data, wellness, innovation, and accessibility.",
    icon: <Heart className="w-8 h-8" />,
    link: "/digital-health",
    colorClass: "business-card-digital-health",
  },
];

const BusinessSection = () => {
  return (
    <section id="business-section" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="section-badge mb-4">
              <span>OUR BUSINESS</span>
              <span className="section-badge-dot" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
              Discover Stunning Destinations with Tailored Solutions
            </h2>
          </div>
          <p className="lg:max-w-lg text-muted-foreground leading-relaxed">
            At Prime Source Global, we specialize in delivering comprehensive
            services such as Timber Trading, MEP Solutions, Digital Health,
            Tourism and Software Development. Our commitment to excellence and
            sustainability drives us to provide tailored solutions that enhance
            efficiency and create exceptional experiences.
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {businessCards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className={`business-card ${card.colorClass} group`}
            >
              <div className="mb-4 text-foreground/80 group-hover:text-foreground transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
