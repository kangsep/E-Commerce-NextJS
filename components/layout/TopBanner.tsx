import { FaChevronDown } from "react-icons/fa";

export default function TopBanner() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex justify-center items-center ">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="underline cursor-pointer">ShopNow</span>
        </p>
        <p className="absolute right-4 cursor-pointer"> English</p>

    </div>
  );
}