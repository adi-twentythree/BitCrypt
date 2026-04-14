import {type ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx"; // Install via: npm install clsx

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = "primary", href, onClick, className }: ButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-[#37C3FF] text-[#0A2A66] shadow-[0_0_20px_rgba(55,195,255,0.3)] hover:shadow-[0_0_30px_rgba(55,195,255,0.6)] hover:-translate-y-0.5 overflow-hidden group",
    outline: "border border-[#37C3FF]/50 text-[#37C3FF] hover:bg-[#37C3FF]/10 hover:border-[#37C3FF]",
    ghost: "text-slate-400 hover:text-[#37C3FF]",
  };

  const content = (
    <>
      {/* Shimmer Effect for Primary Variant */}
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      )}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={clsx(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={clsx(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
}