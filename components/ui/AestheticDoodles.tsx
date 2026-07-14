"use client";

import { motion } from "framer-motion";
import { Dna, Hexagon, Leaf, Atom, Microscope, Beaker, Brain, Activity, TestTubes, Sparkles, Syringe, Bug } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ICONS = [Dna, Hexagon, Leaf, Atom, Microscope, Beaker, Brain, Activity, TestTubes, Sparkles, Syringe, Bug];

interface DoodleDef {
  id: number;
  Icon: React.ElementType;
  top: number;
  left: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
  colorClass: string;
  yDrift: number;
  xDrift: number;
  rotDrift: number;
}

export function AestheticDoodles() {
  const [doodles, setDoodles] = useState<DoodleDef[]>([]);

  useEffect(() => {
    // Generate positions strictly on client to avoid Next.js hydration mismatch
    const colors = ["text-neon-green", "text-neon-cyan", "text-[var(--color-text-muted)]", "text-[var(--color-text-secondary)]"];
    
    // Generate 25 doodles scattered across the hero
    const newDoodles = Array.from({ length: 25 }).map((_, i) => {
      const baseRotation = Math.floor(Math.random() * 360);
      return {
        id: i,
        Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        top: Math.random() * 100, // 0 to 100%
        left: Math.random() * 100, // 0 to 100%
        size: Math.floor(Math.random() * 32) + 24, // 24px to 56px
        rotation: baseRotation,
        duration: Math.random() * 25 + 20, // 20s to 45s slow drift
        delay: Math.random() * -30, // Start animation at random point in time
        opacity: Math.random() * 0.12 + 0.03, // 0.03 to 0.15 opacity (very subtle line-art)
        colorClass: colors[Math.floor(Math.random() * colors.length)],
        yDrift: Math.random() * 80 - 40, // Drift up to 40px up/down
        xDrift: Math.random() * 80 - 40, // Drift up to 40px left/right
        rotDrift: baseRotation + (Math.random() * 90 - 45), // Rotate slightly
      };
    });
    
    setDoodles(newDoodles);
  }, []);

  if (doodles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {doodles.map((d) => {
        const Icon = d.Icon;
        return (
          <motion.div
            key={d.id}
            className={cn("absolute", d.colorClass)}
            style={{
              top: `${d.top}%`,
              left: `${d.left}%`,
              opacity: d.opacity,
            }}
            initial={{ rotate: d.rotation, y: 0, x: 0 }}
            animate={{
              y: [0, d.yDrift, 0],
              x: [0, d.xDrift, 0],
              rotate: [d.rotation, d.rotDrift, d.rotation],
            }}
            transition={{
              duration: d.duration,
              delay: d.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={d.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
}
