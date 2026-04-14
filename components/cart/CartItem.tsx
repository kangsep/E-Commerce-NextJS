"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "@/store/features/cartSlice";

export default function CartItem({ item }: any) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 items-center bg-white p-4 border rounded mb-4">
      
      {/* PRODUCT */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500"
        >
          ✕
        </button>

        <div className="relative w-12 h-12">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        <p>{item.name}</p>
      </div>

      {/* PRICE */}
      <p>${item.price}</p>

      {/* QUANTITY */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="px-2 border"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="px-2 border"
        >
          +
        </button>
      </div>

      {/* SUBTOTAL */}
      <p>${item.price * item.quantity}</p>
    </div>
  );
}