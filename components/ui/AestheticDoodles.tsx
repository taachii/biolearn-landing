"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Dna, Leaf, Atom, Microscope, Brain, TestTubes, Syringe, Bug, Droplet, Bone, PawPrint, Flower2, Sprout, HeartPulse, Snail, Worm, Pill, FlaskConical } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Removed Sparkles, added Droplet
const ICONS = [Dna, Leaf, Atom, Microscope, Brain, TestTubes, Syringe, Bug, Droplet, Bone, PawPrint, Flower2, Sprout, HeartPulse, Snail, Worm, Pill, FlaskConical];

interface DoodleDef {
  id: number;
  Icon: React.ElementType;
  top: number;
  left: number;
  size: number;
  rotation: number;
  duration: number;
  travelDuration: number;
  delay: number;
  opacity: number;
  colorClass: string;
  yDrift: number;
  xDrift: number;
  yTravel: number;
  xTravel: number;
  rotDrift: number;
  parallaxX: number;
  parallaxY: number;
  blur: number;
}

function DoodleItem({ d, mouseX, mouseY, blur }: { d: DoodleDef, mouseX: MotionValue<number>, mouseY: MotionValue<number>, blur: number }) {
  const Icon = d.Icon;
  
  // Parallax transform (Layer 1)
  const xOffset = useTransform(mouseX, [-1, 1], [-d.parallaxX, d.parallaxX]);
  const yOffset = useTransform(mouseY, [-1, 1], [-d.parallaxY, d.parallaxY]);

  return (
    <motion.div
      className={cn("absolute", d.colorClass)}
      style={{
        top: `${d.top}%`,
        left: `${d.left}%`,
        opacity: `calc(${d.opacity} * var(--doodle-opacity))`,
        x: xOffset,
        y: yOffset,
        filter: blur > 0 ? `blur(${blur}px)` : "none",
      }}
    >
      {/* Layer 2: Macro positional travel across the screen */}
      <motion.div
        animate={{ x: [0, d.xTravel, 0], y: [0, d.yTravel, 0] }}
        transition={{ duration: d.travelDuration, delay: d.delay, repeat: Infinity, ease: "linear" }}
      >
        {/* Layer 3: Micro wobble and rotation */}
        <motion.div
          initial={{ rotate: d.rotation }}
          animate={{
            rotate: [d.rotation, d.rotDrift, d.rotation],
            y: [0, d.yDrift, 0],
            x: [0, d.xDrift, 0],
          }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={d.size} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function AestheticDoodles() {
  const [doodles, setDoodles] = useState<DoodleDef[]>([]);

  // Track raw mouse coords
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth mouse tracking to give a nice "drag" feeling to the parallax
  const smoothX = useSpring(rawX, { stiffness: 40, damping: 25, mass: 0.5 });
  const smoothY = useSpring(rawY, { stiffness: 40, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize -1 to 1 based on center of screen
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      rawX.set(x);
      rawY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  useEffect(() => {
    // Generate positions strictly on client to avoid Next.js hydration mismatch
    const colors = ["text-neon-green", "text-neon-cyan", "text-[var(--color-text-muted)]", "text-[var(--color-text-secondary)]"];
    
    const isMobile = window.innerWidth < 768;
    
    // Grid settings to distribute icons evenly without overlapping
    const cols = isMobile ? 4 : 10;
    const rows = isMobile ? 8 : 8;
    
    // Define the "center" zone to exclude (where the hero text/CTA is)
    const excludedCols = isMobile ? [1, 2] : [2, 3, 4, 5, 6, 7];
    const excludedRows = isMobile ? [2, 3, 4, 5] : [2, 3, 4, 5];

    // Collect all valid cells
    const validCells: {c: number, r: number}[] = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (!(excludedCols.includes(c) && excludedRows.includes(r))) {
          validCells.push({ c, r });
        }
      }
    }

    // Shuffle valid cells to pick random ones
    const shuffledCells = validCells.sort(() => Math.random() - 0.5);
    
    // Determine how many icons we can/should place
    const maxIcons = isMobile ? 15 : 45;
    const count = Math.min(maxIcons, shuffledCells.length);
    const selectedCells = shuffledCells.slice(0, count);

    const newDoodles = selectedCells.map((cell, i) => {
      const cellWidth = 100 / cols;
      const cellHeight = 100 / rows;
      
      // Jitter (randomness) within the cell, but keeping away from edges (15% to 85% of cell width)
      const jitterX = (Math.random() * 0.7 + 0.15) * cellWidth;
      const jitterY = (Math.random() * 0.7 + 0.15) * cellHeight;

      const baseRotation = Math.floor(Math.random() * 360);
      
      return {
        id: i,
        Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        top: cell.r * cellHeight + jitterY, 
        left: cell.c * cellWidth + jitterX, 
        size: isMobile ? Math.floor(Math.random() * 24) + 24 : Math.floor(Math.random() * 48) + 24, 
        rotation: baseRotation,
        duration: Math.random() * 25 + 25, 
        travelDuration: Math.random() * 60 + 60, 
        delay: Math.random() * -30, 
        opacity: Math.random() * 0.22 + 0.08, 
        colorClass: colors[Math.floor(Math.random() * colors.length)],
        yDrift: Math.random() * 100 - 50, 
        xDrift: Math.random() * 100 - 50, 
        yTravel: Math.random() * 150 - 75, // Reduced travel distance to prevent crossing too much into the center
        xTravel: Math.random() * 150 - 75,
        rotDrift: baseRotation + (Math.random() * 120 - 60), 
        parallaxX: Math.random() * 70 - 35,
        parallaxY: Math.random() * 70 - 35,
        blur: 0, 
      };
    });
    
    setDoodles(newDoodles);
  }, []);

  if (doodles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 doodle-mask">
      {doodles.map((d) => (
        <DoodleItem key={d.id} d={d} mouseX={smoothX} mouseY={smoothY} blur={d.blur} />
      ))}
    </div>
  );
}
