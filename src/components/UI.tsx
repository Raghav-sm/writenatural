import React from "react";
import { Loader2 } from "lucide-react";

// --- Button ---
// Design Note: Sharper corners. Solid Purple -> Vibrant Coral on hover.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) => {
  // Switched from rounded-full to rounded-md for a structured, professional feel
  const baseStyles =
    "inline-flex items-center justify-center font-display font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5 rounded-md border-2";

  const variants = {
    // Solid Purple with a darker purple border. Hovers to Coral.
    primary:
      "bg-accent-purple border-accent-purple text-white hover:bg-accent-coral hover:border-accent-coral shadow-sm",
    // White paper look with purple text
    secondary:
      "bg-white border-stone-200 text-accent-purple hover:border-accent-purple hover:bg-purple-50",
    // Transparent with coloured border
    outline:
      "bg-transparent border-stone-300 text-stone-600 hover:border-accent-coral hover:text-accent-coral",
    ghost:
      "bg-transparent border-transparent text-accent-purple hover:bg-purple-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && (
        <span className="mr-2 opacity-90">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2 opacity-90">{rightIcon}</span>
      )}
    </button>
  );
};

// --- Card ---
// Design Note: This simulates a sheet of paper.
// Sharp borders, distinct colors for accents.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "purple" | "coral" | "green" | "none";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  accent = "none",
  hoverEffect = false,
  ...props
}) => {
  const accents = {
    // Top border accents to look like file folders or stationery
    purple:
      "border-t-4 border-t-accent-purple border-x-stone-200 border-b-stone-200",
    coral:
      "border-t-4 border-t-accent-coral border-x-stone-200 border-b-stone-200",
    green:
      "border-t-4 border-t-accent-green border-x-stone-200 border-b-stone-200",
    none: "border border-stone-200",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-paper-hover transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white rounded-lg shadow-paper ${accents[accent]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// --- Badge ---
// Squared off, high contrast colors.
export const Badge: React.FC<{
  color?: "purple" | "coral" | "green" | "gray";
  children: React.ReactNode;
}> = ({ color = "purple", children }) => {
  const colors = {
    purple: "bg-indigo-50 text-accent-purple border-indigo-100",
    coral: "bg-orange-50 text-accent-coral border-orange-100",
    green: "bg-emerald-50 text-accent-green border-emerald-100",
    gray: "bg-stone-100 text-stone-600 border-stone-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-sm border text-[11px] font-bold uppercase tracking-wider ${colors[color]}`}
    >
      {children}
    </span>
  );
};

// --- Input ---
export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
  }
> = ({ label, error, className = "", id, ...props }) => (
  <div className="w-full">
    {label && (
      <label
        htmlFor={id}
        className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2"
      >
        {label}
      </label>
    )}
    <input
      id={id}
      // Sharp corners (rounded-md), white background on beige canvas
      className={`block w-full px-4 py-3 bg-white border-2 rounded-md text-stone-900 placeholder-stone-400 focus:outline-none transition-colors duration-200 ${
        error
          ? "border-red-300 focus:border-red-500"
          : "border-stone-200 focus:border-accent-purple"
      } ${className}`}
      {...props}
    />
    {error && (
      <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
    )}
  </div>
);
