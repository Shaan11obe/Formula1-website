"use client";

import React from "react";
import { LuConstruction } from "react-icons/lu";

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-50 text-center">
      <LuConstruction className="text-6xl md:text-8xl text-gray-700 mb-6" />
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-3">
        Under Construction
      </h1>
      <p className="text-sm md:text-base text-gray-500">
        Est time of completion: <span className="italic">Never :D</span>
      </p>
    </div>
  );
};

export default UnderConstruction;
