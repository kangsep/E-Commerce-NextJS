import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

export default function NewArrival() {
  return (
    <section className="py-12">

      {/* Header */}
      <SectionTitle
        subtitle="Featured"
        title="New Arrival"
      />

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Left Big Card  */}
        <div className="relative  bg-black text-white rounded-lg overflow-hidden p-6 flex items-end">
          <Image
            src="/placeholder/playstation5.png"
            alt="PlayStation"
            fill
            className="object-cover opacity-70"
          />

          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">
              PlayStation 5   
            </h3>
            <p className="text-sm mb-3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="underline">Shop Now</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-rows-2 gap-6">

          {/* Top Right */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden p-6 flex items-end">
            <Image
              src="/placeholder/fashion.png"
              alt="Women Collection"
              fill
              className="object-cover opacity-70"
            />

            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">
                Women’s Collections
              </h3>
              <p className="text-sm mb-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="underline">Shop Now</button>
            </div>
          </div>

          {/* Bottom Right (2 Grid) */}
          <div className="grid grid-cols-2 gap-6">

            {/* Small Card 1 */}
            <div className="relative bg-black text-white rounded-lg overflow-hidden p-4 flex items-end">
              <Image
                src="/placeholder/banner_speakers.png"
                alt="Speakers"
                fill
                className="object-cover opacity-70"
              />

              <div className="relative z-10">
                <h4 className="font-semibold text-sm">
                  Speakers
                </h4>
                <button className="underline text-xs">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative bg-black text-white rounded-lg overflow-hidden p-4 flex items-end">
              <Image
                src="/placeholder/perfume.png"
                alt="Perfume"
                fill
                className="object-cover opacity-70"
              />

              <div className="relative z-10">
                <h4 className="font-semibold text-sm">
                  Perfume
                </h4>
                <button className="underline text-xs">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}