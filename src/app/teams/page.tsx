import CarouselSection from "@/components/Carousel";
import CarGrid from "@/components/CarGrid";

const TeamsPage = () => {
  const images = [
    "/mclaren-logo.png",
    "/red-bull-logo.png",
    "/mercedes-logo.png",
    "/ferrari-logo.png",
    "/haas-logo.png",
    "/racingbulls-logo.png",
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
