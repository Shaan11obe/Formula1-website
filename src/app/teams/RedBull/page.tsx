import React from "react";
import TeamPromo from "@/components/Header";
// At the top of your component file
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const page = () => {
  return (
    <main className="pt-20 mt-12 ">
      <TeamPromo
        teamName="Red Bull Racing"
        carImage="/RB21.png"
        drivers={["Max Verstappen", "Yuki Tsunoda"]}
        shopLink="/teams/redbull"
        driversLink="/drivers/redbull"
        divider={
          <img
            src="/red-bull-logo.png"
            alt="Red Bull logo"
            className="w-12 h-12"
          />
        }
      />
    </main>
  );
};

export default page;
