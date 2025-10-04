"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { withBasePath } from "@/utils/basePath";

type DescriptionPart = {
  text: string;
  gradient?: string;
};

type CarouselSectionProps = {
  title: string;
  description: DescriptionPart[];
  images: string[];
};

const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  description,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Normalize and add base path
  const getImageSrc = (path: string) =>
    withBasePath(path.replace(/^\/?public\//, "/"));

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-4xl space-y-12 md:space-y-0 md:space-x-12 px-4">
      {/* Left text section */}
      <div className="flex flex-col space-y-6 max-w-lg">
        <div className="text-4xl font-bold">{title}</div>
        <div className="text-xl">
          {description.map((part, idx) => (
            <span
              key={idx}
              className={`${
                part.gradient
                  ? `${part.gradient} bg-clip-text text-transparent font-bold`
                  : ""
              }`}
            >
              {part.text}
            </span>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative h-96 w-full max-w-md flex flex-col items-center justify-center">
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <Image
            src={getImageSrc(images[currentIndex])}
            alt={`carousel image ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500 rounded-xl"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
          />
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 hover:bg-opacity-75"
          >
            <IoIosArrowBack size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 hover:bg-opacity-75"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Navigation bar */}
        <div className="flex mt-4 space-x-1 w-3/4">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-violet-500 flex-2" : "bg-gray-300 flex-1"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;