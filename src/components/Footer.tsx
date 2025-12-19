import React from "react";
import { Github, Twitter, Linkedin, ArrowRight, Globe } from "lucide-react";

// --- VISUAL ASSETS ---
const NoiseTexture = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.5] mix-blend-multiply z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
    }}
  />
);

const NavItem = ({ text, href }: { text: string; href: string }) => (
  <a
    href={href}
    className="group relative flex items-center justify-end gap-2 py-1"
  >
    <span className="font-display font-bold text-lg md:text-xl text-stone-500 group-hover:text-stone-900 transition-colors duration-300">
      {text}
    </span>
    {/* Blue/Orange Indicator Dot */}
    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 group-hover:bg-accent-coral transition-colors duration-300"></span>
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#E6E5DC] text-stone-900 font-sans overflow-hidden pt-16 pb-8 px-6 lg:px-12 border-t border-[#D1CEC4]">
      <NoiseTexture />

      {/* --- TOP BLACK LINE --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black" />

      {/* --- BACKGROUND WATERMARK --- */}
      <div className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 w-full overflow-hidden opacity-[0.9] pointer-events-none select-none flex justify-center z-0 leading-none mix-blend-multiply">
        <h2 className="font-display font-black text-[15vw] tracking-tighter whitespace-nowrap flex items-baseline">
          Write
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
            Natural
          </span>
          <span className="text-stone-900">.</span>
        </h2>
      </div>

      <div className="relative z-10 max-w-350 mx-auto">
        {/* --- MAIN CONTENT SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-start">
          {/* LEFT: BRAND & NEWSLETTER --- */}
          <div className="lg:col-span-5">
            {/* Main Logo */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-display font-black text-2xl tracking-tighter">
                Write
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                  Natural
                </span>
                .
              </h2>
            </div>

            <p className="font-serif text-lg text-stone-600 leading-relaxed max-w-sm mb-8">
              "We track the patterns that break the pattern. Built for those who
              refuse to sound average."
            </p>

            {/* Newsletter */}
            <div className="max-w-sm">
              <label className="font-serif italic text-lg text-stone-800 mb-3 block">
                Join the Research Index
              </label>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-r from-accent-purple to-accent-coral rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
                <div className="relative flex items-center bg-[#FDFCF8] rounded-full border border-[#D1CEC4] p-1 shadow-sm focus-within:border-stone-400 transition-all">
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    className="grow bg-transparent px-4 py-2 font-sans text-sm text-stone-900 placeholder-stone-400 focus:outline-none rounded-full"
                  />
                  <button className="p-2 bg-stone-900 text-white rounded-full hover:bg-accent-coral transition-colors shadow-sm">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: NAVIGATION --- */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col items-start lg:items-end pt-2">
            {/* Main Nav Items */}
            <div className="flex flex-col items-start lg:items-end gap-1 w-full mb-8">
              <NavItem text="The Humanizer" href="#" />
              <NavItem text="Bypass Methodology" href="#" />
              <NavItem text="The Archive" href="#" />
              <NavItem text="API Access" href="#" />
            </div>

            {/* Secondary Links Row */}
            <div className="flex gap-6 font-display text-sm font-bold tracking-wide text-stone-800">
              <a
                href="#"
                className="hover:text-accent-coral transition-colors border-b-2 border-transparent hover:border-accent-coral"
              >
                Manifesto
              </a>
              <span className="text-stone-400 opacity-50">/</span>
              <a
                href="#"
                className="hover:text-accent-coral transition-colors border-b-2 border-transparent hover:border-accent-coral"
              >
                Contact
              </a>
              <span className="text-stone-400 opacity-50">/</span>
              <a
                href="#"
                className="hover:text-accent-coral transition-colors border-b-2 border-transparent hover:border-accent-coral"
              >
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-6 flex flex-col md:flex-row items-end justify-between gap-6 md:gap-0">
          {/* LEFT: Location Node (Clean, Text only) */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest">
              Location Node
            </span>
            <span className="font-display text-sm font-bold text-stone-900 flex items-center gap-1.5">
              <Globe size={14} className="text-accent-coral" /> Bengaluru, IN
            </span>
          </div>

          {/* RIGHT: Socials, Legal, Copyright (Stacked Right Aligned) */}
          <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
            {/* Social Icons */}
            <div className="flex gap-2">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-stone-800 text-white hover:bg-accent-coral hover:border-accent-coral transition-all shadow-sm group"
                >
                  <Icon
                    size={14}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>

            {/* Legal Protocols & Copyright Row */}
            <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-6">
              {/* Legal Links (Moved here, clean text) */}
              <div className="flex gap-4 font-display text-xs font-bold text-stone-900 tracking-wide">
                <a
                  href="#"
                  className="hover:text-accent-coral transition-colors"
                >
                  Privacy
                </a>
                <span className="text-stone-300">•</span>
                <a
                  href="#"
                  className="hover:text-accent-coral transition-colors"
                >
                  Terms
                </a>
              </div>

              {/* Copyright */}
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black">
                © {currentYear} WriteNatural Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
