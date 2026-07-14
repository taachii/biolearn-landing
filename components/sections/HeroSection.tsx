"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button }    from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { DnaHelix }  from "@/components/ui/DnaHelix";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center items-center text-center pt-28 pb-20 px-6 sm:px-8 overflow-hidden"
    >
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

      {/* ── Green bloom top + cyan glow bottom-left ─────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,230,118,0.13) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(0,207,255,0.08) 0%, transparent 60%)" }}
      />

      {/* ── Decorative vertical lines ────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-y-0 left-[15%] w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-40 hidden xl:block" />
      <div aria-hidden="true" className="absolute inset-y-0 right-[15%] w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-40 hidden xl:block" />

      {/* ── DNA Helices ──────────────────────────────────────── */}
      {/* Left helix */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -translate-y-1/2 left-[2%] opacity-55 hidden lg:block"
        style={{ animation: "dna-drift 14s ease-in-out infinite alternate" }}
      >
        <DnaHelix height={520} width={80} turns={4} />
      </div>
      {/* Right helix — slightly offset vertically for asymmetry */}
      <div
        aria-hidden="true"
        className="absolute top-[45%] -translate-y-1/2 right-[2%] opacity-55 hidden lg:block"
        style={{ animation: "dna-drift 14s ease-in-out infinite alternate-reverse" }}
      >
        <DnaHelix height={520} width={80} turns={4} />
      </div>

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
      </div>

      {/* Scroll hint */}
      <AnimateIn animation="fade-in" delay={900} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          size={24}
          className="text-[var(--color-text-muted)] animate-bounce"
          aria-hidden="true"
        />
      </AnimateIn>
    </section>
  );
}
