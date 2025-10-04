import DriverStats from "@/components/Driver";

// not completed yet


export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-900 p-6">
      <DriverStats
        driverName="Carlos Sainz"
        team="Atlassian Williams Racing"
        driverNumber="55"
        country="Spain"
        teamColor="#00A0DE" // williams Blue
        driverImage="/drivers/sai.png"
        seasonStats={{
          "Season Position": "2nd",
          "Season Points": "293",
          "Grand Prix Races": "16",
          "Grand Prix Wins": "5",
          "Grand Prix Points": "278",
          "Grand Prix Podiums": "13",
          "Grand Prix Poles": "4",
          "Grand Prix Top 10s": "14",
          "Fastest Laps": "6",
          "DNFs": "2",
          "Sprint Races": "3",
          "Sprint Points": "15",
          "Sprint Wins": "1",
          "Sprint Podiums": "2",
          "Sprint Poles": "0",
          "Sprint Top 10s": "3",
        }}
        careerStats={{
          "Grand Prix Entered": "62",
          "Career Points": "713",
          "Highest Race Finish": "1 (x9)",
          "Podiums": "24",
          "Highest Grid Position": "1 (x13)",
          "Pole Positions": "13",
          "World Championships": "0",
          "DNFs": "13",
        }}
      />
    </main>
  );
}
