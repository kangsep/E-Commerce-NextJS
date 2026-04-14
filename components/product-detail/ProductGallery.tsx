"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ product }: any) {
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex gap-4">
      
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelected(img)}
            className="w-16 h-16 border cursor-pointer"
          >
            <Image
              src={img}
              alt="thumb"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative h-[400px] bg-gray-100">
        <Image
          src={selected}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

    </div>
  );
}