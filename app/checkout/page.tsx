"use client";

import { useEffect, useState } from "react";
import BillingForm from "@/components/checkout/BillingForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import CheckoutCoupon from "@/components/checkout/CheckoutCoupon";

export default function CheckoutPage() {
    
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

  return (
    <div className="px-10 py-10">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Product / View Cart / CheckOut
      </p>

      <h1 className="text-2xl font-bold mb-8">
        Billing Details
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <BillingForm />

        <div className="space-y-6">
          <OrderSummary />
          <PaymentMethod />
          <CheckoutCoupon />

          <button className="bg-red-500 text-white px-6 py-3 w-fit rounded">
            Place Order
          </button>
        </div>
      </div>

    </div>
  );
}