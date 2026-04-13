"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "iPhone 16 Series",
    subtitle: "Up to 10% off Voucher",
    image: "/placeholder/hero.png",
  },
  {
    id: 2,
    title: "Gaming Setup",
    subtitle: "Up to 30% Discount",
    image: "/placeholder/banner.png",
  },
  {
    id: 3,
    title: "Smart Devices",
    subtitle: "Latest Tech Deals",
    image: "/placeholder/hero.png",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative flex-1 bg-black text-white p-8 overflow-hidden rounded-lg">

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slides[index].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          {/* Text */}
          <div>
            <p className="text-sm mb-2">{slides[index].title}</p>
            <h2 className="text-3xl font-bold mb-4">
              {slides[index].subtitle}
            </h2>
            <button className="underline">Shop Now →</button>
          </div>

          {/* Image */}
          <div className="relative w-60 h-40">
            <Image
              src={slides[index].image}
              alt="banner"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
      >
        ‹
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-red-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}