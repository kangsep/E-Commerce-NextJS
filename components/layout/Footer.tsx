import { Send } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 pt-16 pb-6">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-2 font-semibold">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>

          <div className="flex items-center border border-gray-500 rounded-md px-3 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm flex-1"
            />
            <Send size={18} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-semibold mb-4">Support</h2>
          <p className="text-sm mb-2">
            103 Batununggal, Kota Bandung<br /> Jawa Barat, Indonesia.
          </p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-semibold mb-4">Account</h2>
          <ul className="text-sm space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-semibold mb-4">Quick Link</h2>
          <ul className="text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h2 className="font-semibold mb-4">Download App</h2>
          <p className="text-sm mb-3">Save $3 with App New User Only</p>

          {/* QR + Buttons */}
          <div className="flex gap-3 mb-4">
            <div className="bg-white p-2 rounded">
              {/* Dummy QR */}
              <div className="w-16 h-16 bg-black"></div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="border border-gray-500 px-2 py-1 text-xs rounded">
                Google Play
              </button>
              <button className="border border-gray-500 px-2 py-1 text-xs rounded">
                App Store
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
        </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>

    </footer>
  );
}

