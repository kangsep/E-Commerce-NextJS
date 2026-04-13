import { allProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ExplorerProducts() {
  return (
    <section className="py-12">

      {/* Header */}
      <SectionTitle
        subtitle="Our Products"
        title="Explore Our Products"
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded">
          View All Products
        </button>
      </div>
    </section>
  );
}