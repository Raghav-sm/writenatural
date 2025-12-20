import React, { useState } from "react";
import {
  Settings2,
  ChevronDown,
  History,
  Maximize2,
  FileText,
  Eraser,
  AlertCircle,
  CheckCircle2,
  ThumbsUp,
  Copy,
} from "lucide-react";

import { HumanizeStyle } from "../types";

const WORD_LIMIT = 100;

// --- Visual Components ---

const NoiseTexture = () => (
  <div
    className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
    }}
  />
);
const ProcessingLoader = () => {
  return (
    /* -mt-12 pulls the loader slightly above the true center */
    <div className="flex flex-col items-center justify-center gap-1.5 -mt-12">
      <div className="flex items-baseline font-display font-bold text-2xl tracking-tight opacity-60">
        <span className="text-black">Write</span>
        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-purple to-accent-coral">
          Natural
        </span>

        {/* items-baseline ensures dots sit on the floor of the text */}
        <div className="flex items-baseline ml-0.5 text-stone-900">
          <span
            className="animate-pulse"
            style={{ animationDuration: "1s", animationDelay: "0s" }}
          >
            .
          </span>
          <span
            className="animate-pulse"
            style={{ animationDuration: "1s", animationDelay: "0.2s" }}
          >
            .
          </span>
          <span
            className="animate-pulse"
            style={{ animationDuration: "1s", animationDelay: "0.4s" }}
          >
            .
          </span>
        </div>
      </div>

      {/* Re-humanizing text */}
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
        Re-humanizing text
      </p>
    </div>
  );
};

