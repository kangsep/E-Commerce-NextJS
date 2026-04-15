import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "John Doe",
    role: "Founder & Chairman",
    image: "/placeholder/team1.png",
  },
  {
    name: "Jane Smith",
    role: "Managing Director",
    image: "/placeholder/team2.png",
  },
  {
    name: "Michael Lee",
    role: "Product Designer",
    image: "/placeholder/team3.png",
  },
];

export default function TeamSection() {
  return (
    <div className="space-y-15 mb-24">
      
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((person, i) => (
          <div key={i} className="text-center">
            
            <div className="relative w-full h-[250px] bg-gray-100 rounded mb-4">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-semibold text-lg">
              {person.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {person.role}
            </p>

            <div className="flex justify-center gap-3 mt-2 text-gray-600">
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}