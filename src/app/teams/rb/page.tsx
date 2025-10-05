import TeamPromo from "@/components/Header";

export default function RbPage() {
  return (
    <main>
      <TeamPromo
        teamName="Vias Cash App Racing Bulls"
        carImage="/racingbulls-logo.png"
        driverOne="Isack Hadjar"
        driverTwo="Liam Lawson"
        driverOneLink="/drivers/rb"
        driverTwoLink="/under-construction"
        backgroundColor="#1432cb"
        divider="/racingbulls-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
