"use client";
import { useEffect, useState } from "react";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import CouponInput from "@/components/cart/CouponInput";

export default function CartPage() {

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="px-10 py-10">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Cart
      </p>

      {/* Cart List */}
      <CartList />

      {/* Action */}
      <div className="flex justify-between mt-6">
        <button className="border px-6 py-2">
          Return To Shop
        </button>

        <button className="border px-6 py-2">
          Update Cart
        </button>
      </div>

      {/* Bottom */}
      <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
        <CouponInput />
        <CartSummary />
      </div>
    </div>
  );
}