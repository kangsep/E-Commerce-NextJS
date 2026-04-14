"use client";

import { useSelector } from "react-redux";
import  Link from "next/link";

export default function CartSummary() {
  const cartItems = useSelector((state: any) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="border p-6 rounded">
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

      <Link href="/checkout">
        <button className="bg-red-500 text-white w-full py-2 rounded">
          Proceed to checkout
        </button>
      </Link>
    </div>
  );
}