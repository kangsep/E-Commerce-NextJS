"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { toggleWishlist } from "@/store/features/wishlistSlice";
import QuantitySelector from "./QuantitySelector";
import { FaStar } from "react-icons/fa";

export default function ProductInfo({ product }: any) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  return (
    <div>
      
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">
        {product.name}
      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={14}
            className={
              i < (product.rating || 0)
                ? "text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="text-sm text-gray-500">
          (150 Reviews)
        </span>
        <span className="text-green-500 text-sm ml-2">
          In Stock
        </span>
      </div>

      {/* Price */}
      <p className="text-xl font-semibold mb-4">
        ${product.price}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-6">
        High quality product with premium build.
      </p>

      {/* Quantity + Buttons */}
      <div className="flex items-center gap-4 mb-6">
        <QuantitySelector
          quantity={qty}
          setQuantity={setQty}
        />

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-red-500 text-white px-6 py-2"
        >
          Buy Now
        </button>

        <button
          onClick={() => dispatch(toggleWishlist(product))}
          className="border px-3 py-2"
        >
          ❤️
        </button>
      </div>

      {/* Info Box */}
      <div className="border p-4 space-y-3">
        <p>🚚 Free Delivery</p>
        <p>↩️ Free 30 Days Delivery Returns</p>
      </div>

    </div>
  );
}