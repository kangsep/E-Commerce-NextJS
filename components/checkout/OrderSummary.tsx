"use client";

import { useSelector } from "react-redux";

export default function OrderSummary() {
  const cartItems = useSelector((state: any) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4">
      
      {cartItems.map((item: any) => (
        <div
          key={item.id}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              className="w-10 h-10 object-contain"
            />
            <p className="text-sm">{item.name}</p>
          </div>

          <p>${item.price * item.quantity}</p>
        </div>
      ))}

      <div className="border-t pt-3 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>
      </div>

    </div>
  );
}