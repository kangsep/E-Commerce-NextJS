import HeroSection from "@/components/home/HeroSection";
import FlashSale from "@/components/home/FlashSale";
import Category from "@/components/home/Category";
import PromoBanner from "@/components/home/PromoBanner";

export default function Home() {
  return (
    <main className="px-10">
      <HeroSection />
      <FlashSale />
      <Category />
      <PromoBanner />
    </main>
  );
}