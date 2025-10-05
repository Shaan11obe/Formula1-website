"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { withBasePath } from "@/utils/basePath";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

// Full navigation items
const navitems: NavItem[] = [
  {
    label: "Teams",
    link: "/teams",
    children: [
      { label: "RedBull", link: "/teams/RedBull", iconImage: "/red-bull-logo.png" },
      { label: "Ferrari", link: "/teams/ferrari", iconImage: "/ferrari-logo.png" },
      { label: "Mclaren", link: "/teams/mclaren", iconImage: "/mclaren-logo.png" },
      { label: "Mercedes", link: "/teams/mercedes", iconImage: "/mercedes-logo.png" },
      { label: "Aston Martin", link: "/under-construction", iconImage: "/astonMartin-logo.png" },
      { label: "Haas", link: "/teams/haas", iconImage: "/haas-logo.png" },
      { label: "Racing Bulls", link: "/teams/rb", iconImage: "/racingbulls-logo.png" },
      { label: "Williams", link: "/teams/williams", iconImage: "/williams-logo.png" },
      { label: "Alpine", link: "/under-construction", iconImage: "/alpine-logo.png" },
      { label: "Kick Sauber", link: "/under-construction", iconImage: "/sauber-logo.png" },
    ],
  },
  {
    label: "Drivers",
    link: "",
    children: [
      { label: "Max Verstappen", link: "/drivers/redbull/verstappen", iconImage: "/red-bull-logo.png" },
      { label: "Yuki Tsunoda", link: "/drivers/redbull/tsunoda", iconImage: "/red-bull-logo.png" },
      { label: "Charles Leclerc", link: "/drivers/ferrari/leclerc", iconImage: "/ferrari-logo.png" },
      { label: "Lewis Hamilton", link: "/drivers/ferrari/hamilton", iconImage: "/ferrari-logo.png" },
      { label: "Oscar Piastri", link: "/drivers/Mclaren/piastri", iconImage: "/mclaren-logo.png" },
      { label: "Lando Norris", link: "/drivers/Mclaren/norris", iconImage: "/mclaren-logo.png" },
      { label: "Andrea Kimi Antonelli", link: "/drivers/mercedes/antonelli", iconImage: "/mercedes-logo.png" },
      { label: "George Russell", link: "/drivers/mercedes/russell", iconImage: "/mercedes-logo.png" },
      { label: "Fernando Alonso", link: "/drivers/aston-martin/alonso", iconImage: "/astonMartin-logo.png" },
      { label: "Lance Stroll", link: "/drivers/aston-martin/stroll", iconImage: "/astonMartin-logo.png" },
      { label: "Esteban Ocon", link: "/under-construction", iconImage: "/haas-logo.png" },
      { label: "Oliver Bearman", link: "/drivers/haas", iconImage: "/haas-logo.png" },
      { label: "Liam Lawson", link: "/under-construction", iconImage: "/racingbulls-logo.png" },
      { label: "Isack Hadjar", link: "/drivers/rb", iconImage: "/racingbulls-logo.png" },
      { label: "Alex Albon", link: "/drivers/williams/albon", iconImage: "/williams-logo.png" },
      { label: "Carlos Sainz", link: "/drivers/williams/sainz", iconImage: "/williams-logo.png" },
      { label: "Pierre Gasly", link: "/drivers/alpine/gasly", iconImage: "/alpine-logo.png" },
      { label: "Franco Colapinto", link: "/under-construction", iconImage: "/alpine-logo.png" },
      { label: "Gabriel Bortoleto", link: "/drivers/sauber/bortoleto", iconImage: "/sauber-logo.png" },
      { label: "Nico Hülkenberg", link: "/drivers/sauber/hulkenberg", iconImage: "/sauber-logo.png" },
    ],
  },
  {
    label: "Circuits",
    link: "/circuits",
    children: [
      { label: "Europe", children: [
          { label: "Silverstone", link: "#" },
          { label: "Monza", link: "#" },
          { label: "Spa-Francorchamps", link: "#" },
          { label: "Circuit de Barcelona-Catalunya", link: "/under-connstruction" },
          { label: "Circuit Zandvoort", link: "#" },
          { label: "Emilia-Romagna (Imola)", link: "/under-connstruction" },
          { label: "Circuit de Monaco", link: "#" },
          { label: "Red Bull Ring (Austria)", link: "#" },
          { label: "Hungaroring", link: "#" },
        ]},
      { label: "Asia", children: [
          { label: "Suzuka", link: "#" },
          { label: "Shanghai", link: "#" },
          { label: "Marina Bay Street Circuit (Singapore)", link: "#" },
          { label: "Baku City Circuit", link: "#" },
        ]},
      { label: "North America", children: [
          { label: "Circuit of the Americas", link: "#" },
          { label: "Miami International Autodrome", link: "#" },
          { label: "Las Vegas Strip Circuit", link: "/under-connstruction" },
          { label: "Montréal (Gilles Villeneuve)", link: "#" },
          { label: "Autodromo Hermanos Rodriguez (Mexico)", link: "#" },
        ]},
      { label: "South America", children: [
          { label: "Interlagos (Brazil)", link: "/circuits/south" },
        ]},
      { label: "Middle East", children: [
          { label: "Bahrain International Circuit", link: "/circuits/middle-east/bahrain" },
          { label: "Jeddah Corniche Circuit", link: "/circuits/middle-east/jeddah" },
          { label: "Yas Marina Circuit", link: "/circuits/middle-east/abu-dhabi" },
          { label: "Losail International Circuit (Qatar)", link: "/circuits/middle-east/qatar" },
        ]},
      { label: "Oceania", children: [
          { label: "Albert Park Circuit (Melbourne)", link: "/circuits/oceania" },
        ]},
    ],
  },
];

