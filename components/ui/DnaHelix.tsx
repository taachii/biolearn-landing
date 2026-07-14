"use client";

import { Fragment, useId } from "react";
import { cn } from "@/lib/utils";

interface DnaHelixProps {
  height?: number;
  width?: number;
  turns?: number;
  className?: string;
}

export function DnaHelix({
  height = 560,
  width  = 80,
  turns  = 4,
  className,
}: DnaHelixProps) {
  const uid = useId().replace(/:/g, "");
  const cx  = width / 2;
  const amp = width * 0.40;
  // 32 sample points per turn → very smooth curve
  const N   = turns * 32;

  type Pt = [number, number];
  const strand1: Pt[] = [];
  const strand2: Pt[] = [];
  const rungs: { x1: number; y: number; x2: number; depth: number }[] = [];

  for (let i = 0; i <= N; i++) {
    const t = (i / N) * turns * Math.PI * 2;
    const y = (i / N) * height;
    strand1.push([cx + amp * Math.cos(t), y]);
    strand2.push([cx - amp * Math.cos(t), y]);

    // rung every half-turn
    if (i % (N / (turns * 2)) < 1) {
      rungs.push({ x1: cx + amp * Math.cos(t), y, x2: cx - amp * Math.cos(t), depth: Math.cos(t) });
    }
  }

  const toPath = (pts: Pt[]) =>
    pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");

  const backRungs  = rungs.filter(r => r.depth < 0);
  const frontRungs = rungs.filter(r => r.depth >= 0);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0" />
          <stop offset="18%"  stopColor="white" stopOpacity="1" />
          <stop offset="82%"  stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={`${uid}-mask`}>
          <rect width={width} height={height} fill={`url(#${uid}-fade)`} />
        </mask>
        <linearGradient id={`${uid}-s1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00e676" />
          <stop offset="50%"  stopColor="#00cfff" />
          <stop offset="100%" stopColor="#00e676" />
        </linearGradient>
        <linearGradient id={`${uid}-s2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00cfff" />
          <stop offset="50%"  stopColor="#00e676" />
          <stop offset="100%" stopColor="#00cfff" />
        </linearGradient>
      </defs>

      <g mask={`url(#${uid}-mask)`}>
        {/* Back rungs */}
        {backRungs.map((r, i) => (
          <line key={`br-${i}`}
            x1={r.x1.toFixed(2)} y1={r.y.toFixed(2)}
            x2={r.x2.toFixed(2)} y2={r.y.toFixed(2)}
            stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round"
          />
        ))}

        {/* Strand 1 */}
        <path d={toPath(strand1)} fill="none" stroke={`url(#${uid}-s1)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Strand 2 */}
        <path d={toPath(strand2)} fill="none" stroke={`url(#${uid}-s2)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Front rungs */}
        {frontRungs.map((r, i) => (
          <line key={`fr-${i}`}
            x1={r.x1.toFixed(2)} y1={r.y.toFixed(2)}
            x2={r.x2.toFixed(2)} y2={r.y.toFixed(2)}
            stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round"
          />
        ))}

        {/* Node dots — using Fragment with key to avoid React warning */}
        {rungs.map((r, i) => (
          <Fragment key={`nodes-${i}`}>
            <circle cx={r.x1.toFixed(2)} cy={r.y.toFixed(2)} r="3" fill="#00e676" opacity="0.85" />
            <circle cx={r.x2.toFixed(2)} cy={r.y.toFixed(2)} r="3" fill="#00cfff" opacity="0.85" />
          </Fragment>
        ))}
      </g>
    </svg>
  );
}
