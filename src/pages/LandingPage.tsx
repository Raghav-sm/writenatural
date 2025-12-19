import React from "react";
import { Link } from "react-router-dom";
import { MoveRight, ArrowDown, Asterisk, ArrowRight } from "lucide-react";

export const LandingPage: React.FC = () => {


  return (
    <div className="relative w-full min-h-screen bg-cream selection:bg-accent-coral selection:text-white font-sans text-stone-900 overflow-x-hidden">
      {/* --- GLOBAL TEXTURE (Grain) --- */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-20 px-6 lg:px-12 max-w-350 mx-auto min-h-[85vh] flex flex-col justify-center overflow-visible">
        {/* BIG BACKGROUND TEXT (WriteNatural) - Top Right, Half-Eaten */}
        <div className="absolute top-20 -right-[20vw] lg:-right-[10vw] opacity-[0.9] select-none pointer-events-none z-0 leading-[0.8]">
          <span className="block font-display font-black text-[12rem] lg:text-[18rem] text-black tracking-tighter whitespace-nowrap">
            Write
          </span>
          {/* UPDATED: Natural is now Gradient */}
          <span className="block font-display font-black text-[12rem] lg:text-[18rem] text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral tracking-tighter ml-40 whitespace-nowrap">
            Natural
          </span>
        </div>

        {/* --- UPDATED LEFT PART: Highlighters --- */}
        <div className="flex flex-col gap-8 max-w-4xl relative z-20">
          {/* Main Header with Highlighter Effects */}
          <h1 className="font-display font-bold text-7xl md:text-9xl tracking-tighter leading-[1.1] text-stone-900">
            {/* Row 1: AI Text (Purple Highlight) */}
            <span className="relative inline-block whitespace-nowrap mr-4">
              {/* The Purple Highlighter Mark */}
              <span className="absolute -inset-1 top-2 bottom-2 bg-accent-purple/30 -skew-x-6 -rotate-1 rounded-sm -z-10 block"></span>
              AI Text
            </span>
            <br />

            {/* Row 2: Humanizer (Coral Highlight) */}
            <span className="relative inline-block whitespace-nowrap">
              {/* The Coral Highlighter Mark */}
              <span className="absolute -inset-1 top-2 bottom-2 bg-accent-coral/30 skew-x-3 rotate-1 rounded-sm -z-10 block"></span>
              Humanizer.
            </span>
          </h1>
        </div>

        {/* The Split Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative">
          {/* Left: Value Prop */}
          <div className="lg:col-span-5 flex flex-col gap-10 relative z-20 pb-4">
            {/* Text Block */}
            <div className="relative">
              <p className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] mb-6">
                We don't rewrite. <br />
                We{" "}
                <span className="relative inline-block px-1">
                  {/* The Organic Highlighter (Yellow) */}
                  <span className="absolute inset-0 bg-yellow-200/80 -rotate-1 rounded-sm -z-10 mix-blend-multiply transform skew-x-[-10deg]"></span>
                  re-humanize.
                </span>
              </p>
              <p className="font-serif text-xl text-stone-600 leading-relaxed max-w-md border-l-2 border-accent-purple/30 pl-6">
                An editorial tool designed to scrub the{" "}
                <span className="italic text-stone-400">"AI shimmer"</span> from
                your text using rhythm, cadence, and vocabulary heat.
              </p>
            </div>

            {/* The Gradient Jewel Button */}
            <div className="flex items-center gap-6">
              <Link to="/humanizer">
                <button className="group relative rounded-full p-0.5 overflow-hidden transition-transform duration-300 hover:scale-105 shadow-2xl shadow-stone-900/20">
                  <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />
                  <div className="relative px-8 py-4 bg-cream rounded-full flex items-center gap-3 group-hover:bg-white transition-colors">
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-stone-900 to-stone-700 uppercase tracking-widest">
                      Start Writing
                    </span>
                    <MoveRight
                      size={20}
                      className="text-accent-coral group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right: The "Before/After" Paper Stack */}
          <div className="lg:col-span-7 relative flex justify-end z-10">
            <div className="relative w-full max-w-xl">
              {/* Back Paper */}
              <div className="absolute top-4 left-4 w-full h-full bg-stone-200 border border-stone-900 z-0"></div>

              {/* Front Paper (The Interaction) */}
              <div className="relative bg-white border border-stone-900 p-8 md:p-12 z-10 shadow-paper-hover">
                <div className="font-mono text-xs text-stone-400 mb-6 flex justify-between uppercase tracking-widest border-b border-stone-100 pb-4">
                  <span>Analysis: Detected 100% AI</span>
                  <span>Mode: Aggressive Humanization</span>
                </div>

                <div className="space-y-6">
                  {/* The "Bad" Text */}
                  <div className="opacity-50 blur-[0.5px]">
                    <p className="font-sans text-xl text-stone-400 line-through decoration-red-400 decoration-2">
                      "The utilization of this methodology facilitates
                      outcomes..."
                    </p>
                  </div>

                  {/* The arrow */}
                  <div className="text-stone-300">
                    <ArrowDown size={24} />
                  </div>

                  {/* The "Good" Text */}
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-stone-900 leading-tight">
                      "Using this method{" "}
                      <span className="text-accent-coral italic font-serif">
                        simply works
                      </span>{" "}
                      better."
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 uppercase tracking-wide border border-green-200">
                        Human Pass
                      </span>
                      <span className="bg-stone-100 text-stone-600 text-xs font-bold px-2 py-1 uppercase tracking-wide border border-stone-200">
                        Readability: A+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE PHILOSOPHY --- */}
      <section className="relative z-10 py-32 border-t border-stone-900">
        <div className="max-w-350 mx-auto px-6 lg:px-12">
          {/* Centered, Editorial Header */}
          <div className="flex flex-col items-center text-center mb-24 max-w-5xl mx-auto">
            <h2 className="font-display text-6xl md:text-8xl font-bold text-stone-900 mb-8 tracking-tighter">
              Break the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                Pattern
              </span>
              <span>.</span>
            </h2>

            <p className="font-serif text-2xl md:text-3xl text-stone-600 leading-relaxed italic opacity-90">
              "AI detects AI by looking for average. It looks for perfect
              grammar and predictable word choices. To beat it, you have to be
              weird. You have to be human."
            </p>
          </div>

          {/* THE FEATURE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-stone-900">
            {/* Feature 1: RHYTHM */}
            <div className="relative group border-r border-b border-stone-900 p-12 lg:p-16 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Asterisk className="text-accent-purple" size={40} />
              </div>

              <span className="font-display font-bold text-sm text-accent-purple uppercase tracking-widest mb-6 block">
                01 — The Cadence
              </span>

              <h3 className="font-display text-4xl font-bold mb-6">
                Burstiness
              </h3>
              <p className="font-serif text-xl text-stone-600 mb-12 max-w-sm">
                Robots write in a flatline. Humans write in spikes. We inject
                varying sentence lengths to create a heartbeat.
              </p>

              {/* Rhythm Graph */}
              <div className="h-24 w-full flex items-end gap-1">
                {[
                  40, 60, 30, 80, 45, 90, 20, 50, 70, 40, 60, 80, 30, 50, 90,
                ].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`w-full ${
                      i % 2 === 0 ? "bg-accent-purple" : "bg-stone-200"
                    } rounded-sm transition-all duration-500 group-hover:scale-y-110 origin-bottom`}
                  />
                ))}
              </div>
            </div>

            {/* Feature 2: VOCABULARY */}
            <div className="relative group border-r border-b border-stone-900 p-12 lg:p-16 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Asterisk className="text-accent-coral" size={40} />
              </div>

              <span className="font-display font-bold text-sm text-accent-coral uppercase tracking-widest mb-6 block">
                02 — The Vocabulary
              </span>

              <h3 className="font-display text-4xl font-bold mb-6">
                Perplexity
              </h3>
              <p className="font-serif text-xl text-stone-600 mb-12 max-w-sm">
                Statistical improbability is the hallmark of humanity. We choose
                the word an AI wouldn't predict.
              </p>

              {/* Editing Marks */}
              <div className="font-mono text-sm leading-loose bg-cream p-6 border border-stone-200 rounded-sm group-hover:border-accent-coral transition-colors">
                The{" "}
                <span className="line-through text-stone-400 decoration-2">
                  utilization
                </span>{" "}
                <span className="text-accent-coral font-bold">use</span> of this
                tool <br />
                <span className="line-through text-stone-400 decoration-2">
                  demonstrates
                </span>{" "}
                <span className="text-accent-coral font-bold">shows</span> how
                we <br />
                <span className="border-b-2 border-accent-coral">
                  break the rules.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FOOTER CTA --- */}
      <section className="relative py-40 border-t border-stone-900 bg-cream text-stone-900 overflow-hidden">
        {/* Abstract BG Shapes */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-accent-purple opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-accent-coral opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Simplified Heading - Static Colors */}
          <h2 className="font-display text-7xl md:text-9xl font-bold mb-12 tracking-tighter">
            <span className="text-stone-900">Write</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
              {" "}
              Natural
            </span>
            <span className="text-stone-900">.</span>
          </h2>

          <p className="text-xl md:text-2xl font-serif italic opacity-80 mb-12 max-w-2xl mx-auto text-stone-600">
            "The only way to sound like a person is to write like one."
          </p>

          <Link to="/humanizer">
            {/* Fixed Button Design */}
            <button className="group relative rounded-full p-0.5 overflow-hidden transition-transform duration-300 hover:scale-105 shadow-2xl shadow-stone-900/20">
              {/* The Gradient Border Background */}
              <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />

              {/* The Button Face */}
              <div className="relative px-12 py-6 bg-cream rounded-full flex items-center gap-4 group-hover:bg-white transition-colors">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-stone-900 to-stone-700 uppercase tracking-widest">
                  Start Editing
                </span>
                <ArrowRight
                  size={24}
                  className="text-accent-coral group-hover:translate-x-1 transition-transform"
                />
              </div>
            </button>
          </Link>

          <div className="mt-12 flex justify-center gap-8 font-mono text-xs opacity-50 uppercase tracking-widest text-stone-500">
            <span>No Credit Card</span>
            <span>•</span>
            <span>Instant Results</span>
          </div>
        </div>
      </section>
    </div>
  );
};
