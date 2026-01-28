import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import {
  HiVideoCamera,
  HiColorSwatch,
  HiFilm,
  HiChat,
  HiPhotograph,
  HiPencilAlt,
} from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/photo_2026-01-22_14-31-50.jpg";
import img3 from "../assets/photo_2026-01-25_16-23-20.jpg";
import img4 from "../assets/photo_2026-01-25_16-20-59.jpg";

const services = [
  { title: "web app", description: "High-quality video editing tailored to your brand.", icon: <HiVideoCamera /> },
  { title: "mobile app", description: "Creative graphic designs for modern brands.", icon: <HiColorSwatch /> },
  { title: "website", description: "Engaging motion graphics and animations.", icon: <HiFilm /> },
  { title: "telegram bot", description: "Professional social media strategies.", icon: <HiChat /> },
  { title: "AI automation", description: "Complete brand identity and visual systems.", icon: <HiPhotograph /> },
  { title: "Content Creation", description: "High-impact content for digital platforms.", icon: <HiPencilAlt /> },
];

export default function Services() {
  const [featuredIndex, setFeaturedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-gray-100 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-16 relative" data-aos="fade-up">
        Our Services
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 from-blue-500 to-purple-500 rounded-full"></span>
      </h2>
<div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
  <img src={img1}  alt="" className="w-full md:w-1/3 object-cover rounded-lg h-130" />
  <img src={img3} alt="" className="w-full md:w-1/3 object-cover rounded-lg h-130" />
  <img src={img4} alt="" className="w-full md:w-1/3 object-cover rounded-lg h-130" />
</div>
      {/* Services Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 justify-items-center">
        {services.map((service, index) => (
          <div
            key={service.title}
            onMouseEnter={() => setFeaturedIndex(index)}
            onMouseLeave={() => setFeaturedIndex(null)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="transition-all duration-500"
          >
            <Card
              title={service.title}
              description={service.description}
              icon={service.icon}
              isFeatured={featuredIndex === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
