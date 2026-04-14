"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { toggleWishlist } from "@/store/features/wishlistSlice";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    rating?: number;
  };
};

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  const wishlistItems = useSelector((state: any) => state.wishlist.items);

  const isWishlisted = wishlistItems.some(
    (item: any) => item.id === product.id
  );

  const discount =
    product.oldPrice
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : null;

  return (
    <div className="bg-white rounded-lg p-4 hover:shadow-md transition group">
      
      {/* Link Area */}
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-48 bg-gray-100 rounded flex items-center justify-center overflow-hidden cursor-pointer">
          
          {discount && (
            <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </span>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(toggleWishlist(product));
            }}
            className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow"
          >
            <span className={ mounted && isWishlisted ? "text-red-500" : ""}>
              ❤️
            </span>
          </button>

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="mt-3">
          <h3 className="font-semibold text-sm line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={
                  i < (product.rating || 0)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex gap-2 mt-1 items-center">
            <span className="text-red-500 font-semibold">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="line-through text-gray-400 text-sm">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart */}
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 w-full bg-black text-white py-2 text-sm rounded opacity-0 group-hover:opacity-100 transition">
        Add To Cart
      </button>

    </div>
  );
}