"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AestheticDoodles } from "@/components/ui/AestheticDoodles";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center items-center text-center pt-28 pb-20 px-8 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* ── Aesthetic Biology Doodles ────────────────────────── */}
      <AestheticDoodles />

      {/* ── Dot grid backgrounds ─────────────────────────────── */}
      {/* Dark mode */}
      <div
        aria-hidden="true"
        className="absolute inset-0 dark-dots"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.20) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Light mode */}
      <div
        aria-hidden="true"
        className="absolute inset-0 light-dots"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Fade to bottom for smooth transition ───────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, var(--color-bg-base) 0%, transparent 100%)" }}
      />



      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* Headline */}
        <AnimateIn animation="fade-up">
          <h1
            id="hero-heading"
            className="font-display font-bold tracking-tight text-[var(--color-text-primary)]"
          >
            <span
              className="block text-[var(--color-text-secondary)]"
              style={{ fontSize: "clamp(1.4rem, 2.5vw + 0.5rem, 2.4rem)", lineHeight: 1.25, fontWeight: 500 }}
            >
              Przestań kuć biologię na pamięć.
            </span>
            <span
              className="block mt-1"
              style={{ fontSize: "clamp(2.8rem, 6vw + 0.8rem, 5.5rem)", lineHeight: 1.05 }}
            >
              Zacznij ją{" "}
              <span className="text-neon-green">rozumieć!</span>
            </span>
          </h1>
        </AnimateIn>

        {/* Sub */}
        <AnimateIn animation="fade-up" delay={150}>
          <p className="max-w-xl text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Samo wkuwanie definicji na pamięć to ślepy zaułek. Biologia to sztuka łączenia kropek, którą pomogę Ci opanować. Wyjaśnię Ci każdy temat w prosty i logiczny sposób, nauczę pisania pod klucz i zarażę pasją do biologii. Zbuduj fundament, który pozwolił mi zdobyć{" "}
            <strong className="text-[var(--color-text-primary)]">90%</strong> na maturze w{" "}
            <strong className="text-[var(--color-text-primary)]">9 miesięcy</strong> od zera.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn animation="fade-up" delay={280}>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center mb-10">
            <Button
              id="hero-cta-primary"
              size="lg"
              variant="primary"
              className="w-full md:w-auto"
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
              className="w-full md:w-auto"
              onClick={() =>
                document.getElementById("kim-jestem")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kim jestem?
            </Button>
          </div>
        </AnimateIn>

        {/* Feature / Format Badges */}
        <AnimateIn animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm text-[var(--color-text-primary)] font-medium">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-[var(--radius-full)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
              <span className="text-[var(--color-accent)] font-bold text-lg leading-none mt-[-2px]">•</span>
              <span>100% Online</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-[var(--radius-full)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
              <span className="text-[var(--color-accent)] font-bold text-lg leading-none mt-[-2px]">•</span>
              <span>Ekran iPada na żywo</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-[var(--radius-full)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
              <span className="text-[var(--color-accent)] font-bold text-lg leading-none mt-[-2px]">•</span>
              <span>Nauka pod klucz CKE</span>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Scroll hint */}
      <AnimateIn animation="fade-in" delay={900} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown
          size={32}
          className="text-[var(--color-text-secondary)] opacity-70 animate-bounce"
          aria-hidden="true"
        />
      </AnimateIn>
    </section>
  );
}
