export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "starter" | "pro" | "business";
  avatar?: string;
}

export interface HistoryItem {
  id: string;
  date: string;
  originalPreview: string;
  humanizedPreview: string;
  scoreBefore: number;
  scoreAfter: number;
  style: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceUSD: number;
  priceINR: number;
  wordLimit: number;
  features: string[];
  isPopular?: boolean;
}

export const HumanizeStyle = {
  Academic: "Academic",
  Professional: "Professional",
  Casual: "Casual",
  Creative: "Creative",
  Technical: "Technical",
} as const;

export type HumanizeStyle = (typeof HumanizeStyle)[keyof typeof HumanizeStyle];

export interface UsageStats {
  wordsUsed: number;
  totalLimit: number;
  documentsProcessed: number;
  humanizedScoreAvg: number;
}
