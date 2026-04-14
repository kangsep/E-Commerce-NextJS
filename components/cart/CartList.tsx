"use client";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartList() {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <>
      {/* HEADER */}
      <div className="grid grid-cols-4 bg-white p-4 border rounded mb-4 font-semibold">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* ITEMS */}
      {cartItems.map((item: any) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}