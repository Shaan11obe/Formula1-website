import DriverStats from "@/components/Driver";

// not completed yet

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 p-6">
      <DriverStats
        driverName="Fernando Alonso"
        team="Aston Martin Aramco Formula 1 Team"
        driverNumber="14"
        country="Spanish"
        teamColor="#037A68" // Aston Martin Green   
        driverImage="${basePath}/drivers/alo.png"
        seasonStats={{
          "Season Position": "19th",
          "Season Points": "12",
          "Grand Prix Races": "16",
          "Grand Prix Wins": "0",
          "Grand Prix Points": "6",
          "Grand Prix Podiums": "0",
          "Grand Prix Poles": "0",
          "Grand Prix Top 10s": "4",
          "Fastest Laps": "0",
          "DNFs": "1",
          "Sprint Races": "3",
          "Sprint Points": "6",
          "Sprint Wins": "0",
          "Sprint Podiums": "0",
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
        memeImage="${basePath}/memes/fernando.jpg" // 👈 sticker in bottom-right
      />
    </main>
  );
}
