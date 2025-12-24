import React from "react";
import { Link } from "react-router-dom";
import { MoveLeft, Fingerprint, ArrowDown, FileWarning } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-cream selection:bg-accent-coral selection:text-white font-sans text-stone-900 overflow-hidden flex flex-col items-center justify-center p-6">
      {/* --- 1. GLOBAL TEXTURE (Grain) --- */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- 2. BACKGROUND ELEMENTS --- */}
      {/* Giant Fingerprint (Subtle) */}
      <div className="absolute right-[-10%] bottom-[-10%] w-150 h-150 opacity-[0.03] pointer-events-none -rotate-12 mix-blend-multiply">
        <Fingerprint size="100%" className="text-stone-900" />
      </div>

      {/* --- 3. MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header Label */}
        <div className="text-center mb-12">
          <h1 className="font-display font-black text-6xl md:text-8xl text-stone-900 tracking-tighter leading-none">
            Error{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
              404
            </span>
          </h1>
        </div>

        {/* --- THE PAPER CARD --- */}
        <div className="relative">
          {/* Back Paper (Decorative Stack) */}
          <div className="absolute top-3 left-3 w-full h-full bg-stone-200 border border-stone-900 z-0 rounded-sm"></div>

          {/* Front Paper (The Interaction) */}
          <div className="relative bg-white border border-stone-900 p-8 md:p-12 z-10 shadow-2xl rounded-sm">
            <div className="space-y-8">
              {/* PART 1: The "AI" Language */}
              <div className="flex gap-3 items-start opacity-70">
                {/* Icon inline with text acting as a bullet */}
                <div className="mt-1 text-stone-400 shrink-0">
                  <FileWarning size={16} />
                </div>
                <p className="font-serif text-sm md:text-base text-stone-600 leading-relaxed line-through decoration-red-400/70 decoration-2">
                  "The requested destination path could not be resolved to an
                  existing file directory on this server architecture."
                </p>
              </div>

              {/* The Arrow Connector */}
              <div className="flex justify-center text-stone-300">
                <ArrowDown size={24} />
              </div>

              {/* PART 2: The "Human" Language */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-accent-purple/10 text-accent-purple px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">
                    Humanized
                  </span>
                </div>
                {/* Flow corrected: Removed <br> */}
                <p className="font-serif font-medium text-2xl md:text-3xl text-stone-900 leading-tight">
                  "There is simply{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral font-bold">
                    nothing here
                  </span>
                  ."
                </p>
                <p className="font-serif text-sm md:text-base text-stone-500 mt-4 italic">
                  It looks like this link is broken, empty, or gone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. THE JEWEL BUTTON --- */}
        <div className="mt-12 flex justify-center">
          <Link to="/">
            <button className="group relative rounded-full p-0.5 overflow-hidden transition-transform duration-300 hover:scale-105 shadow-xl shadow-stone-900/10">
              {/* Gradient Border Background */}
              <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />

              {/* Button Face */}
              <div className="relative px-8 py-4 bg-cream rounded-full flex items-center gap-3 group-hover:bg-white transition-colors">
                <MoveLeft
                  size={20}
                  className="text-accent-coral group-hover:-translate-x-1 transition-transform"
                />
                <span className="text-sm font-bold bg-clip-text text-transparent bg-linear-to-r from-stone-900 to-stone-700 uppercase tracking-widest">
                  Take Me Home
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
