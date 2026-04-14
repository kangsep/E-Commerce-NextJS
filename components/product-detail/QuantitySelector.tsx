"use client";

export default function QuantitySelector({
  quantity,
  setQuantity,
}: any) {
  return (
    <div className="flex items-center border">
      <button
        onClick={() => setQuantity(quantity - 1)}
        className="px-3"
      >
        -
      </button>

      <span className="px-4">{quantity}</span>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-3 text-red-500"
      >
        +
      </button>
    </div>
  );
}