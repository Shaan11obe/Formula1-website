import React from 'react'
import ScheduleCard from "@/components/Schedule"
// At the top of your component file



const brazilSchedule = [
    {
      date: '14 MAR',
      sessions: [
        { name: 'PRACTICE 1', time: '12:30 - 13:30' },
        { name: 'PRACTICE 2', time: '16:00 - 17:00' },
      ],
    },
    {
      date: '15 MAR',
      sessions: [
        { name: 'PRACTICE 3', time: '12:30 - 13:30' },
        { name: 'QUALIFYING', time: '16:00 - 17:00' },
      ],
    },
    {
      date: '16 MAR',
      sessions: [
        { name: 'RACE', time: '15:00' },
      ],
    },
  ];

const page = () => {
  return(
    <section className="pt-12 min-h-screen">
    <ScheduleCard schedule={brazilSchedule} circuitName='Autódromo José Carlos Pace' country='Brazil' info="'yabba dabba doo'~ Scooby Doo" trackImg="/tracks/INTERLAGOS.png" />
    </section>
  )
}

export default page