import React from "react";
import img1 from "../../assets/photo_2026-01-28_06-07-29.jpg";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-black">
      
      {/* Image (top protected) */}
      <img
        src={img1}
        alt="Traditional Clothing"
        className="inset-0 w-full h-full object-cover object-top mb-13"
      />

      {/* Bottom gradient (stronger) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Bottom content (raised to avoid collision) */}

    </section>
  );
}
