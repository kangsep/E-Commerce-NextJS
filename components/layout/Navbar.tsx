"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const pathname = usePathname();
  const wishlistItems = useSelector((state: any) => state.wishlist.items);

  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    setMounted(true);
  }, []);

  const menus = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  // hitung total quantity
  const totalQty = cartItems.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  return (
    <div className=" bg-white flex text-black items-center justify-between px-10 py-4 border-b max-w-7xl mx-auto">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Exclusive
      </Link>

      {/* Menu */}
      <ul className="flex gap-8">
        {menus.map((menu) => {
          const isActive = pathname === menu.path;

          return (
            <li key={menu.path}>
              <Link
                href={menu.path}
                className={`pb-1 border-b-2 transition ${
                  isActive
                    ? "border-black font-semibold"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-sm"
          />
          <Search size={18} />
        </div>

        {/* Wishlist */}
        <Link href="/wishlist" className="relative cursor-pointer">
          <Heart />

          {mounted && wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link href="/cart" className="relative cursor-pointer hover:scale-110 transition">
          <ShoppingCart />

          {mounted &&totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQty}
            </span>
          )}
        </Link>

      </div>
    </div>
  );
}