import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import BusinessCardsSection from "@/components/home/BusinessCardsSection";
import PartnershipsSection from "@/components/home/PartnershipsSection";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import BusinessVerticalsGrid from "@/components/home/BusinessVerticalsGrid";
import AboutSection from "@/components/home/AboutSection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <BusinessCardsSection />
      <PartnershipsSection />
      <GlobalMapSection />
      <BusinessVerticalsGrid />
      <AboutSection />
    </Layout>
  );
};

export default Index;
