import { Link } from "react-router-dom";
import mapImg from "../../assets/new images/Enhanced Global Network.webp";
import logoImg from "../../assets/psg_logo-removebg-preview-1.webp";
import { ArrowRight } from "lucide-react";

const GlobalMapSection = () => {
  return (
    <section className="bg-background">
      <div className="relative w-full overflow-hidden bg-background h-[320px] sm:h-[280px] md:h-[300px] lg:h-[360px]">
        <img
          src={mapImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-100 brightness-110"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/20" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="relative w-full max-w-[440px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#DDFBC7] to-[#F4FFD8] p-5 sm:p-6 shadow-2xl">
            <img src={logoImg} alt="PSG" className="h-10 sm:h-11 w-auto" loading="lazy" decoding="async" />

            <h2 className="mt-5 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary leading-tight">
              Innovating for a
              <br />
              Sustainable Future
              <br />
              Worldwide
            </h2>

            <Link
              to="/about"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.99]"
            >
              <span>Learn More</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent flex-shrink-0">
                <ArrowRight className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
            </Link>

            <div className="hidden sm:block pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[14px] border-accent/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
