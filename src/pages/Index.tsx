import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { MarketSection } from "@/components/sections/MarketSection";
import { BusinessModelSection } from "@/components/sections/BusinessModelSection";
import { UnitEconomicsSection } from "@/components/sections/UnitEconomicsSection";
import { CompetitiveSection } from "@/components/sections/CompetitiveSection";
import { GTMSection } from "@/components/sections/GTMSection";
import { FundingSection } from "@/components/sections/FundingSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <ProblemSection />
        <SolutionSection />
        <MarketSection />
        <BusinessModelSection />
        <UnitEconomicsSection />
        <CompetitiveSection />
        <GTMSection />
        <FundingSection />
        <RecognitionSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
