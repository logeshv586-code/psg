import Layout from "@/components/layout/Layout";
import aboutHero from "@/assets/about-hero.jpg";
import ServicesSlider from "@/components/about/ServicesSlider";
import AboutBusinessCardsSection from "@/components/about/AboutBusinessCardsSection";

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

      <AboutBusinessCardsSection />

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
    </Layout>
  );
};

export default About;
