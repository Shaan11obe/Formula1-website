"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/utils/basePath";

type TeamPromoProps = {
  teamName: string;
  carImage: string;
  drivers: string[];
  driversLink?: string;
  shopLink?: string;
  backgroundColor?: string;
  divider?: string;
};

const TeamPromo: React.FC<TeamPromoProps> = ({
  teamName,
  carImage,
  drivers,
  driversLink = "#",
  shopLink = "#",
  backgroundColor = "bg-neutral-900",
  divider,
}) => {
  // Normalize and add base path
  const normalizedCarImage = withBasePath(carImage.replace(/^\/?public\//, "/"));

  return (
    <section
      className={`${backgroundColor} relative w-full flex flex-col items-center justify-center overflow-hidden py-20`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Car Image */}
      <div className="relative z-10 w-full max-w-6xl flex justify-center mb-8">
        <div className="relative w-full h-[28rem]">
          <Image
            src={normalizedCarImage}
            alt={`${teamName} F1 car`}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Team Name */}
      <h1 className="relative z-10 text-white text-5xl font-extrabold tracking-wide mb-4 text-center">
        {teamName}
      </h1>

      {/* Drivers as one link */}
      <Link
        href={driversLink}
        className="relative z-10 flex space-x-4 text-gray-200 mb-6 text-lg font-light hover:text-white hover:underline underline-offset-4 transition"
      >
        {drivers.map((driver, idx) => (
          <React.Fragment key={idx}>
            <span>{driver}</span>
            {idx < drivers.length - 1 && <span className="opacity-50">|</span>}
          </React.Fragment>
        ))}
      </Link>

      {/* Divider / Logo */}
      {divider && (
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center"><Image src={divider} alt={teamName} fill/></div>
        </div>
      )}

      {/* Call-to-action button */}
      <Link
        href={shopLink}
        className="relative z-10 px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
      >
        Shop now
      </Link>
    </section>
  );
};

export default TeamPromo;