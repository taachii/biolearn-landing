"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface DnaHelixProps {
  /** Height of the SVG in px */
  height?: number;
  /** Width of the SVG in px */
  width?: number;
  /** How many full turns of the helix to draw */
  turns?: number;
  className?: string;
}

/**
 * DnaHelix — generates a smooth double-helix SVG purely from math.
 *
 * Two sinusoidal strands offset by π, connected by base-pair rungs.
 * Strands use green→cyan gradients; rungs fade with the sine depth.
 */
export function DnaHelix({
  height = 560,
  width  = 90,
  turns  = 4,
  className,
}: DnaHelixProps) {
  const uid = useId().replace(/:/g, "");
  const cx  = width / 2;           // center X
  const amp = width * 0.40;        // amplitude (how wide the helix is)
  const N   = turns * 32;          // total sample points (higher = smoother)

  // ─── Generate points ──────────────────────────────────────────
  type Pt = [number, number];

  const strand1: Pt[] = [];
  const strand2: Pt[] = [];
  const rungs:   { x1: number; y: number; x2: number; depth: number }[] = [];

  for (let i = 0; i <= N; i++) {
    const t = (i / N) * turns * Math.PI * 2;
    const y = (i / N) * height;

    strand1.push([cx + amp * Math.cos(t), y]);
    strand2.push([cx - amp * Math.cos(t), y]); // offset by π → opposite phase

    // Rung every half-turn (8 points per turn → every 4th point = half-turn)
    if (i % (N / (turns * 2)) < 1) {
      const depth = Math.cos(t); // –1 to 1; used for opacity/sorting
      rungs.push({ x1: cx + amp * Math.cos(t), y, x2: cx - amp * Math.cos(t), depth });
    }
  }

  // ─── Path builder (smooth polyline) ───────────────────────────
  const toPath = (pts: Pt[]) =>
    pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");

  // Sort rungs so "closer" ones render on top (depth > 0 = front)
  const backRungs  = rungs.filter((r) => r.depth < 0);
  const frontRungs = rungs.filter((r) => r.depth >= 0);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <defs>
        {/* Vertical fade mask so helix fades in/out at edges */}
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0"   />
          <stop offset="15%"  stopColor="white" stopOpacity="1"   />
          <stop offset="85%"  stopColor="white" stopOpacity="1"   />
          <stop offset="100%" stopColor="white" stopOpacity="0"   />
        </linearGradient>
        <mask id={`${uid}-mask`}>
          <rect width={width} height={height} fill={`url(#${uid}-fade)`} />
        </mask>

        {/* Strand gradient: green top → cyan bottom */}
        <linearGradient id={`${uid}-s1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,230,118,0.9)" />
          <stop offset="50%"  stopColor="rgba(0,207,255,0.9)" />
          <stop offset="100%" stopColor="rgba(0,230,118,0.9)" />
        </linearGradient>
        {/* Strand gradient: cyan top → green bottom (opposite) */}
        <linearGradient id={`${uid}-s2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,207,255,0.9)" />
          <stop offset="50%"  stopColor="rgba(0,230,118,0.9)" />
          <stop offset="100%" stopColor="rgba(0,207,255,0.9)" />
        </linearGradient>
      </defs>

      {/* Everything masked for edge fade */}
      <g mask={`url(#${uid}-mask)`}>

        {/* ── Back rungs (depth < 0) — render first / under strands ── */}
        {backRungs.map((r, i) => (
          <line
            key={`br-${i}`}
            x1={r.x1.toFixed(2)} y1={r.y.toFixed(2)}
            x2={r.x2.toFixed(2)} y2={r.y.toFixed(2)}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* ── Strand 1 ──────────────────────────────────────────── */}
        <path
          d={toPath(strand1)}
          fill="none"
          stroke={`url(#${uid}-s1)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ── Strand 2 ──────────────────────────────────────────── */}
        <path
          d={toPath(strand2)}
          fill="none"
          stroke={`url(#${uid}-s2)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ── Front rungs (depth ≥ 0) — render on top of strands ── */}
        {frontRungs.map((r, i) => (
          <line
            key={`fr-${i}`}
            x1={r.x1.toFixed(2)} y1={r.y.toFixed(2)}
            x2={r.x2.toFixed(2)} y2={r.y.toFixed(2)}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* ── Node dots at rung/strand intersections ──────────── */}
        {rungs.map((r, i) => (
          <>
            <circle
              key={`n1-${i}`}
              cx={r.x1.toFixed(2)} cy={r.y.toFixed(2)} r="3.5"
              fill="rgba(0,230,118,0.85)"
              style={{ filter: "blur(0.3px)" }}
            />
            <circle
              key={`n2-${i}`}
              cx={r.x2.toFixed(2)} cy={r.y.toFixed(2)} r="3.5"
              fill="rgba(0,207,255,0.85)"
              style={{ filter: "blur(0.3px)" }}
            />
          </>
        ))}

      </g>
    </svg>
  );
}
