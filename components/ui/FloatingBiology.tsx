"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function FloatingBiology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects for different depths (simulate microscopic focal planes)
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Asset 1: Large blurred cell in the foreground */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-[10%] top-[15%] w-[350px] h-[350px] opacity-40 blur-[8px] bio-blend hidden sm:block"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/bio/cell.png" alt="" fill className="object-contain" unoptimized />
      </motion.div>

      {/* Asset 2: Sharp virus floating mid-ground right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[2%] top-[25%] w-[200px] h-[200px] opacity-60 blur-[1px] bio-blend"
        animate={{
          rotate: [0, 15, -5, 0],
          y: [0, -30, 15, 0],
          x: [0, -10, 5, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/bio/virus.png" alt="" fill className="object-contain" unoptimized />
      </motion.div>

      {/* Asset 3: Mito floating deep background left */}
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[15%] bottom-[10%] w-[250px] h-[250px] opacity-25 blur-xl bio-blend"
        animate={{
          rotate: [0, -20, 10, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/bio/mito.png" alt="" fill className="object-contain" unoptimized />
      </motion.div>

      {/* Asset 4: Small cell mid-ground top right */}
      <motion.div
        style={{ y: y4 }}
        className="absolute right-[22%] -top-[2%] w-[120px] h-[120px] opacity-50 blur-[3px] bio-blend"
        animate={{
          y: [0, 25, -15, 0],
          x: [0, -15, 20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/bio/cell.png" alt="" fill className="object-contain" unoptimized />
      </motion.div>
    </div>
  );
}
