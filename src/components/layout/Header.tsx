import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
      { label: "Environmental Consultancy", href: "/environmental" },
      { label: "Digital Health", href: "/digital-health" },
      { label: "Construction & Interior", href: "/construction" },
      { label: "Travel & Tourism", href: "/tourism" },
      { label: "Software & AI", href: "/software" },
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
                  <div className="absolute top-full left-0 pt-2 min-w-[200px] animate-fade-in">
                    <div className="bg-card rounded-xl shadow-soft-lg border border-border overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                        >
                          {child.label}
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
                      <div className="pb-3 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                          >
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
