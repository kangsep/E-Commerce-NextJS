import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-4 border-b">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">Exclusive</h1>

      {/* Menu */}
      <ul className="flex gap-8">
        <li className="font-semibold border-b-2 border-black">Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
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

        {/* Icons */}
        <Heart className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
    </div>
  );
}