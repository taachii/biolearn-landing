"use client";

/**
 * components/sections/HeroSection.tsx
 *
 * Full-width single-column hero.
 * Statement-first layout: big headline, sub, CTAs — centered.
 */

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center items-center text-center pt-24 pb-20 px-6 sm:px-8 overflow-hidden"
    >
      {/* ── Backgrounds ────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(0,230,118,0.10) 0%, transparent 65%)",
        }}
      />
      <div aria-hidden="true" className="glow-orb-green" style={{ width: 700, height: 700, top: -250, left: "50%", transform: "translateX(-50%)" }} />
      <div aria-hidden="true" className="glow-orb-cyan"  style={{ width: 500, height: 500, bottom: -100, left: "10%" }} />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Headline */}
        <AnimateIn animation="fade-up">
          <h1
            id="hero-heading"
            className="font-display font-bold tracking-tight text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(2.6rem, 5.5vw + 1rem, 5rem)", lineHeight: 1.08 }}
          >
            Przestań kuć biologię na pamięć.{" "}
            <br className="hidden sm:block" />
            Zacznij ją{" "}
            <span className="text-neon-green">rozumieć!</span>
          </h1>
        </AnimateIn>

        {/* Sub */}
        <AnimateIn animation="fade-up" delay={150}>
          <p className="max-w-2xl text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Biologia to nie encyklopedia — to system naczyń połączonych.{" "}
            Opanowałem go od zera i zdałem maturę rozszerzoną na{" "}
            <strong className="text-[var(--color-text-primary)]">90%</strong> w{" "}
            <strong className="text-[var(--color-text-primary)]">9 miesięcy</strong>.
            Nauczę Cię logicznego myślenia, które wpasowuje się w klucz CKE.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn animation="fade-up" delay={280}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Button
              id="hero-cta-primary"
              size="lg"
              variant="primary"
              onClick={() =>
                document.getElementById("rezerwacja")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Zapisz się na pierwszą lekcję
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button
              id="hero-cta-secondary"
              size="lg"
              variant="secondary"
              onClick={() =>
                document.getElementById("kim-jestem")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kim jestem?
            </Button>
          </div>
        </AnimateIn>

        {/* Social proof */}
        <AnimateIn animation="fade-in" delay={400}>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
            <span aria-hidden="true" className="inline-block w-8 h-px bg-[var(--color-border)]" />
            Wynik potwierdzony świadectwem maturalnym
            <span aria-hidden="true" className="inline-block w-8 h-px bg-[var(--color-border)]" />
          </p>
        </AnimateIn>
      </div>

      {/* Scroll hint */}
      <AnimateIn animation="fade-in" delay={700} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          size={24}
          className="text-[var(--color-text-muted)] animate-bounce"
          aria-hidden="true"
        />
      </AnimateIn>
    </section>
  );
}
