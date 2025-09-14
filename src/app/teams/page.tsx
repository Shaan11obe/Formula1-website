// src/app/teams/page.tsx
"use client"; // required for client-side components

import React from "react";
import { Carousel } from "@material-tailwind/react";
import CarGrid from "@/components/CarGrid";

const TeamsPage: React.FC = () => {
  const images: string[] = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
  ];

  return (
    <main className="pt-[80px]">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-4xl space-y-12 md:space-y-0 md:space-x-12 px-4">
        {/* Left text section */}
        <div className="flex flex-col space-y-6 max-w-lg">
          <div className="text-4xl font-bold">Formula 1 Teams</div>
          <div className="text-xl">
            Founded over 75 years ago, Formula 1 has <br /> seen over{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              170
            </span>{" "}
            different teams compete in the <br /> sport. This has allowed it to
            earn over{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              7 billion
            </span>{" "}
            <br /> in just the last two years without official <br /> data from
            2025.
          </div>
        </div>

        {/* Carousel section */}
        <div className="relative h-96 w-full max-w-md">
          {" "}
          <Carousel
            loop
            autoplay
            autoplayDelay={3000}
            className="h-96"
            {...({} as any)}
          >
            {images.map((src, idx) => (
              <div key={idx} className="inline-block w-[300px] h-full">
                <img
                  src={src}
                  alt={`F1 image ${idx + 1}`}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Grid of cars */}
      <CarGrid />
    </main>
  );
};

export default TeamsPage;
