import DriverStats from "@/components/Driver";

// not completed yet

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 p-6">
      <DriverStats
        driverName="Max Verstappen"
        team="RedBull Racing"
        driverNumber="1"
        country="Netherlands"
        teamColor="#00174C" // Redbull purple
        driverImage="./drivers/ver.png"
        seasonStats={{
          "Season Position": "3rd",
          "Season Points": "230",
          "Grand Prix Races": "16",
          "Grand Prix Wins": "3",
          "Grand Prix Points": "216",
          "Grand Prix Podiums": "7",
          "Grand Prix Poles": "5",
          "Grand Prix Top 10s": "15",
          "Fastest Laps": "1",
          "DNFs": "1",
          "Sprint Races": "3",
          "Sprint Points": "14",
          "Sprint Wins": "1",
          "Sprint Podiums": "2",
          "Sprint Poles": "0",
          "Sprint Top 10s": "2",
        }}
        careerStats={{
          "Grand Prix Entered": "103",
          "Career Points": "103",
          "Highest Race Finish": "4 (x1)",
          "Podiums": "0",
          "Highest Grid Position": "3 (x1)",
          "Pole Positions": "0",
          "World Championships": "0",
          "DNFs": "15",
        }}
      />
    </main>
  );
}
