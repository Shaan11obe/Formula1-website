"use client";

import React from "react";
import Image from "next/image";

type Stats = Record<string, string | number>;

type DriverStatsProps = {
  driverName: string;
  team: string;
  driverNumber: string;
  country: string;
  teamColor: string;
  driverImage: string;
  seasonHeading?: string;
  seasonStats: Stats;
  careerStats: Stats;
  memeImage?: string; // 👈 optional meme sticker
};

const DriverStats: React.FC<DriverStatsProps> = ({
  driverName,
  team,
  driverNumber,
  country,
  teamColor,
  driverImage,
  seasonHeading = "2025 Season",
  seasonStats,
  careerStats,
  memeImage,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* HEADER */}
      <div
        className="relative flex flex-col items-center justify-center px-10 py-12 text-white"
        style={{ backgroundColor: teamColor }}
      >
        {/* Faded number behind image */}
        <span className="absolute text-[16rem] font-extrabold text-white/20 leading-none select-none">
          {driverNumber}
        </span>

        {/* Driver image */}
        <div className="relative w-60 h-72 z-10">
          <Image
            src={driverImage}
            alt={driverName}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Info */}
        <div className="z-10 mt-4 text-center">
          <h1 className="text-5xl font-bold">{driverName}</h1>
          <p className="text-xl opacity-90 mt-2">
            #{driverNumber} · {team} · {country}
          </p>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="relative grid md:grid-cols-2 gap-10 p-10 bg-gray-50">
        {/* Season */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{seasonHeading}</h2>
          <ul className="space-y-2">
            {Object.entries(seasonStats).map(([key, value]) => (
              <li
                key={key}
                className="flex justify-between border-b border-gray-200 pb-1"
              >
                <span className="text-gray-700">{key}</span>
                <span className="font-semibold">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Career */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Career Stats</h2>
          <ul className="space-y-2">
            {Object.entries(careerStats).map(([key, value]) => (
              <li
                key={key}
                className="flex justify-between border-b border-gray-200 pb-1"
              >
                <span className="text-gray-700">{key}</span>
                <span className="font-semibold">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meme sticker (optional, bigger + responsive) */}
        {memeImage && (
          <div className="absolute bottom-6 right-6 w-40 h-40 md:w-86 md:h-86">
            <Image
              src={memeImage}
              alt="Meme"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverStats;
