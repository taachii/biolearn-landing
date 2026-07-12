"use client";

/**
 * components/ui/AnimateIn.tsx
 *
 * Scroll-triggered animation wrapper.
 * Uses IntersectionObserver to toggle `.in-view` class.
 * Animation styles are defined in globals.css via [data-animate].
 *
 * Usage:
 *   <AnimateIn animation="fade-up" delay={100}>
 *     <Card />
 *   </AnimateIn>
 */

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";

interface AnimateInProps {
  children: React.ReactNode;
  animation?: AnimationType;
  /** Delay before animation starts (ms). Use for stagger effects. */
  delay?: number;
  /** 0–1: fraction of element visible before triggering. */
  threshold?: number;
  className?: string;
}

export function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.12,
  className,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply stagger delay
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect(); // animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      data-animate={animation}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
