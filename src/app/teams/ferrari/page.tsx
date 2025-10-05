import TeamPromo from "@/components/Header";

export default function FerrariPage() {
  return (
    <main>
      <TeamPromo
        teamName="Secuderia Ferrari HP"
        carImage="/ferrari-logo.png"
        driverOne="Charles Leclerc"
        driverTwo="Lewis Hamilton"
        driverOneLink="/drivers/ferrari/leclerc"
        driverTwoLink="/drivers/ferrari/hamilton"
        backgroundColor="#c4151c"
        divider="/ferrari-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
