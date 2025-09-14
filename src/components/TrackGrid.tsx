"use client";

import React from "react";
import Card from "@/components/Card"; // assuming Card is in components folder

const TrackGrid = () => {
  const teams = [
    {
      image: "/tracks/ALBERT_PARK.png",
      title: "Albert Park (Australia)",
      description: "First on the calender",
      href: "#",
    },
    {
      image: "/ferrari-car.jpg",
      title: "Bahrain",
      description: "Tricky Corners and high speed straights",
      href: "#",
    },
    {
      image: "/mercedes-car.jpg",
      title: "Mercedes AMG",
      description: "8x Constructors’ Champions",
      href: "#",
    },
    {
      image: "/mclaren-car.jpg",
      title: "McLaren",
      description: "Innovating since 1963",
      href: "#",
    },
    {
      image: "/aston-car.jpg",
      title: "Aston Martin",
      description: "British racing heritage",
      href: "#",
    },
    {
      image: "/williams-car.jpg",
      title: "Williams",
      description: "One of F1’s most historic teams",
      href: "#",
    },
  ];

  return (
    <section className="w-full px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((team, idx) => (
          <Card
            key={idx}
            image={team.image}
            title={team.title}
            description={team.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TrackGrid;
