export default function CouponInput() {
  return (
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
  );
}