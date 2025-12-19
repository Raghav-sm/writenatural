import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  FileText,
  Settings,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const StatBox = ({ label, value, sub, accent = "text-stone-900" }: any) => (
  <div className="flex flex-col justify-between h-32 p-6 border-r border-stone-200 last:border-r-0">
    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
      {label}
    </span>
    <div className={`text-4xl font-display font-bold ${accent}`}>{value}</div>
    <div className="text-xs text-stone-500 font-medium">{sub}</div>
  </div>
);

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Editorial chart styling
  const data = [
    { name: "M", words: 400 },
    { name: "T", words: 3000 },
    { name: "W", words: 2000 },
    { name: "T", words: 2780 },
    { name: "F", words: 1890 },
    { name: "S", words: 2390 },
    { name: "S", words: 3490 },
  ];

  return (
    <div className="min-h-screen bg-cream pt-28 px-6 lg:px-12">
      <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 border border-stone-200 bg-white shadow-sheet">
        {/* 1. Sidebar: The "Index" */}
        <div className="md:col-span-3 border-r border-stone-200 bg-stone-50/50 p-8 min-h-150">
          <div className="mb-12">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white font-display font-bold text-xl mb-4">
              {user?.name?.[0] || "E"}
            </div>
            <h3 className="font-display font-bold text-lg text-stone-900">
              {user?.name || "Editor Account"}
            </h3>
            <span className="inline-block mt-2 px-2 py-0.5 border border-stone-200 text-[10px] font-bold uppercase tracking-widest text-stone-500 bg-white">
              Free Plan
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {[
              { id: "overview", icon: LayoutDashboard, label: "Overview" },
              { id: "history", icon: FileText, label: "Manuscripts" },
              { id: "settings", icon: Settings, label: "Configuration" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all ${
                  activeTab === item.id
                    ? "text-accent-purple bg-accent-purple/5 border-l-2 border-accent-purple translate-x-2"
                    : "text-stone-500 hover:text-stone-900 hover:translate-x-1"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-20 pt-8 border-t border-stone-200">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-coral hover:underline">
              Upgrade Account <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* 2. Main Content: The "Ledger" */}
        <div className="md:col-span-9">
          {/* Header */}
          <div className="p-8 border-b border-stone-200 flex justify-between items-baseline">
            <h2 className="font-display text-2xl font-bold text-stone-900">
              Weekly Activity
            </h2>
            <span className="text-sm text-stone-400 font-mono">
              Oct 12 - Oct 19
            </span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-stone-200">
            <StatBox
              label="Words Generated"
              value="14.2k"
              sub="+12% from last week"
            />
            <StatBox
              label="Human Score"
              value="98.5%"
              sub="Average across 12 docs"
              accent="text-accent-green"
            />
            <StatBox
              label="Credits Remaining"
              value="∞"
              sub="Unlimited Plan Active"
              accent="text-accent-purple"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Chart Area */}
            <div className="p-8 border-r border-stone-200 h-96">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">
                Production Volume
              </h4>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#a8a29e",
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                    }}
                    dy={10}
                  />
                  <Tooltip
                    cursor={{ fill: "#f5f5f4" }}
                    contentStyle={{
                      backgroundColor: "#1c1917",
                      border: "none",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="words" fill="#1c1917" barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent List */}
            <div className="flex flex-col">
              <div className="p-4 border-b border-stone-200 bg-stone-50">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                  Recent Manuscripts
                </h4>
              </div>
              <div className="grow">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="group p-6 border-b border-stone-100 hover:bg-stone-50 cursor-pointer flex justify-between items-center transition-colors"
                  >
                    <div>
                      <p className="font-serif text-stone-900 text-lg group-hover:text-accent-purple transition-colors">
                        The Evolution of Generative AI...
                      </p>
                      <p className="text-xs text-stone-400 mt-1 font-mono">
                        2 mins ago • Academic Mode
                      </p>
                    </div>
                    <ChevronRight
                      className="text-stone-300 group-hover:text-accent-purple"
                      size={16}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
