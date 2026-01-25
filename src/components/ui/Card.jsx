import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card({ title, description, icon, isFeatured, children }) {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={400}
      className={`w-full ${isFeatured ? "z-30" : "z-10"}`}
    >
      <div
        className={`
          relative rounded-xl overflow-hidden flex flex-col h-full
          backdrop-blur-md bg-white/20 border border-white/10 shadow-lg
          transition-all duration-500 group
          ${isFeatured ? "scale-[1.08] shadow-2xl" : "hover:scale-[1.05] hover:shadow-xl"}
        `}
      >
        {/* Body */}
        <div className="p-8 flex-1 text-center">
          {icon && (
            <div className={`mb-4 transition-transform duration-500 ${isFeatured ? "scale-125" : "group-hover:scale-110"}`}>
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-100 text-sm">{description}</p>
        </div>

        {/* Footer */}
        {children && (
          <div className="p-4 border-t border-white/10 bg-white/10">
            {children}
          </div>
        )}
      </div>
    </Tilt>
  );
}
