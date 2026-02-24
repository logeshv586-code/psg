import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.webp";
import qrCode from "@/assets/qr-code.webp";
import { MotionSection, MotionItem } from "@/components/ui/motion-ui";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/primesourceglobal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    className: "social-icon-linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/primesourceglobal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    className: "social-icon-instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14oAQkt8a4/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    className: "social-icon-facebook",
  },
  {
    label: "X",
    href: "https://x.com/psgsales",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    className: "social-icon-x",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@PrimeSourceGlobal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    className: "social-icon-youtube",
  },
  {
    label: "WhatsApp",
    href: "http://wa.me/97172586848",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    className: "social-icon-whatsapp",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    destination: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      destination: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Contact Us"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 leading-tight"
          >
            Lets talk business
          </motion.h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#d9eef4] to-[#e8f5df]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <MotionSection delay={0.2} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="form-label">
                      Your first name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="enter your first name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">
                      Your last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="enter your last name"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="enter your email address"
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="form-label">
                    Your destination
                  </label>
                  <select
                    id="destination"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    className="form-input"
                  >
                    <option value="">Select destination</option>
                    <option value="dubai">Dubai</option>
                    <option value="rak">Ras Al Khaimah</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="enter your message or additional details here"
                    rows={6}
                    className="form-input resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-target"
                >
                  {isSubmitting ? "Sending..." : "Enquire now"}
                </motion.button>
              </form>
            </MotionSection>

            {/* Contact Info */}
            <MotionSection delay={0.4} className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                  Addresses
                </h2>

                <div className="mb-8">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Ras Al Khaimah
                  </h3>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                    <p className="text-sm leading-relaxed">
                      Compass Building - Al Shuhada' Rd - Al Hamra Industrial
                      Free Zone - Ras Al Khaimah - United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Connect with us
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                      <a
                        href="mailto:Sales@psgbiz.com"
                        className="text-sm hover:text-foreground transition-colors"
                      >
                        Sales@psgbiz.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                      <a
                        href="tel:+97172586848"
                        className="text-sm hover:text-foreground transition-colors"
                      >
                        +971 72586848
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                    Follow us on
                  </h3>
                  <img
                    src={qrCode}
                    alt="WhatsApp QR Code"
                    className="w-28 h-28 rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-3 mb-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-icon ${social.className}`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Scan this code to start a whatsapp chat with prime source
                    global
                  </p>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
       </section>

    </Layout>
  );
};
export default Contact;
