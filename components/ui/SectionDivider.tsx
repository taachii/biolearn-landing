"use client";

/**
 * components/ui/SectionDivider.tsx
 *
 * Decorative SVG divider between sections.
 * Renders a wave or diagonal line with a green→cyan gradient stroke.
 *
 * Usage:
 *   <SectionDivider variant="wave" />
 *   <SectionDivider variant="diagonal" flip />
 */

import { useId } from "react";
import { cn } from "@/lib/utils";

export type DividerVariant = "wave" | "diagonal" | "curve";

interface SectionDividerProps {
  variant?: DividerVariant;
  /** Flip horizontally — useful for alternating sections. */
  flip?: boolean;
  className?: string;
}

const PATHS: Record<DividerVariant, string> = {
  wave:     "M0,50 C240,10 480,90 720,50 C960,10 1200,90 1440,50",
  diagonal: "M0,80 L1440,0",
  curve:    "M0,80 Q720,0 1440,80",
};

export function SectionDivider({
  variant = "wave",
  flip = false,
  className,
}: SectionDividerProps) {
  const uid = useId();
  const gradientId = `divider-gradient-${uid.replace(/:/g, "")}`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden select-none pointer-events-none",
        "h-16 sm:h-20",
        flip && "-scale-x-100",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow copy (blurred) */}
        <path
          d={PATHS[variant]}
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          opacity="0.3"
          filter="blur(4px)"
        />
        {/* Sharp line */}
        <path
          d={PATHS[variant]}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          opacity="0.7"
        />

        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="20%"  stopColor="#00e676" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="#00cfff" stopOpacity="0.8" />
            <stop offset="80%"  stopColor="#00e676" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
