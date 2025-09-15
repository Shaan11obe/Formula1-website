"use client";

import React from "react";
import Card from "@/components/Card"; // assuming Card is in components folder

const TrackGrid = () => {
  const teams = [
    {
      image: "/tracks/ALBERT_PARK.png",
      title: "Albert Park (Australia)",
      description: "First on the calender",
      href: "/circuits/oceania",
    },
    {
      image: "/tracks/SHANGHAI.png",
      title: "Shanghai",
      description: "8x Constructors’ Champions",
      href: "#",
    },
    {
      image: "/tracks/SUZUKA.png",
      title: "Japan",
      description: "Innovating since 1963",
      href: "#",
    },
    {
      image: "/tracks/BAHRAIN.png",
      title: "Bahrain",
      description: "Tricky Corners and high speed straights",
      href: "#",
    },
    {
      image: "/tracks/JEDDAH.png",
      title: "Saudi Arabia",
      description: "British racing heritage",
      href: "#",
    },
    {
      image: "/tracks/MIAMI.png",
      title: "Miami",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/IMOLA.png",
      title: "Emilia Romagna",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/MONACO.png",
      title: "Monaco",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/BARCALONA.png",
      title: "Spain",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/CANADA.png",
      title: "Canada",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/AUSTRIA.png",
      title: "Austria",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/SILVERSTONE.png",
      title: "Great Britain",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/SPA.png",
      title: "Belgium",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/HUNGARORING.png",
      title: "Hungary",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/ZANDVOORT.png",
      title: "Netherlands",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/MONZA.png",
      title: "Italy",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/BAKU.png",
      title: "Azerbaijan",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/MARINA-BAY.png",
      title: "Singapore",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/COTA.png",
      title: "United States",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/MEXICO.png",
      title: "Mexico",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/INTERLAGOS.png",
      title: "Brazil",
      description: "One of F1’s most historic teams",
      href: "/circuits/south",
    },
    {
      image: "/tracks/VEGAS-STRIP.png",
      title: "Las Vegas",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/QATAR.png",
      title: "Qatar",
      description: "One of F1’s most historic teams",
      href: "#",
    },
    {
      image: "/tracks/YAS-MARINA.png",
      title: "Abu Dhabi",
      description: "One of F1’s most historic teams",
      href: "#",
    },
  ];

  return (
    <section className="w-full px-6 py-12 mx-auto">
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
