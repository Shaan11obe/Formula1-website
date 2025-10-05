import React from "react";
import TeamPromo from "@/components/Header";
// At the top of your component file


const page = () => {
  return (
    <main className="pt-20 mt-12 ">
      <TeamPromo
        teamName="MoneyGram Haas F1 Team"
        carImage="/haas-logo.png"
        drivers={["Esteban Ocon", "Oliver Bearman"]}
        shopLink="/teams/haas"
        driversLink="/drivers/haas"
        divider="/haas-logo.png"
        />
    </main>
  );
};

export default page;
