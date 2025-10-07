import TeamPromo from "@/components/Header";

export default function MclarenPage() {
  return (
    <main>
      <TeamPromo
        teamName="Mclaren F1 Team"
        carImage="/mclaren-logo.png"
        driverOne="Lando Norris"
        driverTwo="Oscar Piastri"
        driverOneLink="/drivers/mclaren/norris"
        driverTwoLink="/drivers/mclaren/piastri"
        backgroundColor="#FF8000"
        divider="/mclaren-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
