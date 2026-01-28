import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {FaFacebook, FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import logo from "../../assets/photo_2026-01-28_06-07-29.jpg";

export default function Footer({ darkMode = true }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const socialLinks = [
    { href: "https://wa.me/251988737748", bg: "bg-green-500", icon: <FaWhatsapp />, label: "WhatsApp" },
    { href: "https://t.me/brightstar1214", bg: "bg-blue-500", icon: <FaTelegramPlane />, label: "Telegram" },
    { href: "https://www.instagram.com/", bg: "bg-pink-500", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://www.instagram.com/", bg: "bg-pink-500", icon: <FaFacebook />, label: "Facebook" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const footerBg = darkMode ? "bg-gray-900" : "bg-gray-50";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const grayText = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <footer className={`relative overflow-hidden pt-16 pb-32 ${footerBg} ${textColor}`}>

      {/* Gradient Background */}
      <div className="absolute inset-0 from-accent via-pink-500 to-purple-600 
                      animate-gradient-x opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 z-10">

        {/* Logo & Description */}
<div data-aos="fade-right" className="flex flex-col items-center md:items-start group animate-bob md:w-1/3">
  <img
    src={logo}
    alt="MRAF Multimedia Logo"
    className="h-20 w-20 md:h-32 md:w-32 rounded-full object-cover border border-white/20 shadow-md mb-3"
  />
  <h2 className="text-2xl md:text-3xl font-bold mb-1">ጉለሌ የገበያ ማዕከል</h2>
  <p className={`text-center md:text-left ${grayText}`}>
    ይምጡ ይጎበኙን
  </p>
  <p className={`text-center md:text-left ${grayText} mt-1`}>
    📍 ስድስት ኪሎ(የአሜሪካ ኤምባሲ ፊትለፊት)፣ አዲስ አበባ
  </p>
</div>


        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center md:items-start md:w-1/3">
          <h3 className="font-semibold mb-3">ፈጣን ማስፈንጠርያዎች</h3>
          <ul className="space-y-2 text-center md:text-left">
            {["አገልግሎቶች","አድራሻ", "ስለ እኛ"].map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleScroll(link.toLowerCase().replace(" ", ""))}
                  className={`relative px-1 py-0.5 hover:text-accent transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center md:items-end md:w-1/3">
          <h3 className="font-semibold mb-3">ማህበራዊ ማስፈንጠርያዎች</h3>
          <div className="flex gap-4 mb-4 animate-bob">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`${item.bg} p-3 rounded-full text-white shadow-md flex items-center justify-center text-lg
                           transition-transform duration-500 hover:scale-125 hover:rotate-12 hover:shadow-xl
                           relative group`}
              >
                {item.icon}
                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Bottom Line */}
      <div className="relative mt-12 pt-8 text-center z-20">
        <div className="w-24 h-1 mx-auto mb-3 rounded-full from-blue-400 to-purple-600 animate-bounce"></div>
        <p className="text-lg font-medium text-gray-300" data-aos="fade-up">
  የተጸነሰሰው እና የተሰራው በ{" "}
  <span className="text-transparent bg-clip-text from-blue-400 via-pink-500 to-purple-500 font-bold neon-text inline-block">
    ቴክኖሎጂስት ቡድን
  </span>
</p>

        <p className="text-sm text-gray-400 mt-1 tracking-wide animate-glow-float" data-aos="fade-up" data-aos-delay="150">
          መብቱ በህግ የተጠበቀ ነው &copy; {new Date().getFullYear()}
        </p>
      </div>

      {/* Waves */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none h-40">
        <svg className="relative block w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill={darkMode ? "#111827" : "#f3f4f6"} fillOpacity="0.6">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="
                M0,160 C360,200 1080,120 1440,160 L1440,320 L0,320 Z;
                M0,180 C360,100 1080,220 1440,180 L1440,320 L0,320 Z;
                M0,160 C360,200 1080,120 1440,160 L1440,320 L0,320 Z
              "
            />
          </path>
          <path fill={darkMode ? "#1f2937" : "#e5e7eb"} fillOpacity="0.6">
            <animate attributeName="d" dur="12s" repeatCount="indefinite"
              values="
                M0,180 C360,120 1080,200 1440,180 L1440,320 L0,320 Z;
                M0,160 C360,200 1080,120 1440,160 L1440,320 L0,320 Z;
                M0,180 C360,120 1080,200 1440,180 L1440,320 L0,320 Z
              "
            />
          </path>
          <path fill={darkMode ? "#374151" : "#d1d5db"} fillOpacity="0.8">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="
                M0,200 C360,140 1080,240 1440,200 L1440,320 L0,320 Z;
                M0,180 C360,220 1080,160 1440,180 L1440,320 L0,320 Z;
                M0,200 C360,140 1080,240 1440,200 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bob {
          animation: bob 4s ease-in-out infinite;
        }

        @keyframes glow-float {
          0%, 100% { transform: translateY(0); text-shadow: 0 0 6px rgba(255,255,255,0.2); }
          50% { transform: translateY(-3px); text-shadow: 0 0 12px rgba(255,255,255,0.4); }
        }
        .animate-glow-float {
          animation: glow-float 3s ease-in-out infinite;
        }
      `}
      </style>
    </footer>
  );
}
