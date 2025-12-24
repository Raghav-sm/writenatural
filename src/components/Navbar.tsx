import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Fingerprint } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- UPDATED LINKS ---
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Editor", path: "/humanizer" },
    { name: "Signature", path: "/signature" },
    { name: "Pricing", path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div
          className={`
            pointer-events-auto mt-6
            w-[90%] md:w-212.5
            rounded-full py-3 px-6
            flex items-center justify-between
            transition-all duration-500 ease-out
            border
            
            ${
              scrolled
                ? "bg-cream/90 backdrop-blur-xl border-stone-200/60 shadow-xl shadow-stone-900/5"
                : "bg-cream/60 backdrop-blur-md border-white/50 shadow-sm shadow-stone-900/5"
            }
          `}
        >
          {/* 1. LEFT: The Logo */}
          <Link to="/" className="flex items-center gap-3 group z-10 mr-auto">
            <div className="flex items-center justify-center rounded-full w-8 h-8 bg-stone-900 text-white transition-transform group-hover:scale-110">
              <Fingerprint size={16} />
            </div>
            <span className="font-display font-bold text-lg leading-none tracking-tight">
              <span className="text-black">Write</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                Natural
              </span>
              <span>.</span>
            </span>
          </Link>

          {/* 2. CENTER: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group
                  ${
                    isActive(link.path)
                      ? "text-stone-900"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-coral opacity-0 transition-all duration-300 ${
                    isActive(link.path)
                      ? "opacity-100 scale-100"
                      : "group-hover:opacity-50 group-hover:scale-100 scale-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* 3. RIGHT: The "Jewel" Button Group */}
          <div className="hidden md:flex items-center gap-6 z-10 ml-auto">
            <Link
              to="/login"
              className="text-sm font-bold text-stone-500 hover:text-stone-900 transition-colors"
            >
              Log In
            </Link>

            <Link to="/humanizer">
              <button className="group relative rounded-full p-px overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />
                <div className="relative px-5 py-2.5 bg-cream rounded-full flex items-center gap-2 group-hover:bg-white transition-colors">
                  <span className="text-xs font-bold bg-clip-text text-transparent bg-linear-to-r from-stone-900 to-stone-700 uppercase tracking-wide">
                    Start
                  </span>
                  <ArrowRight
                    size={12}
                    className="text-accent-coral group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-900 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl flex flex-col pt-32 px-8 animate-in fade-in duration-200 h-screen overflow-hidden">
          {/* NEW: Vertical Text Decoration on Right Side */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-90 z-0">
            <div className="font-display font-black text-[12vh] leading-none [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
              <span className="text-stone-900">Write</span>
              {/* Removed pb-4 and joined spans to prevent whitespace gaps */}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-blue-600 via-accent-purple to-accent-coral">
                Natural
              </span>
              <span className="text-stone-900">.</span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-8 pb-10 overflow-y-auto h-full pr-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold text-stone-900 flex justify-between items-center group"
              >
                {link.name}
                <ArrowRight
                  className="text-stone-300 group-hover:text-accent-coral transition-colors"
                  size={24}
                />
              </Link>
            ))}

            <div className="mt-8 border-t border-stone-200 pt-8 flex flex-col gap-6">
              <Link to="/login" className="text-xl font-bold text-stone-500">
                Log In
              </Link>

              {/* UPDATED MOBILE CAPSULE BUTTON */}
              <Link to="/humanizer" onClick={() => setIsOpen(false)}>
                <button className="w-full group relative rounded-full p-0.5 overflow-hidden transition-transform active:scale-[0.98] shadow-xl shadow-stone-900/10">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />

                  {/* Inner Face - Matches Desktop Aesthetic */}
                  <div className="relative w-full py-4 bg-cream rounded-full flex items-center justify-center gap-3 group-hover:bg-white transition-colors">
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-stone-900 to-stone-700 uppercase tracking-widest">
                      Start Writing
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-accent-coral group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
