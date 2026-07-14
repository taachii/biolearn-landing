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
    
    // Less doodles and smaller sizes on mobile to prevent clutter
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 55;
    
    const newDoodles = Array.from({ length: count }).map((_, i) => {
      const baseRotation = Math.floor(Math.random() * 360);
      return {
        id: i,
        Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        top: Math.random() * 100, 
        left: Math.random() * 100, 
        size: isMobile ? Math.floor(Math.random() * 20) + 16 : Math.floor(Math.random() * 40) + 16, 
        rotation: baseRotation,
        duration: Math.random() * 25 + 25, 
        travelDuration: Math.random() * 60 + 60, 
        delay: Math.random() * -30, 
        opacity: Math.random() * 0.22 + 0.08, 
        colorClass: colors[Math.floor(Math.random() * colors.length)],
        yDrift: Math.random() * 100 - 50, 
        xDrift: Math.random() * 100 - 50, 
        yTravel: Math.random() * 200 - 100,
        xTravel: Math.random() * 200 - 100,
        rotDrift: baseRotation + (Math.random() * 120 - 60), 
        parallaxX: Math.random() * 70 - 35,
        parallaxY: Math.random() * 70 - 35,
        blur: Math.random() > 0.5 ? Math.random() * 2.5 : 0, 
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
