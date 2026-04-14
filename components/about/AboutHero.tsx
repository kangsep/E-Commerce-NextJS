import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      
      {/* Text */}
      <div>
        <h1 className="text-4xl font-bold mb-6">
          Our Story
        </h1>

        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="text-gray-600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/placeholder/about-hero.png"
          alt="about"
          fill
          className="object-cover rounded"
        />
      </div>

    </div>
  );
}