"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Dna, Hexagon, Leaf, Atom, Microscope, Beaker, Brain, Activity, TestTubes, Syringe, Bug, Droplet } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Removed Sparkles, added Droplet
const ICONS = [Dna, Hexagon, Leaf, Atom, Microscope, Beaker, Brain, Activity, TestTubes, Syringe, Bug, Droplet];

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
}

function DoodleItem({ d, mouseX, mouseY }: { d: DoodleDef, mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
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
    
    // Increased count to 45
    const newDoodles = Array.from({ length: 45 }).map((_, i) => {
      const baseRotation = Math.floor(Math.random() * 360);
      return {
        id: i,
        Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        top: Math.random() * 100, 
        left: Math.random() * 100, 
        size: Math.floor(Math.random() * 32) + 24, 
        rotation: baseRotation,
        duration: Math.random() * 25 + 20, 
        travelDuration: Math.random() * 60 + 60, // 60-120 seconds
        delay: Math.random() * -30, 
        opacity: Math.random() * 0.22 + 0.08, // Increased opacity: 8% to 30% visibility
        colorClass: colors[Math.floor(Math.random() * colors.length)],
        yDrift: Math.random() * 80 - 40, 
        xDrift: Math.random() * 80 - 40, 
        yTravel: Math.random() * 200 - 100,
        xTravel: Math.random() * 200 - 100,
        rotDrift: baseRotation + (Math.random() * 90 - 45), 
        // Parallax depth multiplier
        parallaxX: Math.random() * 60 - 30,
        parallaxY: Math.random() * 60 - 30,
      };
    });
    
    setDoodles(newDoodles);
  }, []);

  if (doodles.length === 0) return null;

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        // Creates a smooth fade-out hole in the center to protect the text
        maskImage: "radial-gradient(ellipse 60% 45% at 50% 50%, transparent 35%, black 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 45% at 50% 50%, transparent 35%, black 70%)",
      }}
    >
      {doodles.map((d) => (
        <DoodleItem key={d.id} d={d} mouseX={smoothX} mouseY={smoothY} />
      ))}
    </div>
  );
}
