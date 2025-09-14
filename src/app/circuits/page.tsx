import CarouselSection from "@/components/Carousel";
import CarGrid from "@/components/CarGrid";
import TrackGrid from "@/components/TrackGrid"

const TeamsPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
  ];

  return (
    <main className="pt-[80px]">
      <CarouselSection
        title="Formula 1 Circuits"
        description={[
          { text: "Founded over 75 years ago, Formula 1 has seen over " },
          { text: "77", gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500" },
          { text: " different circuits to host Grand prixs on. There have been tracks on all  " },
          { text: "6", gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500" },
          { text: " continents, of course excluding Antarctica, due to its icy landscape" },
        ]}
        images={images}
      />

      <TrackGrid />
    </main>
  );
};

export default TeamsPage;