// Recursive dropdown component
const Dropdown: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <div className="absolute left-0 top-10 hidden min-w-[200px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md group-hover:flex z-50">
      {items.map((ch, i) => (
        <div key={i} className="relative group/sub px-2">
          <Link
            href={ch.link ?? "#"}
            className="flex cursor-pointer items-center justify-between py-1 pl-4 pr-4 text-neutral-400 hover:text-black whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              {ch.iconImage && (
                <Image
                  src={withBasePath(ch.iconImage.replace(/^\/?public\//, "/"))}
                  alt={`${ch.label}-logo`}
                  width={28}
                  height={22}
                />
              )}
              <span>{ch.label}</span>
            </div>
            {ch.children && <IoIosArrowDown className="ml-2 text-sm" />}
          </Link>

          {ch.children && (
            <div className="absolute left-full top-0 hidden min-w-[200px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md group-hover/sub:flex">
              {ch.children.map((sub, j) => (
                <Link
                  key={j}
                  href={sub.link ?? "#"}
                  className="cursor-pointer px-4 py-1 text-neutral-400 hover:text-black whitespace-nowrap flex justify-between items-center"
                >
                  <span>{sub.label}</span>
                  {sub.children && <IoIosArrowDown className="ml-2 text-sm" />}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Navbar component
const Navbar = () => {
  const pathname = usePathname();

  // Map route patterns to brand styles
  const teamThemes: Record<
    string,
    { bg: string; text: string; logo: string }
  > = {
    redbull: { bg: "#00174C", text: "text-white", logo: "/F1-logo-white.png" },
    ferrari: { bg: "#c4151c", text: "text-white", logo: "/F1-logo-white.png" },
    mclaren: { bg: "#FF8000", text: "text-black", logo: "/F1-logo-white.png" },
    mercedes: { bg: "#C8CCCE", text: "text-black", logo: "/F1-logo-white.png" },
    haas: { bg: "#9c9fa2", text: "text-black", logo: "/F1-logo-white.png" },
    rb: { bg: "#1432cb", text: "text-white", logo: "/F1-logo-white.png" },
    williams: { bg: "#041e42", text: "text-white", logo: "/F1-logo-white.png" },
  };

  // Determine current theme
  const activeTheme =
    Object.entries(teamThemes).find(([key]) =>
      pathname.toLowerCase().includes(key)
    )?.[1] ?? { bg: "white", text: "text-black", logo: "/F1-logo.png" };

  return (
    <div
      className={`mx-auto flex w-full max-w-7xl justify-between px-4 py-5 top-0 absolute text-sm transition-colors duration-300`}
      style={{ backgroundColor: activeTheme.bg }}
    >
      {/* Left side */}
      <section className={`flex items-center gap-10 text-md ${activeTheme.text}`}>
        <Link href="/">
          <Image
            src={withBasePath(activeTheme.logo)}
            width={128}
            height={80}
            alt="Logo"
            className="rounded-xl transition-all duration-300"
          />
        </Link>

        <div className="flex items-center gap-4">
          {navitems.map((d, i) => (
            <div key={i} className="relative group px-2 py-3">
              <Link
                href={d.link ?? "#"}
                className={`flex cursor-pointer items-center gap-2 transition-all group-hover:opacity-80 ${activeTheme.text}`}
              >
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {d.children && <Dropdown items={d.children} />}
            </div>
          ))}
        </div>
      </section>

      {/* Right side */}
      <section className={`flex items-center gap-8 ${activeTheme.text}`}>
        <button className="h-fit opacity-80 hover:opacity-100 transition-all">
          Login
        </button>
        <button className={`h-fit rounded-xl border-2 px-4 py-2 opacity-80 hover:opacity-100 transition-all
          ${activeTheme.text} border-current`}>
          Register
        </button>
      </section>
    </div>
  );
};

export default Navbar;
