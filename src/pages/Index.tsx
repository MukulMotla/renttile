import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedListings from "@/components/home/FeaturedListings";
import FeatureSection from "@/components/home/FeatureSection";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FlexSpace - Flexible Workspace Solutions | Office Space & Coworking</title>
        <meta 
          name="description" 
          content="Find the perfect workspace for your team. FlexSpace offers private offices, coworking spaces, virtual offices, and meeting rooms in 100+ cities worldwide." 
        />
        <meta name="keywords" content="office space, coworking, virtual office, meeting rooms, flexible workspace" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <CategorySection />
        <FeaturedListings />
        <FeatureSection />
        <TrustSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
