export default function CheckoutCoupon() {
  return (
    <div className="flex gap-4 items-center rounded">
      
      <input
        type="text"
        placeholder="Coupon Code"
        className="border px-4 py-2 w-full h-14 rounded"
      />

      <button className="bg-red-500 text-white px-6 h-14 rounded">
        Apply Coupon
      </button>

    </div>
  );
}