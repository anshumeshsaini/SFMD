import { useState, useCallback } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BiographySection from "@/components/BiographySection";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import AchievementsSection from "@/components/AchievementsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";


const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>

        <Navbar />
        <HeroSection />
        <AboutSection />
        <BiographySection />
        <StatsSection />
        <GallerySection />
        <AchievementsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
