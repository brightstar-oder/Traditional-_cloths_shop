import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import {
  HiVideoCamera,
  HiPhotograph,
  HiMusicNote,
  HiFilm,
  HiShoppingCart,
} from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

// Portfolio items
const portfolioItems = [
  {
    title: "Wedding Videography",
    description: "Capture every magical moment of your wedding with cinematic storytelling.",
    icon: <HiVideoCamera className="text-4xl text-pink-500" />,
    category: "Wedding",
    media: [
      "https://www.youtube.com/embed/i6yNgwMVQRQ?rel=0&modestbranding=1&loop=1&playlist=i6yNgwMVQRQ"
    ],
    isVideo: true,
  },
  {
    title: "Baptism Coverage",
    description: "Professional coverage of baptism ceremonies preserving precious memories.",
    icon: <HiPhotograph className="text-4xl text-blue-500" />,
    category: "Baptism",
    media: [
      "https://www.youtube.com/embed/VIDEO_ID_1?rel=0&modestbranding=1&loop=1&playlist=VIDEO_ID_1",
      "https://www.youtube.com/embed/VIDEO_ID_2?rel=0&modestbranding=1&loop=1&playlist=VIDEO_ID_2"
    ],
    isVideo: true,
  },
  {
    title: "Birthday Events Coverage",
    description: "Creative and lively video/photo coverage for birthdays and celebrations.",
    icon: <HiMusicNote className="text-4xl text-yellow-400" />,
    category: "Birthday",
    media: [
      "https://picsum.photos/400/300?random=31",
      "https://picsum.photos/400/300?random=32"
    ],
  },
  {
    title: "Music Video Production",
    description: "Professional music video production to bring your artistic vision to life.",
    icon: <HiFilm className="text-4xl text-purple-400" />,
    category: "Music Video",
    media: [
      "https://picsum.photos/400/300?random=41",
      "https://picsum.photos/400/300?random=42"
    ],
  },
];

export default function Portfolio() {
  const [featuredIndex, setFeaturedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [playVideoIndex, setPlayVideoIndex] = useState({}); // track per-card video playing

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categories = ["All", ...new Set(portfolioItems.map((i) => i.category))];
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  const handlePlayVideo = (cardIndex, videoIndex) => {
    setPlayVideoIndex((prev) => ({ ...prev, [cardIndex]: videoIndex }));
  };

  return (
    <section className="py-24 bg-gray-900 text-gray-100 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-12 relative tracking-tight">
        Our Work
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-pink-500 rounded-full" />
      </h2>

      {/* CATEGORY FILTER */}
      <div className="flex gap-4 mb-12 overflow-x-auto px-4 py-2 scrollbar-hide w-full max-w-7xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-6 py-2 rounded-full font-semibold transition-all duration-300 text-lg ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PORTFOLIO GRID */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {filteredItems.map((item, cardIndex) => (
          <div
            key={item.title}
            onMouseEnter={() => setFeaturedIndex(cardIndex)}
            onMouseLeave={() => setFeaturedIndex(null)}
            className="transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
          >
            {item.isVideo ? (
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
                {item.media.map((videoUrl, videoIndex) => (
                  <div key={videoIndex} className="mb-4">
                    {/* Thumbnail or iframe */}
                    {playVideoIndex[cardIndex] === videoIndex ? (
                      <div className="relative w-full pt-[56.25%]">
                        <iframe
                          src={videoUrl}
                          title={item.title}
                          className="absolute top-0 left-0 w-full h-full rounded-md"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div
                        className="relative cursor-pointer w-full"
                        onClick={() => handlePlayVideo(cardIndex, videoIndex)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${videoUrl.split("/embed/")[1].split("?")[0]}/hqdefault.jpg`}
                          alt={item.title}
                          className="w-full object-cover rounded-md"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                          <div className="bg-black/40 rounded-full p-4 hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-4xl">▶</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="p-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ) : (
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                isFeatured={featuredIndex === cardIndex}
              >
                <button className="w-full bg-accent hover:bg-pink-500 text-white py-2 rounded-full font-semibold transition text-lg">
                  View More
                </button>
              </Card>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
