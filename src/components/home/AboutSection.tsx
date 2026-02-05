import { Link } from "react-router-dom";
import { Target, Eye, Gem } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-badge mx-auto mb-4">
            <span>ABOUT US</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            About our Vision & Mission
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Prime Source Global, we are committed to{" "}
              <em className="text-foreground not-italic font-medium">
                pioneering solutions globally
              </em>{" "}
              across diverse sectors, including trading, travel and tourism,
              eHealth, environmental consulting, and software development. Our
              mission is to drive innovation and excellence, delivering
              exceptional value while prioritizing sustainability and community
              impact. Through our collaborative approach, we create tailored
              solutions that cater to our clients' unique needs, ensuring they
              thrive in today's dynamic landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our diverse team of experts works diligently to address the
              challenges of each industry we serve. From enhancing healthcare
              accessibility through eHealth solutions to promoting responsible
              practices in environmental consulting, we strive to make a
              meaningful difference. At Prime Source Global, we believe in the
              power of integrity and accountability, and we are passionate about
              shaping a better future through our pioneering efforts and
              unwavering commitment to quality.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Vision, Mission, Values Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Vision
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our vision is to be a global leader in diverse sectors by
                    integrating expertise, sustainability, and customer-centric
                    approaches. We aim to inspire trust and innovation,
                    empowering businesses and individuals to thrive in a dynamic
                    world
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Mission
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our mission is to provide exceptional value and innovative
                    solutions across diverse industries, including general
                    trading, technology, travel, and environmental consulting.
                    We are committed to fostering sustainable practices,
                    enhancing customer experiences, and driving positive impact
                    in every community we serve
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Gem className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Values
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At PSG, we uphold <em>integrity</em> and <em>innovation</em>
                    , prioritizing <em>excellence</em> and{" "}
                    <em>customer focus</em> in everything we do. We are
                    committed to <em>sustainability</em> and{" "}
                    <em>community engagement</em>, striving to make a positive
                    impact in the areas we serve. Together, we empower our team
                    and hold ourselves <em>accountable</em> for delivering
                    exceptional results.
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

export default AboutSection;
