import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

// Global Paper Texture (Local Definition)
const PaperBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply opacity-40 bg-noise" />
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans selection:bg-accent-coral selection:text-white relative">
      {/* 1. Global Texture */}
      <PaperBackground />

      {/* 2. Navigation */}
      <Navbar />

      {/* 3. Main Content */}
      {/* pt-24 prevents the fixed navbar from overlapping content */}
      <main className="grow relative z-10 pt-24">{children}</main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
};
