"use client";

/**
 * components/sections/HeroSection.tsx
 *
 * Two-column hero layout:
 *   Left  → content (badge, headline, sub, CTAs, social proof)
 *   Right → photo placeholder with floating stat badges
 *
 * Below → full-width stats grid (animated stagger on scroll)
 */

import { ArrowRight, TrendingUp, Clock, Target, Award, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

/* ── Stats grid data ──────────────────────────────────────── */
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

/* ── Transformation steps ─────────────────────────────────── */
const TRANSFORMATION = [
  { label: "Inżynier IT",               color: "text-[var(--color-text-secondary)]" },
  { label: "9 mies. intensywnej nauki", color: "text-[var(--color-cyan)]"           },
  { label: "90% · 100. centyl",         color: "text-neon-green"                    },
] as const;

/* ── Component ────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-20"
    >
      {/* ── Backgrounds ──────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 60% -5%, rgba(0,230,118,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Glow orbs */}
      <div aria-hidden="true" className="glow-orb-green" style={{ width: 700, height: 700, top: -300, right: "-5%" }} />
      <div aria-hidden="true" className="glow-orb-cyan"  style={{ width: 500, height: 500, bottom: 40, left: "5%"  }} />

      {/* ── Content wrapper ──────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">

        {/* ── Two-column grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

          {/* ══ LEFT: Content ════════════════════════════════ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">

            {/* Badge */}
            <AnimateIn animation="fade-up" delay={0}>
              <Badge variant="accent">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                100. centyl · 90% z biologii rozszerzonej
              </Badge>
            </AnimateIn>

            {/* Transformation path */}
            <AnimateIn animation="fade-up" delay={80}>
              <div
                aria-label="Od Inżyniera IT do 90% z biologii"
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm font-medium"
              >
                {TRANSFORMATION.map(({ label, color }, i) => (
                  <span key={label} className="flex items-center gap-2">
                    <span className={cn("font-semibold", color)}>{label}</span>
                    {i < TRANSFORMATION.length - 1 && (
                      <ArrowRight size={13} className="text-[var(--color-text-muted)] shrink-0" aria-hidden="true" />
                    )}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* H1 */}
            <AnimateIn animation="fade-up" delay={160}>
              <h1
                id="hero-heading"
                className="font-display font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]"
                style={{ fontSize: "clamp(2.4rem, 4.5vw + 0.8rem, 4.2rem)" }}
              >
                Zrozum biologię tak,{" "}
                <br className="hidden sm:block" />
                jak rozumie ją{" "}
                <span className="gradient-text">przyszły lekarz</span>
              </h1>
            </AnimateIn>

            {/* Sub-headline */}
            <AnimateIn animation="fade-up" delay={240}>
              <p
                className="max-w-xl text-[var(--color-text-secondary)] leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1.2rem)" }}
              >
                Nie uczę zakuwania. Uczę{" "}
                <strong className="text-[var(--color-text-primary)] font-semibold">
                  rozumienia mechanizmów
                </strong>{" "}
                — dokładnie tak, jak sam opanowałem całą biologię od zera i zdałem
                maturę rozszerzoną na{" "}
                <strong className="text-neon-green font-semibold">90%</strong> w ciągu{" "}
                <strong className="text-[var(--color-text-primary)] font-semibold">
                  9 miesięcy
                </strong>.
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn animation="fade-up" delay={320}>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
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
                    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Poznaj moją historię
                </Button>
              </div>
            </AnimateIn>

            {/* Social proof */}
            <AnimateIn animation="fade-in" delay={420}>
              <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
                <span aria-hidden="true" className="inline-block w-5 h-px bg-[var(--color-border)]" />
                Wynik potwierdzony świadectwem maturalnym
                <span aria-hidden="true" className="inline-block w-5 h-px bg-[var(--color-border)]" />
              </p>
            </AnimateIn>
          </div>

          {/* ══ RIGHT: Photo placeholder ═════════════════════ */}
          <AnimateIn
            animation="fade-left"
            delay={200}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] lg:max-w-none">

              {/* Main photo card */}
              <div
                className={cn(
                  "relative aspect-[3/4] w-full rounded-[var(--radius-2xl)] overflow-hidden",
                  "bg-[var(--color-bg-card)] border border-[var(--color-border)]",
                  "shadow-[var(--shadow-card)]"
                )}
              >
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid opacity-25" />

                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,230,118,0.06) 0%, transparent 70%)",
                  }}
                />

                {/* Corner accents */}
                <span aria-hidden="true" className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)] rounded-tl-lg opacity-70" />
                <span aria-hidden="true" className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)] rounded-tr-lg opacity-70" />
                <span aria-hidden="true" className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--color-border)] rounded-bl-lg opacity-50" />
                <span aria-hidden="true" className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[var(--color-border)] rounded-br-lg opacity-50" />

                {/* Center placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div
                    className={cn(
                      "flex items-center justify-center w-24 h-24 rounded-full",
                      "border-2 border-dashed border-[var(--color-border)]",
                      "bg-[var(--color-bg-elevated)]",
                      "text-[var(--color-text-muted)]"
                    )}
                  >
                    <User size={40} strokeWidth={1.2} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[var(--color-text-secondary)]">Adam</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Miejsce na Twoje zdjęcie</p>
                  </div>
                </div>
              </div>

              {/* ── Floating stat: 90% ──────────────────────── */}
              <div
                className={cn(
                  "absolute -left-5 top-[20%]",
                  "glass rounded-[var(--radius-xl)] px-5 py-3.5",
                  "shadow-[var(--shadow-glow-accent)]",
                  "border border-[rgba(0,230,118,0.20)]"
                )}
              >
                <div className="font-display font-bold text-2xl text-neon-green leading-none">90%</div>
                <div className="text-[10px] text-[var(--color-text-muted)] mt-1 font-medium">Matura rozszerzona</div>
              </div>

              {/* ── Floating stat: 100. centyl ──────────────── */}
              <div
                className={cn(
                  "absolute -right-5 bottom-[22%]",
                  "glass rounded-[var(--radius-xl)] px-5 py-3.5",
                  "shadow-[var(--shadow-glow-cyan)]",
                  "border border-[rgba(0,207,255,0.20)]"
                )}
              >
                <div className="font-display font-bold text-2xl text-neon-cyan leading-none">100.</div>
                <div className="text-[10px] text-[var(--color-text-muted)] mt-1 font-medium">centyl w Polsce</div>
              </div>

              {/* ── Floating badge: title ────────────────────── */}
              <div
                className={cn(
                  "absolute -bottom-5 left-1/2 -translate-x-1/2",
                  "glass rounded-full px-5 py-2",
                  "border border-[var(--color-border)]",
                  "flex items-center gap-2 whitespace-nowrap"
                )}
              >
                <Sparkles size={13} className="text-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Korepetytor Biologii
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ── Stats grid — full width ──────────────────────── */}
        <dl
          aria-label="Kluczowe wyniki"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4"
        >
          {STATS.map(({ id, icon: Icon, value, label, accent }, i) => (
            <AnimateIn key={id} animation="zoom-in" delay={i * 80}>
              <div
                id={id}
                className={cn(
                  "glass rounded-[var(--radius-xl)] p-5 flex flex-col items-center gap-2 h-full",
                  "transition-all duration-[var(--duration-normal)]",
                  accent === "green"
                    ? "hover:shadow-[0_0_24px_rgba(0,230,118,0.15)] hover:border-[rgba(0,230,118,0.25)]"
                    : "hover:shadow-[0_0_24px_rgba(0,207,255,0.12)] hover:border-[rgba(0,207,255,0.20)]"
                )}
              >
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
                <dt className={cn("font-display font-bold text-3xl leading-none", accent === "green" ? "text-neon-green" : "text-neon-cyan")}>
                  {value}
                </dt>
                <dd className="text-[11px] text-[var(--color-text-muted)] leading-snug text-center font-medium">
                  {label}
                </dd>
              </div>
            </AnimateIn>
          ))}
        </dl>
      </div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-medium">Przewiń</span>
        <span className="w-px h-8 bg-gradient-to-b from-[var(--color-border)] to-transparent" />
      </div>
    </section>
  );
}
