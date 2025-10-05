"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/utils/basePath";

type TeamPromoProps = {
  teamName: string;
  carImage: string;
  drivers: string[];
  driversLink?: string; // e.g. "/drivers/redbull"
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
  const normalizedCarImage = withBasePath(carImage.replace(/^\/?public\//, "/"));

  return (
    <section
       className={`${backgroundColor} relative w-full flex flex-col items-center justify-center overflow-hidden py-10 md:py-14`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Car image */}
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

      {/* Team name */}
      <h1 className="relative z-10 text-white text-5xl font-extrabold tracking-wide mb-4 text-center">
        {teamName}
      </h1>

      {/* Driver links (single line look, separate links) */}
      <div className="relative z-10 flex space-x-4 text-gray-200 mb-6 text-lg font-light text-center">
        {drivers.map((driver, idx) => (
          <React.Fragment key={idx}>
            <Link
              href={`${driversLink}/${driver.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-white hover:underline underline-offset-4 transition"
            >
              {driver}
            </Link>
            {idx < drivers.length - 1 && (
              <span className="opacity-50 select-none">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Divider / logo */}
      {divider && (
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="relative w-16 h-16">
            <Image src={divider} alt={teamName} fill />
          </div>
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
