import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiPhone, HiMail, HiChat } from "react-icons/hi";
import Banner from "../components/ui/Banner";
export default function Contact() {
  const sectionRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollTop = window.scrollY;
      sectionRef.current.style.backgroundPosition = `center ${scrollTop * 0.3}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const particles = particlesRef.current;

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const colors = [
      "rgba(59,130,246,0.5)", // blue
      "rgba(236,72,153,0.5)", // pink
      "rgba(139,92,246,0.5)", // purple
    ];

    const animateParticles = () => {
      particles.forEach((p, i) => {
        if (!p) return;

        let top = parseFloat(p.style.top);
        let left = parseFloat(p.style.left);
        const speed = parseFloat(p.dataset.speed);

        // Move down
        top += speed;
        if (top > 600) top = -10;

        // Cursor repulsion
        const rect = p.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - mouseX;
        const dy = rect.top + rect.height / 2 - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          left += (dx / dist) * 1.5;
        }

        // Keep in bounds
        if (left < 0) left = 0;
        if (left > 100) left = 100;

        // Color shift based on distance
        const colorIndex = Math.floor((dist / 100) * (colors.length - 1));
        p.style.backgroundColor = colors[colorIndex];

        p.style.top = `${top}px`;
        p.style.left = `${left}%`;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, []);

  const createParticles = (num) => {
    return Array.from({ length: num }).map((_, i) => {
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 600;
      const speed = Math.random() * 0.3 + 0.1;
      const color = "rgba(59,130,246,0.5)"; // initial blue
      return (
        <div
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          data-speed={speed}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}px`,
            backgroundColor: color,
            filter: "blur(2px)",
          }}
        />
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 text-center px-6 overflow-hidden"
    >
      {/* Dynamic Particles */}
      {createParticles(40)}

      {/* Heading */}
      <h2 className="text-5xl font-bold mb-16 relative z-10" data-aos="fade-up">
        ለመጎብኘት ዝግጁ ነዉት?
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent to-pink-500 rounded-full"></span>
      </h2>

      {/* Subheading */}
      <p className="text-gray-300 mb-12 max-w-xl mx-auto relative z-10" data-aos="fade-up" data-aos-delay="100">
        ምን ይፈልጋሉ? ወደ <span className="font-semibold text-white">ጉለሌ የገበያ ማዕከል</span> ይደዉሉ!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
        <a href="mailto:info@mrafmultimedia.com" className="group relative" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-pink-500 rounded-lg blur opacity-50 transition duration-300 group-hover:opacity-100 group-hover:scale-105 animate-gradient-x"></div>
          <button className="relative flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <HiMail className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            ያግኙን
          </button>
        </a>

        <a href="tel:0988737748" className="group relative" data-aos="fade-up" data-aos-delay="300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-50 transition duration-300 group-hover:opacity-100 group-hover:scale-105 animate-gradient-x"></div>
          <button className="relative flex items-center gap-2 px-8 py-3 bg-gray-900 text-blue-500 border border-blue-500 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-white">
            <HiPhone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            ይደዉሉ
          </button>
        </a>

        <a href="https://wa.me/251988737748" target="_blank" rel="noreferrer" className="group relative" data-aos="fade-up" data-aos-delay="400">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-50 transition duration-300 group-hover:opacity-100 group-hover:scale-105 animate-gradient-x"></div>
          <button className="relative flex items-center gap-2 px-8 py-3 bg-gray-900 text-green-500 border border-green-500 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-white">
            <HiChat className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            በዋሳፕ ያግኙን
          </button>
        </a>
      </div>

      {/* Phone */}
      <p className="text-gray-400 text-sm mt-8 relative z-10" data-aos="fade-up" data-aos-delay="500">
        📞 0988 737 748
      </p>
      <p className="text-gray-400 text-sm mt-8 relative z-10" data-aos="fade-up" data-aos-delay="500">
        📞 0924118022
      </p>

      {/* Google Map */}
      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg mt-12 relative z-10" data-aos="fade-up" data-aos-delay="600">
        <iframe
          title="Gulele market center"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12773.847173003325!2d38.7676114!3d9.0286635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8597f44b7f77%3A0x1a2e5b1b9c8a0f7d!2sGulele%20Gulele%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1702332000000!5m2!1sen!2set"
          width="100%"
          height="350"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

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
      `}</style>
      <Banner/>
    </section>
  );
}
