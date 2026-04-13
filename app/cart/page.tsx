"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "@/store/features/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  // subtotal
  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="px-10 py-10">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Cart
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-white p-4 border rounded mb-4 font-semibold">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* Items*/}
      {cartItems.map((item: any) => (
        <div
          key={item.id}
          className="grid grid-cols-4 items-center bg-white p-4 border rounded mb-4"
        >
          {/* Product */}
          <div className="flex items-center gap-4">
            
            {/* Remove */}
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

          {/* Price */}
          <p>${item.price}</p>

          {/* Quantity */}
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

          {/* Subtotal */}
          <p>${item.price * item.quantity}</p>
        </div>
      ))}

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="border px-6 py-2">
          Return To Shop
        </button>

        <button className="border px-6 py-2">
          Update Cart
        </button>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        
        {/* Coupon */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 w-full"
          />
          <button className="bg-red-500 text-white px-6">
            Apply Coupon
          </button>
        </div>

        {/* Total */}
        <div className="border p-6">
          <h3 className="font-bold mb-4">Cart Total</h3>

          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="bg-red-500 text-white w-full py-2">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}