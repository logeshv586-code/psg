import Layout from "@/components/layout/Layout";
import { 
  ExternalLink, 
  Handshake, 
  Target, 
  TrendingUp, 
  Users, 
  Construction, 
  HeartPulse, 
  Leaf, 
  Plane, 
  Code2,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import partnershipsBg from "@/assets/new images/Strategic Partnership.png";
import { motion } from "framer-motion";

const partnershipBenefits = [
  {
    icon: <Handshake className="w-10 h-10" />,
    title: "Collaborative Growth",
    description: "We believe in mutual success through strategic collaboration, working together to achieve shared goals and sustainable growth.",
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Shared Vision",
    description: "Our partnerships are built on aligned objectives and a common vision for excellence across diverse industries.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Trust & Integrity",
    description: "We foster long-term relationships based on transparency, reliability, and unwavering commitment to our partners.",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Innovation Focus",
    description: "Together with our partners, we drive innovation and adapt to changing market dynamics to stay ahead.",
  },
];

const sectors = [
  {
    title: "Construction & Interior Supplies",
    description: "Partner with us to supply quality timber, hardware, and MEP services to construction projects across the GCC region.",
    icon: <Construction className="w-10 h-10 text-lime-600" />
  },
  {
    title: "Digital Health Solutions",
    description: "Collaborate on innovative healthcare technology solutions including virtual scribing, medical transcription, and coding services.",
    icon: <HeartPulse className="w-10 h-10 text-lime-600" />
  },
  {
    title: "Environmental Consulting",
    description: "Join us in promoting sustainability through expert environmental management and consulting services.",
    icon: <Leaf className="w-10 h-10 text-lime-600" />
  },
  {
    title: "Travel & Tourism",
    description: "Partner to create memorable travel experiences and tourism packages across the UAE and beyond.",
    icon: <Plane className="w-10 h-10 text-lime-600" />
  },
  {
    title: "Software Development & AI",
    description: "Collaborate on cutting-edge software solutions and AI-powered applications for diverse industries.",
    icon: <Code2 className="w-10 h-10 text-lime-600" />
  },
];

const partners = [
  { name: "Touchmark Descience", href: "https://touchmarkdes.com/" },
  { name: "Md24 Global", href: "https://md24global.com/cgi-sys/suspendedpage.cgi" },
  { name: "Maqnah", href: "https://www.maqnah.com/" },
  { name: "R&R Environment", href: "https://www.rnrenvironmental.com/" },
  { name: "Era Timbers", href: "https://eratimbers.com/" },
  { name: "Plymarc", href: "https://www.plymarc.com/" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const StrategicPartnership = () => {
  const { toast } = useToast();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like scale effect */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={partnershipsBg} 
              alt="Strategic Partnerships Background" 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                STRATEGIC ALLIANCES
              </span>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
              Partnerships for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                Mutual Success
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Creating value, driving innovation, and achieving excellence through powerful collaboration and shared vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-8">
              Building Partnerships with Purpose
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Prime Source Global is committed to forming strategic partnerships that go beyond traditional business relationships. We seek partners who share our values of quality, innovation, and sustainability across construction, digital health, environmental consulting, tourism, and software development sectors.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Our collaborative approach ensures that both parties benefit from shared expertise, resources, and market opportunities, creating a foundation for long-term success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Partners Grid */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Our Esteemed Partners
              </h2>
              <div className="w-20 h-1.5 bg-lime-400 mx-auto rounded-full mb-6"></div>
              <p className="text-muted-foreground">
                Collaborating with industry leaders to deliver excellence.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {partners.map((partner) => (
                <motion.a
                  key={partner.name}
                  variants={itemVariants}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name} website`}
                  onClick={() =>
                    toast({
                      title: "Opening partner website",
                      description: `Redirecting to ${partner.name}...`,
                    })
                  }
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-lime-400/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/0 to-lime-400/5 group-hover:from-lime-400/5 group-hover:to-lime-400/10 transition-colors duration-300"></div>
                  <span className="font-heading font-bold text-lg text-foreground mb-3 z-10 text-center">
                    {partner.name}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-lime-600 font-medium z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Visit Website <ExternalLink className="h-3 w-3" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6"
            >
              Why Partner with PSG?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Our partnerships are built on core principles that ensure mutual benefit and sustainable growth
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-lime-400/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-lime-400/10 to-lime-400/20 flex items-center justify-center text-lime-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-lime-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400/0 via-lime-400/50 to-lime-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Sectors */}
      <section className="py-20 lg:py-32 bg-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              Partnership Opportunities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-white/70 text-lg"
            >
              Explore diverse sectors where we can create impact together
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sectors.map((sector, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-lime-400/30 transition-all duration-300 group"
              >
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-lime-400 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-lime-900/20"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-8">
                Ready to Forge a Strategic Alliance?
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Let's discuss how we can combine our strengths to achieve mutual success and drive innovation across industries.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-lime-400 text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/20"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default StrategicPartnership;
