import AboutHero from "@/components/about/AboutHero";
import StatsSection from "@/components/about/StatsSection";
import TeamSection from "@/components/about/TeamSection";
import FeaturesSection from "@/components/about/FeaturesSection";

export default function AboutPage() {
  return (
    <div className="px-10 py-10 space-y-16 max-w-7xl mx-auto">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500">
        Home / About
      </p>

      <AboutHero />
      <StatsSection />
      <TeamSection />
      <FeaturesSection />

    </div>
  );
}