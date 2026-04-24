import HeroSection from "@/components/home/HeroSection";
import FlashSale from "@/components/home/FlashSale";
import Category from "@/components/home/Category";
import PromoBanner from "@/components/home/PromoBanner";
import BestSelling from "@/components/home/BestSelling";
import ExplorerProduct from "@/components/home/ExplorerProduct";
import NewArrival from "@/components/home/NewArrival";
import FeaturesSection from "@/components/about/FeaturesSection";

export default function Home() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <HeroSection />
      <FlashSale />
      <Category />
      <BestSelling />
      <PromoBanner />
      <ExplorerProduct />
      <NewArrival />
      <FeaturesSection />
    </main>
  );
}