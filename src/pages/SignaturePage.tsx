import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, MoveRight, Quote } from "lucide-react";

// --- VISUAL ASSETS ---

const NoiseTexture = () => (
  <div
    className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
    }}
  />
);

// Helper: Gradient Border Capsule
const GradientCapsule = ({ label }: { label: string }) => (
  <div className="relative inline-block p-px rounded-full overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple opacity-70" />
    <div className="relative px-3 py-1 bg-[#FDFCF8] rounded-full">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-stone-500">
        {label}
      </span>
    </div>
  </div>
);

// --- COMPONENT: Clean Stream Entry ---
const StreamEntry = ({ quote, author, role, accentColor }: any) => {
  const authorColor =
    accentColor === "purple" ? "text-accent-purple" : "text-accent-coral";

  return (
    <div className="py-4 pl-4 border-l-2 border-stone-200/50 hover:border-stone-300 transition-colors duration-300 opacity-60 hover:opacity-100">
      <p className="font-serif italic text-lg text-stone-700 leading-relaxed mb-3">
        "{quote}"
      </p>
      <div className="flex flex-col">
        <span className={`font-display font-bold text-base ${authorColor}`}>
          {author}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 font-bold">
          {role}
        </span>
      </div>
    </div>
  );
};

const testimonialData = [
  {
    quote:
      "The first time I used it, I felt relief. It captured the messy, unstructured way I actually think. It’s translating intent, not just generating text.",
    author: "Dr. Ananya Gupta",
    role: "Linguistics Lead, LaundaryWala",
    accent: "purple",
  },
  {
    quote:
      "Our pitch deck needed to sound visionary, not algorithmic. This injected the necessary chaotic energy that standard models completely filter out.",
    author: "Aryan Sharma",
    role: "Founder, Zylos (YC S24)",
    accent: "coral",
  },
  {
    quote:
      "I run a network of niche sites. We were getting crushed by updates. Switched to this workflow for calibration, and traffic stabilized completely.",
    author: "Meera Reddy",
    role: "Digital Portfolio Manager",
    accent: "purple",
  },
  {
    quote:
      "Finally, a tool that understands that 'neutral' is just another word for boring. The output feels like it has a pulse.",
    author: "Vikram Malhotra",
    role: "TechDaily India",
    accent: "coral",
  },
];

// --- COMPONENTS ---

const IndexEntry = ({ id, title, category, metric, description }: any) => (
  <div className="group relative grid grid-cols-1 md:grid-cols-12 border-b border-stone-200 py-10 transition-colors cursor-pointer items-start">
    <div className="md:col-span-1 pt-3">
      <span className="font-serif italic text-stone-400 text-lg group-hover:text-accent-purple transition-colors">
        #{id}
      </span>
    </div>
    <div className="md:col-span-3 flex flex-col gap-2 pr-8">
      <div className="font-display font-black text-5xl text-stone-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-accent-purple group-hover:to-accent-coral transition-all">
        {metric}
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-green" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
          {category}
        </span>
      </div>
    </div>
    <div className="md:col-span-6 pr-12 pt-1">
      <h3 className="font-display font-bold text-3xl text-stone-900 mb-3 leading-tight group-hover:text-accent-purple transition-colors">
        {title}
      </h3>
      <p className="font-serif text-lg text-stone-600 leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
    <div className="md:col-span-2 flex justify-end pt-3">
      <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 group-hover:border-accent-coral group-hover:text-accent-coral group-hover:rotate-45 transition-all duration-300 bg-white">
        <ArrowUpRight size={20} />
      </div>
    </div>
  </div>
);

const TheoryItem = ({ date, title }: any) => (
  <div className="group flex items-baseline gap-6 py-5 border-b border-stone-200 hover:pl-4 transition-all duration-300 cursor-pointer">
    <span className="font-mono text-xs text-stone-400 min-w-25 group-hover:text-accent-coral transition-colors uppercase tracking-widest">
      {date}
    </span>
    <h4 className="font-serif text-xl text-stone-600 group-hover:text-stone-900 group-hover:italic transition-colors">
      {title}
    </h4>
  </div>
);

