"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;

      setMaxDrag(scrollWidth - clientWidth);
    }
  }, [products]);

  return (
    <div className="relative">

      {/* LEFT BUTTON */}
      <button
        onClick={() =>
          containerRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
          })
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white px-2 py-1 shadow"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() =>
          containerRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
          })
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white px-2 py-1 shadow"
      >
        ›
      </button>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{
            left: -maxDrag,
            right: 0,
          }}
        >
          {products.map((product: any) => (
            <div key={product.id} className="min-w-[220px]">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}