// "use client";

// import React, { useState } from "react";
// import CarGrid from "@/components/CarGrid";

// const TeamsPage: React.FC = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
//     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
//     "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <main className="pt-[80px]">
//       <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-4xl space-y-12 md:space-y-0 md:space-x-12 px-4">
//         {/* Left text section */}
//         <div className="flex flex-col space-y-6 max-w-lg">
//           <div className="text-4xl font-bold">Formula 1 Teams</div>
//           <div className="text-xl">
//             Founded over 75 years ago, Formula 1 has <br /> seen over{" "}
//             <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
//               170
//             </span>{" "}
//             different teams compete in the <br /> sport. This has allowed it to
//             earn over{" "}
//             <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold">
//               7 billion
//             </span>{" "}
//             <br /> in just the last two years without official <br /> data from
//             2025.
//           </div>
//         </div>

//         {/* Carousel */}
//         <div className="relative h-96 w-full max-w-md flex flex-col items-center justify-center">
//           <div className="relative w-full h-full overflow-hidden rounded-xl">
//             <img
//               src={images[currentIndex]}
//               alt={`F1 image ${currentIndex + 1}`}
//               className="h-full w-full object-cover transition-all duration-500"
//             />
//           </div>

//           {/* Arrows */}
//           <div className="absolute inset-y-0 left-0 flex items-center">
//             <button
//               onClick={prevSlide}
//               className="bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 hover:bg-opacity-75"
//             >
//               ◀
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <button
//               onClick={nextSlide}
//               className="bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 hover:bg-opacity-75"
//             >
//               ▶
//             </button>
//           </div>

//           {/* Navigation bar */}
//           <div className="flex mt-4 space-x-1 w-3/4">
//             {images.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`flex-1 h-1 rounded-full transition-all duration-300 ${
//                   idx === currentIndex ? "bg-violet-500" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <CarGrid />
//     </main>
//   );
// };

// export default TeamsPage;

import React from "react";

export const carousel = () => {
  return <div>carousel</div>;
};
