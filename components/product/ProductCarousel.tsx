"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative">
      {/* Arrow */}
      <button
        onClick={() => ref.current?.scrollBy({ left: -300, behavior: "smooth" })}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white px-2 py-1 shadow"
      >
        ‹
      </button>

      <button
        onClick={() => ref.current?.scrollBy({ left: 300, behavior: "smooth" })}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white px-2 py-1 shadow"
      >
        ›
      </button>

      <div ref={ref} className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
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