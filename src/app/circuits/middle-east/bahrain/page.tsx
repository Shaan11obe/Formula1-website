import React from "react";
import ScheduleCard from "@/components/Schedule";
// At the top of your component file
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const bahrainSchedule = [
  {
    date: "14 MAR",
    sessions: [
      { name: "PRACTICE 1", time: "12:30 - 13:30" },
      { name: "PRACTICE 2", time: "16:00 - 17:00" },
    ],
  },
  {
    date: "15 MAR",
    sessions: [
      { name: "PRACTICE 3", time: "12:30 - 13:30" },
      { name: "QUALIFYING", time: "16:00 - 17:00" },
    ],
  },
  {
    date: "16 MAR",
    sessions: [{ name: "RACE", time: "15:00" }],
  },
];

const page = () => {
  return (
    <section className="pt-12 min-h-screen">
      <ScheduleCard
        schedule={bahrainSchedule}
        circuitName="Bahrain International Circuit"
        country="Bahrain"
        info="'yabba dabba doo'~ Scooby Doo"
        trackImg="/tracks/BAHRAIN.png"
      />
    </section>
  );
};

export default page;
