import TeamPromo from "@/components/Header";

export default function WilliamsPage() {
  return (
    <main>
      <TeamPromo
        teamName="Atlassian Williams F1 Team"
        carImage="/williams-logo.png"
        driverOne="Alex Albon"
        driverTwo="Carlos Sainz"
        driverOneLink="/drivers/williams/albon"
        driverTwoLink="/drivers/williams/sainz"
        backgroundColor="#041e42"
        divider="/williams-logo.png" // ✅ Added divider prop
        shopLink="/under-construction"
      />
    </main>
  );
}
