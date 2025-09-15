"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

type Session = {
  name: string;
  time: string;
};

type ScheduleDay = {
  date: string;
  sessions: Session[];
};

type ScheduleCardProps = {
  schedule: ScheduleDay[];
  circuitName: string;
  country: string;
  info: string;
  trackImg: string;
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  schedule,
  circuitName,
  country,
  info,
  trackImg,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-md w-3/4 max-w-6xl mx-auto font-sans">
      <div className="flex space-x-46 mb-4">
        {/* Text info */}
        <div className="flex flex-col">
          <div className="text-4xl font-bold">{country}</div>
          <div className="text-2xl text-neutral-600">{circuitName}</div>
          <div className="text-lg text-black mt-2">{info}</div>
        </div>

        {/* Dynamic track image */}
        <Image
          src={trackImg}
          alt={`${circuitName} track`}
          width={300}
          height={200}
          className="rounded-lg shadow-md object-contain"
        />
      </div>

      {/* Toggle header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left mb-4"
      >
        <span className="text-xl font-semibold">Schedule</span>
        <IoIosArrowDown
          className={`w-6 h-6 transform transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {/* Schedule content */}
      {open && (
        <div className="space-y-6">
          {schedule.map((day, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-2">{day.date}</h3>
              <ul className="space-y-2">
                {day.sessions.map((session, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b pb-2"
                  >
                    <span className="font-medium">{session.name}</span>
                    <span className="text-gray-600">{session.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
