"use client";

/**
 * components/sections/HeroSection.tsx
 *
 * Landing page hero — the first impression.
 *
 * Visual structure:
 * ┌─────────────────────────────────────────────┐
 * │  BADGE  "100. centyl · 90% z biologii"      │
 * │  H1     Headline z transformacją            │
 * │  Sub    Opis metody                         │
 * │  Stats  4 karty z kluczowymi liczbami       │
 * │  CTAs   [Zapisz się] [Poznaj metodę]        │
 * │  BG     Grid + glow orby                    │
 * └─────────────────────────────────────────────┘
 */

import { ArrowRight, TrendingUp, Clock, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

/* ── Stat card data ─────────────────────────────────────── */
const STATS = [
  {
    id:    "stat-score",
    icon:  TrendingUp,
    value: "90%",
    label: "Wynik na maturze rozszerzonej",
    accent: "green",
  },
  {
    id:    "stat-centyl",
    icon:  Award,
    value: "100.",
    label: "centyl wśród maturzystów",
    accent: "green",
  },
  {
    id:    "stat-time",
    icon:  Clock,
    value: "9",
    label: "miesięcy nauki od zera",
    accent: "cyan",
  },
  {
    id:    "stat-start",
    icon:  Target,
    value: "0",
    label: "wcześniejszej wiedzy z biologii",
    accent: "cyan",
  },
] as const;

/* ── Transformation steps ───────────────────────────────── */
const TRANSFORMATION = [
  { label: "Inżynier IT",             color: "text-[var(--color-text-secondary)]" },
  { label: "9 mies. intensywnej nauki", color: "text-[var(--color-cyan)]"         },
  { label: "90% · 100. centyl",       color: "text-neon-green"                    },
] as const;

/* ── Component ──────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      {/* ── Background: grid ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-40"
      />

      {/* ── Background: radial gradient fade ──────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,230,118,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Glow orbs ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="glow-orb-green"
        style={{ width: 600, height: 600, top: -200, left: "60%", transform: "translateX(-50%)" }}
      />
      <div
        aria-hidden="true"
        className="glow-orb-cyan"
        style={{ width: 400, height: 400, bottom: 0, left: "10%" }}
      />

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Badge */}
        <Badge variant="accent">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          100. centyl · 90% z biologii rozszerzonej
        </Badge>

        {/* Transformation path */}
        <div
          aria-label="Transformacja: od Inżyniera IT do 90% z biologii"
          className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-[var(--color-text-muted)]"
        >
          {TRANSFORMATION.map(({ label, color }, i) => (
            <span key={label} className="flex items-center gap-2">
              <span className={cn("font-semibold", color)}>{label}</span>
              {i < TRANSFORMATION.length - 1 && (
                <ArrowRight
                  size={14}
                  className="text-[var(--color-text-muted)] shrink-0"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="font-display font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)]"
          style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)" }}
        >
          Zrozum biologię tak,{" "}
          <br className="hidden sm:block" />
          jak rozumie ją{" "}
          <span className="gradient-text">przyszły lekarz</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-2xl text-[var(--color-text-secondary)] leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.25rem)" }}
        >
          Nie uczę zakuwania. Uczę <strong className="text-[var(--color-text-primary)] font-semibold">rozumienia mechanizmów</strong> — dokładnie
          tak, jak sam opanowałem całą biologię od zera i zdałem maturę rozszerzoną
          na <strong className="text-neon-green font-semibold">90%</strong> w ciągu{" "}
          <strong className="text-[var(--color-text-primary)] font-semibold">9 miesięcy</strong>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button
            id="hero-cta-primary"
            size="lg"
            variant="primary"
            onClick={() =>
              document
                .getElementById("rezerwacja")
                ?.scrollIntoView({ behavior: "smooth" })
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
              document
                .getElementById("historia")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Poznaj moją historię
          </Button>
        </div>

        {/* Stats grid */}
        <dl
          aria-label="Kluczowe wyniki"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-3xl mt-4"
        >
          {STATS.map(({ id, icon: Icon, value, label, accent }) => (
            <div
              key={id}
              id={id}
              className={cn(
                "glass rounded-[var(--radius-xl)] p-5 flex flex-col items-center gap-2",
                "hover:border-[var(--color-border)] transition-all duration-[var(--duration-normal)]",
                "group",
                accent === "green"
                  ? "hover:shadow-[0_0_20px_rgba(0,230,118,0.12)]"
                  : "hover:shadow-[0_0_20px_rgba(0,207,255,0.10)]"
              )}
            >
              {/* Icon */}
              <span
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-[var(--radius-md)]",
                  accent === "green"
                    ? "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                    : "bg-[var(--color-cyan-muted)] text-[var(--color-cyan)]"
                )}
              >
                <Icon size={16} aria-hidden="true" />
              </span>

              {/* Value */}
              <dt
                className={cn(
                  "font-display font-bold leading-none",
                  "text-[var(--color-text-primary)]",
                  accent === "green" ? "text-neon-green" : "text-neon-cyan",
                  "text-3xl"
                )}
              >
                {value}
              </dt>

              {/* Label */}
              <dd className="text-[11px] text-[var(--color-text-muted)] leading-snug text-center font-medium">
                {label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Social proof micro-line */}
        <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block w-4 h-px bg-[var(--color-border)]"
          />
          Wynik potwierdzony świadectwem maturalnym
          <span
            aria-hidden="true"
            className="inline-block w-4 h-px bg-[var(--color-border)]"
          />
        </p>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-medium">
          Przewiń
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-[var(--color-border)] to-transparent" />
      </div>
    </section>
  );
}
