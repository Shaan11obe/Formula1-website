"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/utils/basePath";

type TeamPromoProps = {
  teamName: string;
  carImage: string;
  driverOne: string;
  driverTwo: string;
  driverOneLink: string;
  driverTwoLink: string;
  shopLink?: string;
  backgroundColor?: string;
  divider?: string;
};

const TeamPromo: React.FC<TeamPromoProps> = ({
  teamName,
  carImage,
  driverOne,
  driverTwo,
  driverOneLink,
  driverTwoLink,
  shopLink = "#",
  backgroundColor = "#000",
  divider,
}) => {
  // Normalize image path for static export
  const normalizedCarImage = withBasePath(carImage.replace(/^\/?public\//, "/"));

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-26"
      style={{ backgroundColor }}
    >
      {/* Background color overlay */}
      {/* <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${backgroundColor}90, ${backgroundColor})`,
          mixBlendMode: "multiply",
        }}
      /> */}

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

      {/* Separate driver links */}
      <div className="relative z-10 flex items-center space-x-4 text-gray-200 mb-6 text-lg font-light">
        <Link
          href={driverOneLink}
          className="hover:text-white hover:underline underline-offset-4 transition"
        >
          {driverOne}
        </Link>
        <span className="opacity-50">|</span>
        <Link
          href={driverTwoLink}
          className="hover:text-white hover:underline underline-offset-4 transition"
        >
          {driverTwo}
        </Link>
      </div>

      {/* Divider (optional) */}
      {divider && (
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="w-16 h-16 relative">
            <Image src={normalizedCarImage} alt={teamName} fill />
          </div>
        </div>
      )}

      {/* CTA button */}
      <Link
        href={shopLink}
        className="relative z-10 px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
      />
      </section> 
      );
    }
export default TeamPromo;