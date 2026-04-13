import Image from "next/image";
import { categories } from "@/data/categories";
import SectionTitle from "../ui/SectionTitle";

export default function Category() {
  return (
    <section className="py-10">
      <SectionTitle subtitle="Categories" title="Browse By Category" />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((c, i) => (
          <div
            key={i}
            className="border p-4 rounded flex flex-col items-center justify-center gap-3 cursor-pointer transition hover:bg-red-500 hover:text-white group"
          >
            {/* Image */}
            <div className="relative w-10 h-10">
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-contain group-hover:invert"
              />
            </div>

            {/* Text */}
            <span className="text-sm font-medium">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}