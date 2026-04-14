"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import ProductGallery from "@/components/product-detail/ProductGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="px-10 py-10">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        products / {product.name}
      </p>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-10">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

    </div>
  );
}