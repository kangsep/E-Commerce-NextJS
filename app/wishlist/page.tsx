"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/features/wishlistSlice";
import { addToCart } from "@/store/features/cartSlice";
import Image from "next/image";

export default function WishlistPage() {
  const wishlistItems = useSelector(
    (state: any) => state.wishlist.items
  );

  const dispatch = useDispatch();

  return (
    <div className="px-10 py-10">
      
      {/* Title */}
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">
          Wishlist ({wishlistItems.length})
        </h2>

        <button className="border px-6 py-2">
          Move All To Bag
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlistItems.map((item: any) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded border"
          >
            {/* Image */}
            <div className="relative h-40">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Remove */}
            <button
              onClick={() =>
                dispatch(removeFromWishlist(item.id))
              }
              className="text-red-500 text-sm mt-2"
            >
              Remove
            </button>

            {/* Name */}
            <p className="mt-2 text-sm">{item.name}</p>

            {/* Price */}
            <p className="text-red-500">${item.price}</p>

            {/* Add to Cart */}
            <button
              onClick={() => dispatch(addToCart(item))}
              className="mt-3 w-full bg-black text-white py-2 text-sm"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}