import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Briefcase, 
  Fan, 
  TreePine, 
  HeartPulse, 
  Monitor, 
  Plane, 
  Leaf 
} from "lucide-react";
import psgLogo from "@/assets/psg-logo.png";
import psgLogoFull from "@/assets/psg-logo-full.png";
import coloredLogo from "@/assets/new images/psg_logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Our Business",
    href: "#",
    children: [
      { label: "General Trading", href: "/general-trading", icon: Briefcase },
      { label: "HVAC Trading", href: "/hvac-trading", icon: Fan },
      { label: "Timber", href: "/construction", icon: TreePine },
      { label: "Advanced Healthcare Supplies", href: "/advanced-healthcare", icon: HeartPulse },
      { label: "IT", href: "/software", icon: Monitor },
      { label: "Tourism", href: "/tourism", icon: Plane },
      { label: "Environmental", href: "/environmental", icon: Leaf },
    ],
  },
  { label: "Strategic Partnership", href: "/strategic-partnership" },
  { label: "Media", href: "/media" },
  { label: "Career", href: "/career" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 safe-area-left safe-area-right">
        <div className="flex items-center justify-between h-16 lg:h-20 safe-area-top">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={isScrolled || isMenuOpen ? coloredLogo : psgLogo}
              alt="PSG Logo"
              className="h-10 lg:h-12 w-auto block lg:hidden"
            />
            <img
              src={isScrolled || isMenuOpen ? coloredLogo : psgLogoFull}
              alt="Prime Source Global"
              className="h-10 lg:h-12 w-auto hidden lg:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`nav-link px-4 py-2 flex items-center gap-1 ${
                      !isScrolled ? "text-white hover:text-white/80" : ""
                    }`}
                    onClick={() => {
                      if (location.pathname === "/") {
                        document.getElementById("business-section")?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    type="button"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`nav-link px-4 py-2 block ${
                      location.pathname === item.href ? "nav-link-active" : ""
                    } ${!isScrolled ? "text-white hover:text-white/80" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4 w-72 animate-fade-in-up origin-top-left z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden p-2 ring-1 ring-black/5">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="group flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200"
                        >
                          {child.icon && (
                            <div className="p-2 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors shadow-sm">
                              <child.icon className="w-5 h-5" />
                            </div>
                          )}
                          <span className="flex-1">{child.label}</span>
                          <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-0 transition-all duration-200">
                             <ChevronDown className="w-4 h-4 -rotate-90 text-blue-400" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="contact-button">
              <span>Contact us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="contact-button-arrow"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors touch-target ${
              isScrolled || isMenuOpen
                ? "hover:bg-secondary text-foreground"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border/50 last:border-0">
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pb-3 pl-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.icon && <child.icon className="w-4 h-4 opacity-70" />}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 text-foreground font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="contact-button w-full justify-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="contact-button-arrow"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
