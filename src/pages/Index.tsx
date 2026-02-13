import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import BusinessCardsSection from "@/components/home/BusinessCardsSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import PartnershipsSection from "@/components/home/PartnershipsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <BusinessCardsSection />
      <VisionMissionSection />
      <PartnershipsSection />
    </Layout>
  );
};


export default Index;
