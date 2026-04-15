import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: ShieldCheck,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

export default function FeaturesSection() {
  return (
    <div className="grid md:grid-cols-3 gap-4 text-center my-12">
      
      {features.map((item, i) => {
        const Icon = item.icon;

        return (
          <div key={i}>
            
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 p-4 rounded-full">
                <Icon />
              </div>
            </div>

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>

          </div>
        );
      })}

    </div>
  );
}