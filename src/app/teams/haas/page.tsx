import TeamPromo from "@/components/Header";

export default function FerrariPage() {
  return (
    <main>
      <TeamPromo
        teamName="MoneyGram Haas F1 Team"
        carImage="/haas-logo.png"
        driverOne="Esteban Ocon"
        driverTwo="Oliver Bearman"
        driverOneLink="/under-construction"
        driverTwoLink="/drivers/haas"
        backgroundColor="#9c9fa2"
        divider="/haas-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
