import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaBullseye, FaStar } from "react-icons/fa"; // Icons for Vision, Mission, Core Values

// Founders’ images
import berihuPhoto from "../assets/images/berihu.jpg";
import hadushPhoto from "../assets/ሙኡዝ.jpg";
import henokPhoto from "../assets/ሙዝ1.jpg";

const leadership = [
  {
    name: "Berihu (Brightstar)",
    role: "UI/UX",
    photo: berihuPhoto,
    description:
      "ድረ ገጽና ሲስተም አልሚ",
  },
  {
    name: "Muez",
    role: "ድህረ ሲስተም",
    photo: hadushPhoto,
    description:
      "ድረ ገጽና ሲስተም አልሚ",
  },
  {
    name: "Muez",
    role: "ሞባይል መተግበርያ",
    photo: henokPhoto,
    description:
      "ድረ ገጽና ሲስተም አልሚ",
  },
];

const teamMembers = [
  { name: "web and developer ", role: "Developers", photo: "https://i.pravatar.cc/150?img=1" },
  { name: "web and developer", role: "Developers", photo: "https://i.pravatar.cc/150?img=2" },
  { name: "web and developer", role: "Developers", photo: "https://i.pravatar.cc/150?img=3" },
  { name: "web and developer", role: "Developers", photo: "https://i.pravatar.cc/150?img=4" },
  { name: "web and developer", role: "Developers", photo: "https://i.pravatar.cc/150?img=5" },
  { name: "web and developer", role: "Developers", photo: "https://i.pravatar.cc/150?img=6" },
  { name: "web and developer", role: "Developers", photo: "https://i.pravatar.cc/150?img=7" },
];

const infoCards = [
  {
    title: "Our Vision",
    description:
      "To become a globally trusted multimedia brand, recognized for creativity, quality, and innovation.",
    gradient: "from-blue-600 to-purple-600",
    icon: <FaEye className="text-white w-8 h-8 mb-4 mx-auto transition-transform duration-300" />,
  },
  {
    title: "Our Mission",
    description:
      "Deliver high-quality multimedia productions while leveraging technology to streamline projects and exceed client expectations.",
    gradient: "from-pink-500 to-red-500",
    icon: <FaBullseye className="text-white w-8 h-8 mb-4 mx-auto transition-transform duration-300" />,
  },
  {
    title: "Core Values",
    description:
      "Creativity, Precision, Innovation, Reliability, and Client Satisfaction guide every project we undertake.",
    gradient: "from-green-500 to-teal-500",
    icon: <FaStar className="text-white w-8 h-8 mb-4 mx-auto transition-transform duration-300" />,
  },
];

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="relative text-gray-100 font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-screen flex justify-center items-center px-4">
        <div
          className="bg-gray-900 bg-opacity-90 rounded-3xl shadow-2xl p-12 md:p-20 text-center max-w-4xl w-full relative z-10"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">
            መገናኛ የባህላዊ አልባሳት መሸጫ          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            አስተማማኝ እና ህጋዊ አገልግሎት በጥራት
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/Service"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
            >
              አገልግሎቶች
            </a>
            <a
              href="/contact"
              className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-300 transition transform hover:scale-105"
            >
              ይጎበኙን
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl opacity-70"></div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 relative bg-gray-900">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
          data-aos="fade-up"
        >
          Our Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {leadership.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-4 text-center hover:shadow-xl hover:scale-105 transform transition relative group max-w-xs"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3 border-4 border-white shadow-lg"
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-xl flex items-center justify-center text-white font-semibold transition">
                {person.role}
              </div>

              <h3 className="font-bold text-gray-100 text-lg mb-1">{person.name}</h3>
              <p className="text-blue-400 font-bold mb-2">{person.role}</p>
              <p className="text-gray-100 text-sm md:text-base leading-relaxed font-semibold tracking-wide">
                {person.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-4 text-center hover:shadow-xl hover:scale-105 transform transition relative group cursor-pointer"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-xl flex items-center justify-center text-white font-semibold transition">
                {member.role}
              </div>
              <h3 className="font-semibold text-gray-100">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-24 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center bg-gray-800">
        {infoCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="relative rounded-3xl p-8 max-w-xs shadow-2xl hover:scale-105 transform transition overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-70 animate-gradient-slow rounded-3xl`}
            />
            <div className="relative z-10 text-center">
              {/* Icon with hover glow */}
              <div className="group-hover:animate-pulse">
                {React.cloneElement(card.icon, { className: "w-10 h-10 mb-4 mx-auto text-white hover:scale-125 hover:shadow-lg transition-transform duration-300" })}
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
                {card.title}
              </h3>
              <p className="text-gray-100 text-sm md:text-base leading-relaxed font-semibold tracking-wide">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
