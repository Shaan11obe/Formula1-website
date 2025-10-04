import DriverStats from "@/components/Driver";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 p-6">
      <DriverStats
        driverName="Oscar Piastri"
        team="McLaren"
        driverNumber="81"
        country="Australia"
        teamColor="#FF8000" // McLaren papaya
        driverImage={`${basePath}/drivers/pia.png`}
        seasonStats={{
          "Season Position": "1st",
          "Season Points": "324",
          "Grand Prix Races": "16",
          "Grand Prix Wins": "7",
          "Grand Prix Points": "303",
          "Grand Prix Podiums": "14",
          "Grand Prix Poles": "5",
          "Grand Prix Top 10s": "16",
          "Fastest Laps": "5",
          "DNFs": "0",
          "Sprint Races": "3",
          "Sprint Points": "21",
          "Sprint Wins": "0",
          "Sprint Podiums": "3",
          "Sprint Poles": "1",
          "Sprint Top 10s": "3",
        }}
        careerStats={{
          "Grand Prix Entered": "62",
          "Career Points": "713",
          "Highest Race Finish": "1 (x9)",
          "Podiums": "24",
          "Highest Grid Position": "1 (x5)",
          "Pole Positions": "5",
          "World Championships": "0",
          "DNFs": "3",
        }}
      />
    </main>
  );
}
