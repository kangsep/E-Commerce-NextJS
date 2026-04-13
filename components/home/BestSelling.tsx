import { bestSellingProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BestSelling() {
  return (
    <section className="py-12">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <SectionTitle
          subtitle="This Month"
          title="Best Selling Products"
        />

        <button className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded text-sm">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}