export const SignaturePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-cream text-stone-900 font-sans selection:bg-accent-coral selection:text-white flex flex-col overflow-x-hidden">
      <NoiseTexture />

      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed top-0 right-0 w-125 h-125 bg-accent-purple opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-125 h-125 bg-accent-coral opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-400 mx-auto w-full">
        {/* --- HERO: MANIFESTO + STREAM --- */}
        <section className="mb-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* LEFT SIDE: The Title */}
            <div className="lg:col-span-5 flex flex-col relative mb-12 lg:mb-0">
              <h1 className="font-display font-bold text-[5rem] md:text-[7rem] leading-[0.85] tracking-tighter text-stone-900 mb-8 relative z-10">
                The <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                  Human
                </span>{" "}
                <br />
                <span className="relative inline-block">
                  <span className="absolute bottom-4 left-0 w-full h-4 bg-stone-200 -z-10 -rotate-1 rounded-sm mix-blend-multiply"></span>
                  Archive.
                </span>
              </h1>
            </div>

            {/* RIGHT SIDE: The Stream "Vanishing" Above the Quote */}
            <div className="lg:col-span-7 relative z-10 pl-0 lg:pl-16">
              {/* 1. The Streaming Testimonials */}
              <div className="relative h-75 overflow-hidden mask-gradient-top mb-6">
                <div className="animate-vertical-scroll flex flex-col gap-8">
                  {[...testimonialData, ...testimonialData].map((t, i) => (
                    <StreamEntry
                      key={i}
                      quote={t.quote}
                      author={t.author}
                      role={t.role}
                      accentColor={t.accent}
                    />
                  ))}
                </div>
              </div>

              {/* 2. The Anchor Quote */}
              <div className="relative">
                <div className="absolute -top-6 -left-8 text-stone-300 opacity-40">
                  <Quote size={50} className="fill-stone-300/30" />
                </div>

                <div className="absolute -bottom-2 right-0 md:right-20 text-stone-300 opacity-40">
                  <Quote size={50} className="fill-stone-300/30 rotate-180" />
                </div>
                {/* Main Text */}
                <p className="font-display font-bold text-4xl md:text-5xl leading-[1.1] text-stone-900 relative z-10">
                  Imperfection is the only <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                    proof of life
                  </span>
                  <span>.</span>
                </p>
                <div className="absolute -top-6 -left-8 text-stone-300 opacity-40">
                  <Quote size={50} className="fill-stone-300/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 1: THE INDEX --- */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <GradientCapsule label="Proven Methodology" />
            <div className="h-px bg-stone-200 grow" />
          </div>

          <div className="hidden md:grid grid-cols-12 pb-6 mb-2 border-b-2 border-stone-900">
            <div className="col-span-1 font-display font-bold text-xl text-stone-300">
              Ref
            </div>
            <div className="col-span-3 font-display font-bold text-xl text-accent-purple">
              Performance
            </div>
            <div className="col-span-6 font-display font-bold text-xl text-stone-900">
              Context
            </div>
            <div className="col-span-2 text-right font-display font-bold text-xl text-accent-coral">
              Access
            </div>
          </div>

          <div>
            <IndexEntry
              id="001"
              category="Academic"
              metric="100%"
              title="The Quantum Thesis"
              description="A 4,000 word Ph.D. thesis on Quantum Mechanics. Processed via 'Academic Mode'. Passed Turnitin & GPTZero."
            />
            <IndexEntry
              id="002"
              category="Startup"
              metric="98.2%"
              title="YC Application Essay"
              description="Founder story rewritten to remove typical 'Sales-speak'. Resulted in an interview invitation. Focus on 'Burstiness'."
            />
            <IndexEntry
              id="003"
              category="SEO / Web"
              metric="99.5%"
              title="Fintech Content Suite"
              description="Series of 50 articles. Ranked #1 on Google within 2 weeks. Zero algorithmic penalty detected."
            />
            <IndexEntry
              id="004"
              category="Creative"
              metric="96.0%"
              title="Substack Newsletter"
              description="Weekly digest for a tech audience. Rewritten to include colloquialisms and intentional structural imperfections."
            />
          </div>
        </section>

        {/* --- SECTION 2: THEORY --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-12">
          <div>
            <div className="mb-8">
              <GradientCapsule label="Editorial" />
            </div>

            <h2 className="font-display font-bold text-6xl mb-6 text-stone-900 leading-[0.9]">
              The Theory of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                Imperfection
              </span>
              .
            </h2>
            <p className="font-serif text-xl text-stone-600 leading-relaxed mb-8 max-w-md">
              To write like a human is to write with flaws. Our research focuses
              on injecting controlled entropy into LLM outputs to mimic
              biological cognition.
            </p>
            <Link
              to="/manifesto"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-stone-900 hover:text-accent-coral transition-colors"
            >
              <span className="border-b-2 border-stone-200 hover:border-accent-coral transition-colors pb-1">
                Read Full Manifesto
              </span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <TheoryItem
              date="Oct 12"
              title="Why AI writes like a bureaucrat."
            />
            <TheoryItem
              date="Sep 28"
              title="The statistical entropy of a lie."
            />
            <TheoryItem
              date="Aug 15"
              title="The death of the 'Neutral' tone."
            />
            <TheoryItem
              date="Jul 04"
              title="Defense against false positives."
            />
            <TheoryItem
              date="Jun 11"
              title="Burstiness: The heartbeat of text."
            />
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="mt-32 pt-20 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-4xl">
              <h2 className="font-display font-bold text-5xl md:text-7xl text-stone-900 mb-6 leading-tight">
                Ready to find your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                  voice?
                </span>
              </h2>
              <p className="font-serif text-xl text-stone-500">
                Calibrate the engine to your specific writing style.
              </p>
            </div>

            <button className="group relative rounded-full p-0.5 overflow-hidden transition-transform duration-300 hover:scale-105 shadow-2xl shadow-stone-900/10 shrink-0">
              <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />
              <div className="relative px-12 py-6 bg-[#FDFCF8] rounded-full flex items-center gap-4 group-hover:bg-white transition-colors">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-stone-900 to-stone-700 uppercase tracking-widest">
                  Start Your Calibration
                </span>
                <MoveRight
                  size={24}
                  className="text-accent-coral group-hover:translate-x-1 transition-transform"
                />
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
