"use client";

import TiltCard from "@/components/TiltCard";
import TiltBanner from "@/components/TiltBanner";
import CarGrid from "@/components/CarGrid"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white snap-y snap-mandatory overflow-y-scroll">
      <section className="h-screen snap-start flex items-center justify-center text-4xl pt-[80px]">
          Welcome to<span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold ml-2">Formula 1</span>
      </section>
      <CarGrid className="h-screen snap-start"/>
    </main>
  );
} 
