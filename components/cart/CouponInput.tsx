export default function CouponInput() {
  return (
    <div className="flex gap-4 items-center">
      
      <input
        type="text"
        placeholder="Coupon Code"
        className="border px-4 py-2 w-full h-14 outline-none focus:border-black transition rounded"
      />

      <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 h-14 rounded">
        Apply Coupon
      </button>

    </div>
  );
}