export const HumanizerTool: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [style, setStyle] = useState<HumanizeStyle>(HumanizeStyle.Professional);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Word Count Logic
  const wordCount =
    input.trim().length === 0 ? 0 : input.trim().split(/\s+/).length;
  const isOverLimit = wordCount > WORD_LIMIT;

  const handleHumanize = () => {
    if (!input || isOverLimit) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOutput(input);
    }, 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="relative w-full min-h-screen bg-cream text-stone-900 font-sans selection:bg-accent-coral selection:text-white flex flex-col overflow-x-hidden">
      {/* Global Noise Texture */}
      <NoiseTexture />

      {/* --- HEADER --- */}
      <header className="relative z-20 pt-12 px-6 pb-2 top-0">
        <div className="max-w-350uto flex flex-col md:flex-row items-end justify-between gap-6">
          {/* Left: Controls */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative">
              <label className="absolute -top-3 left-0 text-[10px] font-bold uppercase tracking-widest text-stone-500">
                Editorial Mode
              </label>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-3xl font-display font-bold text-stone-900 hover:text-accent-purple transition-colors cursor-pointer outline-none"
              >
                {style}
                <ChevronDown
                  size={24}
                  className={`text-stone-400 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu (Rounded Paper Style) */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-white border border-stone-200 shadow-xl rounded-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  {Object.values(HumanizeStyle).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setStyle(mode);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-6 py-4 text-sm font-bold font-display hover:bg-stone-50 transition-colors border-b last:border-b-0 border-stone-100 ${
                        style === mode
                          ? "text-accent-purple bg-stone-50"
                          : "text-stone-600"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="p-3 bg-white/50 border border-transparent hover:border-stone-200 hover:bg-white text-stone-500 hover:text-stone-900 transition-all rounded-full shadow-sm">
              <History size={20} />
            </button>
            <button className="p-3 bg-white/50 border border-transparent hover:border-stone-200 hover:bg-white text-stone-500 hover:text-stone-900 transition-all rounded-full shadow-sm">
              <Settings2 size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* --- WORKSPACE --- */}
      <main className="grow relative z-10 px-4 md:px-6 py-8 max-w-350 mx-auto w-full h-full flex flex-col">
        <div className="grow grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-150ms-stretch">
          {/* --- LEFT: INPUT (Rounded Paper Design) --- */}
          <div className="relative flex flex-col group pt-4">
            {/* Input Floating Tab */}
            <div className="absolute top-0 left-6 z-20">
              <div className="bg-stone-100 text-stone-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm border border-stone-200">
                Input
              </div>
            </div>

            <div
              className={`relative h-full bg-white rounded-3xl border shadow-xl shadow-stone-200/60 flex flex-col transition-all z-10 overflow-hidden ${
                isOverLimit
                  ? "border-red-300 ring-4 ring-red-50"
                  : "border-stone-200 hover:border-stone-300"
              }`}
            >
              {/* Toolbar */}
              <div className="relative z-10 p-5 pt-6 border-b border-stone-100 flex justify-between items-center bg-white min-h-20">
                <button
                  onClick={handleClear}
                  className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-red-500 flex items-center gap-1 transition-colors pl-2"
                >
                  <Eraser size={14} /> Clear
                </button>

                {/* --- GRADIENT BORDER, WHITE BUTTON --- */}
                <button
                  onClick={handleHumanize}
                  disabled={!input || isProcessing || isOverLimit}
                  className="group relative rounded-full p-0.5 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95 shadow-md"
                >
                  {/* The Gradient Border */}
                  <div className="absolute inset-0 bg-linear-to-r from-accent-purple via-accent-coral to-accent-purple animate-gradient-xy opacity-100" />

                  {/* The White Button Face */}
                  <div className="relative px-6 py-2 bg-white rounded-full flex items-center justify-center gap-2 transition-colors group-hover:bg-stone-50">
                    {isProcessing ? (
                      <div className="w-3 h-3 border-2 border-stone-200 border-t-accent-purple rounded-full animate-spin" />
                    ) : (
                      <span className="font-display font-bold text-xs text-stone-900 uppercase tracking-widest">
                        Humanize
                      </span>
                    )}
                    {!isProcessing}
                  </div>
                </button>
              </div>

              {/* Text Area */}
              <textarea
                className="grow w-full resize-none bg-transparent border-none focus:ring-0 p-8 text-lg leading-relaxed font-serif text-stone-600 placeholder-stone-300 relative z-0 outline-none"
                placeholder="Paste your AI-generated draft here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
              />

              {/* Word Counter */}
              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
                {isOverLimit && (
                  <AlertCircle size={14} className="text-red-500" />
                )}
                <span
                  className={`text-[10px] font-mono font-bold tracking-widest ${
                    isOverLimit ? "text-red-500" : "text-stone-400"
                  }`}
                >
                  {wordCount} / {WORD_LIMIT} WORDS
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: OUTPUT (Rounded Paper Design) --- */}
          <div className="relative flex flex-col group mt-12 lg:mt-0 pt-4">
            {/* Output Floating Tab */}
            <div className="absolute top-0 left-6 z-20">
              <div className="bg-white text-stone-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm border border-stone-200">
                Result
              </div>
            </div>

            <div className="relative h-full bg-white rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/60 flex flex-col z-10 overflow-hidden">
              {/* Toolbar */}
              <div className="p-5 pt-6 border-b border-stone-100 flex justify-between items-center bg-white min-h-20 relative z-10">
                <div className="flex items-center gap-2 px-2">
                  {output ? (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-green flex items-center gap-2">
                      <CheckCircle2 size={14} />
                      Flow Optimized
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">
                      Waiting for input...
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    className="p-2 rounded-lg hover:bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors"
                    title="Copy Text"
                  >
                    <Copy size={18} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors"
                    title="Thumbs Up"
                  >
                    <ThumbsUp size={18} />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>

              {/* Output Content */}
              <div className="relative grow p-8 overflow-y-auto z-0">
                {isProcessing && (
                  <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-md flex items-center justify-center rounded-b-3xl">
                    <ProcessingLoader />
                  </div>
                )}

                {output ? (
                  <div className="prose prose-stone prose-lg max-w-none">
                    <p className="font-serif text-xl leading-loose text-stone-900 whitespace-pre-wrap">
                      {output}
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-stone-300 select-none opacity-50">
                    <FileText size={48} strokeWidth={1} className="mb-4" />
                    <p className="font-serif italic text-lg text-stone-400">
                      "The canvas awaits."
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="relative z-20 px-6 py-12">
        <div className="max-w-350 mx-auto flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-stone-400">
          <span>v2.4.0 (Stable)</span>
          <span className="font-display font-bold text-lg text-stone-400 hover:text-accent-purple cursor-pointer transition-colors">
            Report Issue
          </span>
        </div>
      </footer>
    </div>
  );
};
