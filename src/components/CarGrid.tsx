import React from 'react'
import TiltCard from './TiltCard'

const CarGrid = () => {
  return (
    <section className="w-full h-screen flex items-center ">
        <div
          className="grid grid-cols-2 gap-6 w-full h-[90%] p-6 ml-12"
          style={{
            gridTemplateRows: `repeat(5, calc((100vh - 6*4)/5))`,
          }}
        >
          <TiltCard
            src="${basePath}/MCL39.png"
            title="MCL39 - 2025"
            subtitle="Lando Norris & Oscar Piastri"
          />
          <TiltCard
            src="${basePath}/RB21.png"
            title="RB21 - 2025"
            subtitle="Max Verstappen & Yuki Tsunoda"
          />
          <TiltCard
            src="${basePath}/SF25.png"
            title="SF25 - 2025"
            subtitle="Charles Leclerc & Lewis Hamilton"
          />
          <TiltCard
            src="${basePath}/W16.png"
            title="W16 - 2025"
            subtitle="George Russell & Andrea Kimi Antonelli"
          />
          <TiltCard
            src="${basePath}/AMR25.png"
            title="AMR25 - 2025"
            subtitle="Fernando Alonso & Lance Stroll"
          />
          <TiltCard
            src="${basePath}/FW47.png"
            title="FW47 - 2025"
            subtitle="Alex Albon & Carlos Sainz"
          />
          <TiltCard
            src="${basePath}/VCARB2.png"
            title="VCARB 02 - 2025"
            subtitle="Liam Lawson & Isack Hadjar"
          />
          <TiltCard
            src="${basePath}/C45.png"
            title="C45 - 2025"
            subtitle="Gabriel Bortoleto & Nico Hülkenberg"
          />
          <TiltCard
            src="${basePath}/A525.png"
            title="A525 - 2025"
            subtitle="Pierre Gasly & Franco Colapinto"
          />
          <TiltCard
            src="${basePath}/VF25.png"
            title="VF25 - 2025"
            subtitle="Esterban Ocon & Oliver Bearman"
          />
        </div>
      </section>
  )
}

export default CarGrid