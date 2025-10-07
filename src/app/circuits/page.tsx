import CarouselSection from "@/components/Carousel";
import TrackGrid from "@/components/TrackGrid"

const TeamsPage = () => {
  const images = [
    "/tracks/ALBERT_PARK.jpg",
    "/tracks/SHANGHAI.jpg",
    "/tracks/SUZUKA.jpg",
    "/tracks/BAHRAIN.jpg",
    "/tracks/JEDDAH.jpg",
    "/tracks/MIAMI.jpg",
    "/tracks/IMOLA.jpg",
    "/tracks/MONACO.jpg",
  ];

  return (
    <main className="">
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
