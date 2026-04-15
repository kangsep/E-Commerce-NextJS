"use client";

import { bestSellingProducts } from "@/data/products";import { use } from "react";
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function RelatedProduct() {
  return (
    <section className="py-12">

      <SectionTitle
        subtitle="Related Products"
        title="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}