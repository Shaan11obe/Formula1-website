import TeamPromo from "@/components/Header";

export default function MercedesPage() {
  return (
    <main>
      <TeamPromo
        teamName="Merecedes Petronas AMG F1 Team"
        carImage="/mercedes-logo.png"
        driverOne="George Russell"
        driverTwo="Andrea Kimi Antonelli"
        driverOneLink="/drivers/mercedes/russell"
        driverTwoLink="/drivers/mercedes/antonelli"
        backgroundColor="#C8CCCE"
        divider="/mercedes-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
