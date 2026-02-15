import Layout from "@/components/layout/Layout";
import { ExternalLink, Handshake, Target, TrendingUp, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import partnershipsBg from "@/assets/new images/Strategic Partnership.png";

const partnershipBenefits = [
  {
    icon: <Handshake className="w-12 h-12" />,
    title: "Collaborative Growth",
    description: "We believe in mutual success through strategic collaboration, working together to achieve shared goals and sustainable growth.",
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Shared Vision",
    description: "Our partnerships are built on aligned objectives and a common vision for excellence across diverse industries.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Trust & Integrity",
    description: "We foster long-term relationships based on transparency, reliability, and unwavering commitment to our partners.",
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Innovation Focus",
    description: "Together with our partners, we drive innovation and adapt to changing market dynamics to stay ahead.",
  },
];

const StrategicPartnership = () => {
  const { toast } = useToast();

  const partners = [
    { name: "Touchmark Descience", href: "https://touchmarkdes.com/" },
    { name: "Md24 Global", href: "https://md24global.com/cgi-sys/suspendedpage.cgi" },
    { name: "Maqnah", href: "https://www.maqnah.com/" },
    { name: "R&R Environment", href: "https://www.rnrenvironmental.com/" },
    { name: "Era Timbers", href: "https://eratimbers.com/" },
    { name: "Plymarc", href: "https://www.plymarc.com/" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-navy to-navy/80">
        <div
          className="container mx-auto px-4 lg:px-8 py-20 relative z-10"
          style={{
            backgroundImage: `url(${partnershipsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-lime-400 text-lime-400 font-semibold">
                <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                PARTNERSHIPS
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
              Strategic Partnerships for Mutual Success
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              At Prime Source Global, we believe in the power of collaboration. Our strategic partnerships are designed to create value, drive innovation, and achieve excellence together.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Building Partnerships with Purpose
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Prime Source Global is committed to forming strategic partnerships that go beyond traditional business relationships. We seek partners who share our values of quality, innovation, and sustainability across construction, digital health, environmental consulting, tourism, and software development sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our collaborative approach ensures that both parties benefit from shared expertise, resources, and market opportunities, creating a foundation for long-term success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
                Our Partners
              </h2>
              <p className="text-muted-foreground">
                Visit our partner websites. Each link opens in a new tab.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name} website`}
                  onClick={() =>
                    toast({
                      title: "Opening partner website",
                      description: partner.name,
                    })
                  }
                  className="group flex touch-manipulation items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 sm:px-5 sm:py-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <span className="min-w-0 font-heading font-semibold text-foreground break-words">
                    {partner.name}
                  </span>
                  <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="hidden sm:inline">Visit</span>
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Why Partner with PSG?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our partnerships are built on core principles that ensure mutual benefit and sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Sectors */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8 text-center">
              Partnership Opportunities Across Sectors
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Construction & Interior Supplies
                </h3>
                <p className="text-muted-foreground">
                  Partner with us to supply quality timber, hardware, and MEP services to construction projects across the GCC region.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Digital Health Solutions
                </h3>
                <p className="text-muted-foreground">
                  Collaborate on innovative healthcare technology solutions including virtual scribing, medical transcription, and coding services.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Environmental Consulting
                </h3>
                <p className="text-muted-foreground">
                  Join us in promoting sustainability through expert environmental management and consulting services.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Travel & Tourism
                </h3>
                <p className="text-muted-foreground">
                  Partner to create memorable travel experiences and tourism packages across the UAE and beyond.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Software Development & AI
                </h3>
                <p className="text-muted-foreground">
                  Collaborate on cutting-edge software solutions and AI-powered applications for diverse industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Explore Partnership Opportunities?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to achieve mutual success and drive innovation across industries.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-lime-400 text-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </Layout>
  );
};

export default StrategicPartnership;
