import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="bg-black text-white p-10 flex justify-between items-center my-10">
      <div>
        <p className="text-green-400">Categories</p>
        <h2 className="text-2xl font-bold">
          Enhance Your Music Experience
        </h2>
        <button className="bg-green-500 px-4 py-2 mt-4 rounded">
          Buy Now
        </button>
      </div>

      <img src="/placeholder/banner.png" className="w-60" />
    </section>
  );
}