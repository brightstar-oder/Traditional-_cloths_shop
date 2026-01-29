import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Banner from "../components/ui/Banner";
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
import img1 from "../assets/image10.jpg";
import img3 from "../assets/imagee4.jpg";
import img4 from "../assets/imagee13.jpg";

const services = [
  { title: "ባህላዊ አልባሳት", description: "High-quality video editing tailored to your brand." },
  { title: "ባህላዊ ጫማ", description: "Creative graphic designs for modern brands." },
  { title: "ባህላዊ ጌጣጌጦች", description: "Engaging motion graphics and animations." },
  { title: "ባህላዊ ነጠላዎች", description: "Professional social media strategies."},
  { title: "ባህላዊ ", description: "Complete brand identity and visual systems."},
  { title: "Content Creation", description: "High-impact content for digital platforms." },
];

export default function Services() {
  const [featuredIndex, setFeaturedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-gray-100 flex flex-col items-center">
       <Banner/>
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-16 relative" data-aos="fade-up">
        የምናቀርባቸው አልባሳት
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
