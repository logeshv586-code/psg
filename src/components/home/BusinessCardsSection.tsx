import { Link } from "react-router-dom";
import environmentalImg from "../../assets/new images/Enhanced Environmental.png";
import digitalHealthImg from "../../assets/new images/Enhanced Digital Health.png";
import tourismImg from "../../assets/new images/Enhanced Dubai Skyline.png";
import timberImg from "../../assets/new images/Enhanced Timber Logs.png";
import softwareImg from "../../assets/new images/Enhanced IT Professional.png";
import arrowIcon from "../../assets/arrow-icon.png";

const BusinessCardsSection = () => {
  return (
    <section id="business-section" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <div className="section-badge mb-4 sm:mb-6">
              <span>OUR BUSINESS</span>
              <span className="section-badge-dot" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Discover Stunning Destinations with Tailored Solutions
            </h2>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed lg:pt-2">
            At Prime Source Global, we specialize in delivering comprehensive services such as Timber
            Trading, MEP Solutions, Digital Health, Tourism and Software Development. Our commitment
            to excellence and sustainability drives us to provide tailored solutions that enhance
            efficiency and create exceptional experiences.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-14 grid gap-4 sm:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <div className="grid gap-6 lg:row-span-2 lg:grid-rows-2">
            <Link
              to="/environmental"
              className="group relative overflow-hidden rounded-2xl min-h-[180px] sm:min-h-[220px] lg:min-h-0 lg:h-full"
              style={{
                backgroundImage: `url(${environmentalImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
                <div>
                  <h3 className="text-white font-heading font-semibold text-base sm:text-lg">Environmental</h3>
                  <p className="mt-2 sm:mt-3 text-white/80 text-xs sm:text-sm leading-relaxed max-w-[22rem]">
                    We also provide expert MEP services, ensuring every space is both functional and
                    stylish, tailored to your vision
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm font-medium">
                  <span>Learn More</span>
                  <span className="grid h-7 w-7 sm:h-9 sm:w-9 place-items-center rounded-full bg-accent text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    <img src={arrowIcon} alt="" className="h-3 w-3 sm:h-4 sm:w-4" draggable={false} />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/software"
              className="group relative overflow-hidden rounded-2xl min-h-[220px] lg:min-h-0 lg:h-full"
              style={{
                backgroundImage: `url(${softwareImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <h3 className="text-white font-heading font-semibold text-lg">IT</h3>
                  <p className="mt-3 text-white/80 text-sm leading-relaxed max-w-[22rem]">
                    Information Technology covers computing, data, networking, software, hardware,
                    and cybersecurity.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 text-white text-sm font-medium">
                  <span>Learn More</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    <img src={arrowIcon} alt="" className="h-4 w-4" draggable={false} />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <Link
            to="/construction"
            className="group relative overflow-hidden rounded-2xl min-h-[260px] lg:row-span-2 lg:min-h-0"
            style={{
              backgroundImage: `url(${timberImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
              <h3 className="text-white font-heading font-bold text-xl md:text-2xl">
                Construction &amp; Interior Supplies
              </h3>
              <p className="mt-3 text-white/85 text-sm leading-relaxed max-w-[28rem]">
                Construction and interiors supply provides building materials, furniture, decors and
                fixtures.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 text-white text-sm font-medium">
                <span>Learn More</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  <img src={arrowIcon} alt="" className="h-4 w-4" draggable={false} />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-6 lg:row-span-2 lg:grid-rows-2">
            <Link
              to="/tourism"
              className="group relative overflow-hidden rounded-2xl min-h-[220px] lg:min-h-0 lg:h-full"
              style={{
                backgroundImage: `url(${tourismImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <h3 className="text-white font-heading font-semibold text-lg">Tourism</h3>
                  <p className="mt-3 text-white/80 text-sm leading-relaxed max-w-[22rem]">
                    Tourism involves travel, exploration, culture, hospitality, leisure, and economic
                    growth.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 text-white text-sm font-medium">
                  <span>Learn More</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    <img src={arrowIcon} alt="" className="h-4 w-4" draggable={false} />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/digital-health"
              className="group relative overflow-hidden rounded-2xl min-h-[220px] lg:min-h-0 lg:h-full"
              style={{
                backgroundImage: `url(${digitalHealthImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <h3 className="text-white font-heading font-semibold text-lg">Digital Health</h3>
                  <p className="mt-3 text-white/80 text-sm leading-relaxed max-w-[22rem]">
                    Digital health integrates technology, healthcare, data, wellness, innovation, and
                    accessibility.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 text-white text-sm font-medium">
                  <span>Learn More</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    <img src={arrowIcon} alt="" className="h-4 w-4" draggable={false} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCardsSection;
