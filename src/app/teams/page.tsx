import CarouselSection from "@/components/Carousel";
import CarGrid from "@/components/CarGrid";

const TeamsPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
  ];

  return (
    <main className="">
      <CarouselSection
        title="Formula 1 Teams"
        description={[
          { text: "Founded over 75 years ago, Formula 1 has seen over " },
          { text: "170", gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500" },
          { text: " different teams compete in the sport. This has allowed it to earn over " },
          { text: "7 billion", gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500" },
          { text: " in just the last two years without official data from 2025." },
        ]}
        images={images}
      />

      <CarGrid />
    </main>
  );
};

export default TeamsPage;
