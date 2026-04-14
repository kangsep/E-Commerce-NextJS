import { Store, DollarSign, ShoppingBag, Users } from "lucide-react";

const stats = [
  { icon: Store, value: "10.5k", label: "Sellers active our site" },
  { icon: DollarSign, value: "33k", label: "Monthly Product Sale" },
  { icon: ShoppingBag, value: "45.5k", label: "Customer active in our site" },
  { icon: Users, value: "25k", label: "Annual gross sale in our site" },
];

export default function StatsSection() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      
      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="border p-6 text-center rounded transition group hover:bg-red-500 cursor-pointer"
          >
            
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 p-3 rounded-full group-hover:bg-white transition">
                <Icon className="group-hover:text-red-500" />
              </div>
            </div>

            <h3 className="text-xl font-bold group-hover:text-white">
              {item.value}
            </h3>

            <p className="text-sm text-gray-500 group-hover:text-white">
              {item.label}
            </p>

          </div>
        );
      })}

    </div>
  );
}