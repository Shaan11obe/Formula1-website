import TeamPromo from "@/components/Header";

export default function FerrariPage() {
  return (
    <main>
      <TeamPromo
        teamName="Red Bull Racing"
        carImage="/red-bull-logo.png"
        driverOne="Max Verstappen"
        driverTwo="Yuki Tsunoda"
        driverOneLink="/drivers/redbull/verstappen"
        driverTwoLink="/drivers/redbull/tsunoda"
        backgroundColor="#00174C" // Redbull purple
        divider="/red-bull-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
