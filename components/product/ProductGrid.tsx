import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}