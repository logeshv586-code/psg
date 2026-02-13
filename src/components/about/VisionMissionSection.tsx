import type { ReactNode } from "react";
import targetImg from "../../assets/target.png";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="#011232"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const VisionIcon = () => (
  <svg
    viewBox="0 0 111 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    <path
      d="M55.5 10C30 10 10 40 10 40C10 40 30 70 55.5 70C81 70 101 40 101 40C101 40 81 10 55.5 10Z"
      stroke="#011232"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="55.5" cy="40" r="15" stroke="#011232" strokeWidth="3" />
    <circle cx="55.5" cy="40" r="6" fill="#011232" />
    <path
      d="M25 25L35 30M86 25L76 30M25 55L35 50M86 55L76 50"
      stroke="#011232"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const MissionIcon = () => (
  <svg
    viewBox="0 0 111 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    <path
      d="M55.5 10C30 10 10 40 10 40C10 40 30 70 55.5 70C81 70 101 40 101 40C101 40 81 10 55.5 10Z"
      stroke="#011232"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="55.5" cy="40" r="15" stroke="#011232" strokeWidth="3" />
    <path
      d="M55.5 32V48M47.5 40H63.5"
      stroke="#011232"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const ValuesIcon = () => (
  <svg
    viewBox="0 0 81 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    <path
      d="M10 30L40.5 10L71 30L40.5 70L10 30Z"
      stroke="#011232"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 30H71M40.5 10V70M25 20L40.5 30L56 20"
      stroke="#011232"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type InfoCardProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

const InfoCard = ({ title, icon, children, className }: InfoCardProps) => {
  return (
    <div
      className={`rounded-[20px] bg-white p-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:-translate-y-[5px] transition-transform duration-300 ${
        className ?? ""
      }`}
    >
      <div className="flex items-start gap-[5px]">
        <div className="flex-shrink-0 w-[80px] h-[80px]">{icon}</div>
        <div>
          <h3 className="text-[28px] font-semibold text-[#011232] mb-[15px] leading-tight">
            {title}
          </h3>
          <div className="text-base leading-[1.6] text-[#555555]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const VisionMissionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-soft-lg lg:min-h-[640px]">
          <div className="grid lg:grid-cols-2">
            <div className="relative bg-[#011232] text-white px-[50px] py-[60px] lg:pr-[140px] flex flex-col justify-center">
              <div className="inline-flex items-center px-[14px] py-[6px] border border-white/30 rounded-[30px] text-[12px] font-semibold tracking-[1px] uppercase mb-[30px] w-fit">
                <span>About Us</span>
                <span className="ml-[10px] w-[10px] h-[10px] rounded-full bg-[#A2E033]" />
              </div>

              <h2 className="text-[44px] font-bold mb-[30px] leading-[1.2]">
                About our Vision &amp; Mission
              </h2>

              <div className="text-[16px] leading-[1.8] text-white/90 max-w-[650px] mb-[40px] text-justify">
                <p className="mb-[20px]">
                  At Prime Source Global, we are committed to{" "}
                  <strong>pioneering solutions globally</strong> across diverse
                  sectors, including trading, travel and tourism, eHealth,
                  environmental consulting, and software development. Our mission
                  is to drive innovation and excellence, delivering exceptional
                  value while prioritizing sustainability and community impact.
                  Through our collaborative approach, we create tailored solutions
                  that cater to our clients’ unique needs, ensuring they thrive
                  in today’s dynamic landscape.
                </p>
                <p>
                  Our diverse team of experts works diligently to address the
                  challenges of each industry we serve. From enhancing healthcare
                  accessibility through eHealth solutions to promoting responsible
                  practices in environmental consulting, we strive to make a
                  meaningful difference. At Prime Source Global, we believe in
                  the power of integrity and accountability, and we are
                  passionate about shaping a better future through our pioneering
                  efforts and unwavering commitment to quality.
                </p>
              </div>

              <a
                href="https://psgbiz.com/?page_id=1830"
                className="inline-flex items-center px-[20px] py-[10px] bg-white text-[#011232] no-underline rounded-[30px] font-bold text-[14px] transition-all duration-300 w-fit group"
              >
                Learn More
                <span className="flex items-center justify-center w-[26px] h-[26px] bg-[#A0E75A] rounded-full ml-[12px] transition-transform duration-300 group-hover:translate-x-[4px] group-hover:-translate-y-[4px]">
                  <ArrowIcon />
                </span>
              </a>
            </div>

            <div className="relative bg-[#F4F7FA] px-[50px] py-[60px] lg:pl-[140px] flex flex-col gap-[20px]">
              <div className="relative z-10 space-y-[20px]">
                <InfoCard title="Vision" icon={<VisionIcon />}>
                  Our vision is to be a global leader in diverse sectors by
                  integrating expertise, sustainability, and customer-centric
                  approaches. We aim to inspire trust and innovation, empowering
                  businesses and individuals to thrive in a dynamic world
                </InfoCard>

                <InfoCard title="Mission" icon={<MissionIcon />}>
                  Our mission is to provide exceptional value and innovative
                  solutions across diverse industries, including general trading,
                  technology, travel, and environmental consulting. We are
                  committed to fostering sustainable practices, enhancing
                  customer experiences, and driving positive impact in every
                  community we serve
                </InfoCard>

                <InfoCard title="Values" icon={<ValuesIcon />}>
                  At PSG, we uphold <strong>integrity</strong> and{" "}
                  <strong>innovation</strong>, prioritizing{" "}
                  <strong>excellence</strong> and <strong>customer focus</strong>{" "}
                  in everything we do. We are committed to{" "}
                  <strong>sustainability</strong> and{" "}
                  <strong>community engagement</strong>, striving to make a
                  positive impact in the areas we serve. Together, we empower our
                  team and hold ourselves <strong>accountable</strong> for
                  delivering exceptional results.
                </InfoCard>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block z-20">
            <div className="h-[220px] w-[220px] overflow-hidden rounded-full drop-shadow-sm lg:h-[260px] lg:w-[260px]">
              <img
                src={targetImg}
                alt=""
                className="h-full w-full select-none object-cover scale-[1.08]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
