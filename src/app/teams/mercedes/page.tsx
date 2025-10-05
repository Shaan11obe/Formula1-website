import React from "react";
import TeamPromo from "@/components/Header";
// At the top of your component file


const page = () => {
  return (
    <main className="pt-20 mt-12 ">
      <TeamPromo
        teamName="Red Bull Racing"
        carImage="/red-bull-logo.png"
        drivers={["Max Verstappen", "Yuki Tsunoda"]}
        shopLink="/teams/redbull"
        driversLink="/drivers/redbull"
        divider="/red-bull-logo.png"
        />
    </main>
  );
};

export default page;
