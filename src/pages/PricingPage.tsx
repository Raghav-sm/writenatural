import React, { useState } from "react";
import { Check, MoveRight, Sparkles, Asterisk } from "lucide-react";

export const PricingPage: React.FC = () => {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const plans = [
    {
      name: "Guest",
      price: 0,
      desc: "For the curious.",
      feat: ["500 words/mo", "Standard Speed", "Basic Modes"],
      buttonText: "Try Free",
    },
    {
      name: "Creator",
      price: 49,
      desc: "For the prolific.",
      recommended: true,
      feat: [
        "50k words/mo",
        "Instant Speed",
        "All Humanizer Modes",
        "No Watermark",
      ],
      buttonText: "Subscribe",
    },
    {
      name: "Pro",
      price: 199,
      desc: "For the scale.",
      feat: [
        "Unlimited Words",
        "API Access",
        "Team Seats (5)",
        "White-labeling",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="relative min-h-screen bg-cream overflow-hidden selection:bg-accent-coral selection:text-white pt-6 pb-24">
      {/* --- 1. GLOBAL TEXTURE (Grain) --- */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- 2. AMBIENT ELEMENTS --- */}
      <div className="absolute top-24 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none z-0">
        <span className="font-display font-black text-[15rem] leading-none tracking-tighter text-stone-900">
          PLANS
        </span>
      </div>

      <div className="absolute top-40 right-[10%] text-accent-coral opacity-80">
        <Asterisk size={64} />
      </div>
      <div className="absolute bottom-40 left-[5%] text-accent-purple opacity-80">
        <Asterisk size={48} />
      </div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="relative max-w-4xl mx-auto px-6 text-center mb-16 z-10">
        <h1 className="font-display font-black text-5xl md:text-7xl mb-2 leading-tight tracking-tighter text-stone-900 px-4">
          Invest in your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy">
            voice
          </span>
          <span>.</span>
        </h1>

        <p className="font-sans text-stone-600 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Stop paying for "AI detection" tools that don't work. Start using
          <span className="relative inline-block px-1 mx-1">
            <span className="absolute inset-0 bg-accent-coral/15 -skew-x-3 rounded-sm"></span>
            <span className="relative text-stone-900 font-bold">
              WriteNatural
            </span>
          </span>
          to sound truly human.
        </p>

        {/* Currency Toggle */}
        <div className="inline-flex bg-[#FDFCF8] p-1 rounded-full border border-[#EBE9E0] shadow-sm relative">
          <div
            className={`absolute top-1 bottom-1 rounded-full bg-stone-900 transition-all duration-300 w-17.5 ${
              currency === "USD" ? "left-1" : "left-[calc(100%-74px)]"
            }`}
          />
          {["USD", "INR"].map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c as any)}
              className={`relative z-10 w-17.5 py-1.5 text-[10px] font-bold tracking-widest rounded-full transition-colors duration-300 uppercase ${
                currency === c
                  ? "text-cream"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* --- TICKET CARD LAYOUT --- */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative flex flex-col ${
              plan.recommended ? "md:-mt-4 md:mb-4 z-20" : "z-10"
            }`}
          >
            {/* 1. "OUR CHOICE" BADGE */}
            {plan.recommended && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-max">
                <div className="p-px rounded-full bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy shadow-xl shadow-accent-purple/20">
                  <div className="bg-white px-4 py-1.5 rounded-full flex items-center gap-2">
                    <Sparkles size={10} className="text-accent-purple" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                      Our Choice
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. THE CARD CONTAINER */}
            <div
              className={`
                relative h-full p-0.5 rounded-3xl transition-all duration-500
                ${
                  plan.recommended
                    ? "bg-linear-to-br from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy shadow-2xl shadow-accent-purple/10 scale-105"
                    : "bg-linear-to-b from-stone-200 to-stone-100 hover:bg-linear-to-br hover:from-accent-purple/50 hover:to-accent-coral/50 shadow-sm hover:shadow-xl hover:scale-[1.01]"
                }
              `}
            >
              <div className="relative h-full flex flex-col bg-[#FDFCF8] rounded-[22px] overflow-hidden">
                {/* Subtle Texture Inside Card */}
                <div className="absolute inset-0 opacity-[0.5] pointer-events-none bg-[#FDFCF8]" />

                {/* --- Vertical Right-Side Watermark --- */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] -rotate-90 z-0 pointer-events-none select-none opacity-[0.7]">
                  <span className="font-display font-black text-4xl tracking-widest whitespace-nowrap flex items-center gap-3">
                    <span className="text-stone-900">Write</span>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                      Natural
                    </span>
                    <span className="text-stone-900">{plan.name}</span>
                  </span>
                </div>

                {/* TOP SECTION */}
                <div className="p-8 grow relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      {/* Name with Gradient Dot (UPDATED SIZE) */}
                      <h3 className="font-display font-black text-5xl text-stone-900 tracking-tight">
                        {plan.name}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
                          .
                        </span>
                      </h3>
                      {/* Description (UPDATED FONT) */}
                      <p className="font-serif italic text-xl text-stone-500 mt-2">
                        {plan.desc}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    {plan.feat.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-stone-700 font-medium group-hover:text-stone-900 transition-colors"
                      >
                        <Check
                          size={16}
                          strokeWidth={3}
                          className={`mt-0.5 ${
                            plan.recommended
                              ? "text-accent-coral"
                              : "text-stone-300 group-hover:text-accent-purple/50 transition-colors"
                          }`}
                        />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MIDDLE: Dashed Divider */}
                <div className="relative w-full h-0.5 z-10 my-2">
                  <div className="absolute inset-0 border-t-2 border-dashed border-stone-200" />
                  <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full border-r-2 border-stone-200 bg-cream" />
                  <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full border-l-2 border-stone-200 bg-cream" />
                </div>

                {/* BOTTOM SECTION */}
                <div className="p-8 bg-stone-50/50 relative z-10">
                  <div className="flex justify-between items-end mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">
                        Total
                      </span>
                      <div className="flex items-baseline">
                        <span className="font-display font-bold text-4xl text-stone-900">
                          {currency === "USD" ? "$" : "₹"}
                          {currency === "USD" ? plan.price : plan.price * 83}
                        </span>
                        {plan.price > 0 && (
                          <span className="text-stone-400 font-sans font-medium text-sm ml-1">
                            /mo
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="group/btn relative w-full rounded-full p-0.5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/10 hover:-translate-y-1">
                    <div
                      className={`absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy ${
                        plan.recommended ? "opacity-100" : "opacity-40"
                      } transition-opacity duration-300`}
                    />
                    <div className="relative px-6 py-3 bg-[#FDFCF8] rounded-full flex items-center justify-center gap-3 transition-colors group-hover/btn:bg-white">
                      <span className="font-display font-bold text-xs text-stone-900 uppercase tracking-widest">
                        {plan.buttonText}
                      </span>
                      <MoveRight
                        size={14}
                        className={`transition-transform group-hover/btn:translate-x-1 ${
                          plan.recommended
                            ? "text-accent-coral"
                            : "text-stone-400"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER TRUST SIGNALS --- */}
      <div className="mt-20 text-center relative z-10 pb-8">
        <p className="text-stone-500 text-xs font-sans font-medium uppercase tracking-widest flex items-center justify-center gap-8 opacity-80">
          <span>Stripe Secure</span>
          <span className="text-stone-300">•</span>
          <span>Cancel Anytime</span>
          <span className="text-stone-300">•</span>
          <span>14-Day Refund</span>
        </p>
      </div>
    </div>
  );
};
