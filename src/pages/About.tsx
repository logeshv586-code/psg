import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Eye, Gem, Leaf, Heart, Building2, Plane, Cpu } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import ServicesSlider from "@/components/about/ServicesSlider";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const serviceCards = [
  {
    title: "Environmental Consultancy & Study",
    description: "Driving sustainability through expert solutions",
    icon: <Leaf className="w-12 h-12" />,
    link: "/environmental",
    colorClass: "business-card-environmental",
  },
  {
    title: "Digital Health",
    description: "Enhancing healthcare with technology",
    icon: <Heart className="w-12 h-12" />,
    link: "/digital-health",
    colorClass: "business-card-digital-health",
  },
  {
    title: "Construction & Interior Supplies",
    description: "Innovative IT and AI solutions for growth",
    icon: <Building2 className="w-12 h-12" />,
    link: "/construction",
    colorClass: "business-card-construction",
  },
  {
    title: "Travel & Tourism",
    description: "Creating seamless, memorable travel",
    icon: <Plane className="w-12 h-12" />,
    link: "/tourism",
    colorClass: "business-card-tourism",
  },
  {
    title: "Software Development & AI",
    description: "Innovative IT and AI solutions for growth",
    icon: <Cpu className="w-12 h-12" />,
    link: "/software",
    colorClass: "business-card-software",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground mb-4 max-w-2xl">
            Your Global Partner in Progress Across Industries
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-xl">
            Delivering quality, value, and innovation to fulfill your vision
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Prime Source Global
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              your trusted partner in a diverse range of industries, including
              construction, information technology, artificial intelligence,
              eHealth, and travel and tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className={`business-card ${card.colorClass} group text-center`}
              >
                <div className="mb-4 mx-auto text-foreground/80 group-hover:text-foreground transition-colors flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed italic">
              "With its vision to serve quality with value, PSG started its
              journey with minds from across the world. Whether it's a small
              piece of wood from far east Papua New Guinea or a large IT
              solution from the States, PSG has it all served under one roof.
              When GCC countries set their vision, PSG set its mission to
              fulfill that vision."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Services Slider */}
      <ServicesSlider />

      {/* Vision Mission Section */}
      <VisionMissionSection />

      {/* Vision Mission Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be a global leader in diverse sectors by
                integrating expertise, sustainability, and customer-centric
                approaches. We aim to inspire trust and innovation, empowering
                businesses and individuals to thrive in a dynamic world
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide exceptional value and innovative
                solutions across diverse industries, including general trading,
                technology, travel, and environmental consulting. We are
                committed to fostering sustainable practices.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Gem className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At PSG, we uphold integrity and innovation, prioritizing
                excellence and customer focus in everything we do. We are
                committed to sustainability and community engagement, striving
                to make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <GlobalMapSection />
    </Layout>
  );
};

export default About;
