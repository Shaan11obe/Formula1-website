import React from "react";
import TeamPromo from "@/components/Header";
// At the top of your component file


const page = () => {
  return (
    <main className="pt-20 mt-12 ">
      <TeamPromo
        teamName="McLaren Racing Ltd"
        carImage="/mclaren-logo.png"
        drivers={["Max Verstappen", "Yuki Tsunoda"]}
        shopLink="/under-construction"
        driversLink="/drivers/mclaren"
        divider="/mclaren-logo.png"
        />
    </main>
  );
};

export default page;
