import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiLockClosed } from "react-icons/hi";
import logo from "../../assets/photo_2026-01-28_06-07-29.jpg";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "ማስገብያ", to: "/" },
    { name: "ስለ እኛ", to: "/about" },
    { name: "ምርቶቻችን", to: "/service" },
    { name: "አድራሻችን", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileBg = scrolled
    ? "bg-gray-900/95 backdrop-blur-md"
    : "bg-white/95 backdrop-blur-md";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/70 backdrop-blur-md h-14 shadow-lg"
          : "h-16 bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* LOGO */}
        <Link to="/" className="flex items-center z-50">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover
              border border-white/20 shadow-md transition-transform
              hover:scale-110 hover:ring-2 hover:ring-blue-500"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {links.map((link) => {
            if (link.isLogin) {
              // Login small rounded button with lock
              return (
                <button
                  key={link.name}
                  onClick={() => navigate(link.to)}
                  className="flex items-center gap-1 px-4 py-1 rounded-full font-medium
                    bg-blue-600 text-white hover:bg-blue-700 transition duration-300 text-sm"
                >
                  <HiLockClosed className="w-4 h-4" />
                  {link.name}
                </button>
              );
            } else {
              // Regular nav links with gradient underline on active
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300 text-gray-900 hover:text-blue-500 ${
                      scrolled ? "text-white hover:text-blue-400" : ""
                    }`
                  }
                >
                  {link.name}
                  {/* Gradient underline for active */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full transition-all duration-500 ${
                      window.location.pathname === link.to
                        ? " from-blue-500 to-purple-500"
                        : "bg-transparent"
                    }`}
                  ></span>
                </NavLink>
              );
            }
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="w-7 h-7 text-white" />
          ) : (
            <HiMenu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-emerald-500 fixed top-0 right-0 h-full w-64 ${mobileBg}
          shadow-lg transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"} z-40`}
      >
        <div className="flex flex-col px-6 py-8 space-y-4">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white"
          >
            <HiX className="w-7 h-7" />
          </button>

          {links.map((link) => {
            if (link.isLogin) {
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsOpen(false);
                    navigate(link.to);
                  }}
                  className="w-full py-2 rounded-full font-medium flex items-center justify-center gap-2
                    bg-blue-600 text-white hover:bg-blue-700 transition text-sm"
                >
                  <HiLockClosed className="w-4 h-4" />
                  {link.name}
                </button>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition duration-300
                    ${
                      scrolled
                        ? "text-white hover:text-blue-500"
                        : "text-gray-900 hover:text-blue-500"
                    }`}
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </header>
  );
}
