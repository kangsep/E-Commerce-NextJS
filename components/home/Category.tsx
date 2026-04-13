import { categories } from "@/data/categories";
import SectionTitle from "../ui/SectionTitle";

export default function Category() {
  return (
    <section className="py-10">
      <SectionTitle subtitle="Category" title="Browse By Category" />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((c, i) => (
          <div
            key={i}
            className="border p-4 text-center rounded hover:bg-red-500 hover:text-white"
          >
            {c.name}
          </div>
        ))}
      </div>
    </section>
  );
}