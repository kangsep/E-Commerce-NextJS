import CategorySidebar from "./CategorySidebar";
import Carousel from "./Carousel";

export default function HeroSection() {
  return (
    <section className="flex gap-6 py-6">
      <CategorySidebar />
      <Carousel />
    </section>
  );
}