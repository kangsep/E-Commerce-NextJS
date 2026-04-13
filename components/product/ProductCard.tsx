import Image from "next/image";

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
  };
};

export default function ProductCard({ product }: Props) {
  const discount =
    product.oldPrice
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : null;

  return (
    <div className="bg-white rounded-lg p-4 hover:shadow transition group relative">
      
      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
        ❤️
      </button>

      {/* Image */}
      <div className="relative w-full h-40 mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-sm">{product.name}</h3>

      {/* Price */}
      <div className="flex gap-2 mt-1 items-center">
        <span className="text-red-500 font-semibold">
          ${product.price}
        </span>

        {product.oldPrice && (
          <span className="line-through text-gray-400 text-sm">
            ${product.oldPrice}
          </span>
        )}
      </div>

      {/* Add To Cart */}
      <button className="mt-3 w-full bg-black text-white py-2 text-sm rounded opacity-0 group-hover:opacity-100 transition">
        Add To Cart
      </button>
    </div>
  );
}