"use client";

import React from "react";
import Image from "next/image";
import { withBasePath } from "@/utils/basePath";

type StatsObject = { [label: string]: string | number };

type DriverStatsProps = {
  driverName: string;
  team: string;
  driverNumber?: string | number;
  country?: string;
  teamColor?: string;
  driverImage: string;
  teamLogo?: string;
  teamName?: string;
  seasonStats?: StatsObject;
  careerStats?: StatsObject;
  memeImage?: string;
};

const DriverStats: React.FC<DriverStatsProps> = ({
  driverName,
  team,
  driverNumber,
  country,
  teamColor,
  driverImage,
  teamLogo,
  teamName,
  seasonStats,
  careerStats,
  memeImage,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto relative"
      style={teamColor ? { borderColor: teamColor, borderWidth: 3 } : {}}
    >
      {/* Driver Image */}
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={withBasePath(driverImage.replace(/^\/?public\//, "/"))}
          alt={driverName}
          fill
          className="object-cover rounded-full"
          sizes="160px"
        />
        {memeImage && (
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <Image
              src={withBasePath(memeImage.replace(/^\/?public\//, "/"))}
              alt="Meme"
              fill
              className="object-contain rounded-full border-2 border-white"
              sizes="64px"
            />
          </div>
        )}
      </div>
      {/* Driver Number */}
      {driverNumber && (
        <span className="text-xl font-bold text-gray-700 mb-1">#{driverNumber}</span>
      )}
      {/* Driver Name */}
      <h2 className="text-2xl font-bold mb-1">{driverName}</h2>
      {/* Country */}
      {country && (
        <span className="text-lg text-gray-600 mb-2">{country}</span>
      )}
      {/* Team Name */}
      <div className="flex items-center gap-2 mb-4">
        {teamLogo && (
          <Image
            src={withBasePath(teamLogo.replace(/^\/?public\//, "/"))}
            alt={teamName || team}
            width={32}
            height={24}
          />
        )}
        <span className="text-lg font-semibold">{teamName || team}</span>
      </div>
      {/* Season Stats */}
      {seasonStats && (
        <div className="w-full mb-4">
          <h3 className="text-lg font-bold mb-2 text-green-700">Season Stats</h3>
          <ul>
            {Object.entries(seasonStats).map(([label, value]) => (
              <li key={label} className="flex justify-between py-1 border-b last:border-b-0">
                <span className="font-medium">{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Career Stats */}
      {careerStats && (
        <div className="w-full mb-2">
          <h3 className="text-lg font-bold mb-2 text-blue-700">Career Stats</h3>
          <ul>
            {Object.entries(careerStats).map(([label, value]) => (
              <li key={label} className="flex justify-between py-1 border-b last:border-b-0">
                <span className="font-medium">{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DriverStats;