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

import Image from "next/image";
import { ArrowRight, TrendingUp, Clock, Target, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

/* ── Stats grid data ──────────────────────────────────────── */
const STATS = [
  {
    id:    "stat-score",
    icon:  TrendingUp,
    value: "90%+",
    label: "Twój cel na Maturze 2026",
    accent: "green",
  },
  {
    id:    "stat-centyl",
    icon:  Award,
    value: "100.",
    label: "centyl — nasz wspólny target",
    accent: "green",
  },
  {
    id:    "stat-time",
    icon:  Clock,
    value: "9",
    label: "miesięcy usystematyzowanej nauki",
    accent: "cyan",
  },
  {
    id:    "stat-start",
    icon:  Target,
    value: "0",
    label: "wymaganej wiedzy z biologii na start",
    accent: "cyan",
  },
] as const;

/* ── Component ────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center pt-24 pb-12 sm:pt-32 sm:pb-16 px-6 sm:px-8 lg:px-10 overflow-hidden"
    >
      {/* ── Backgrounds ────────────────────────────────────── */}
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
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            {/* H1 */}
            <AnimateIn animation="fade-up" delay={160}>
              <h1
                id="hero-heading"
                className="font-display font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]"
            <AnimateIn animation="fade-right">
              <div className="inline-block py-1.5 px-3 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-xs sm:text-sm font-semibold mb-6 border border-[rgba(0,230,118,0.20)] shadow-[var(--shadow-glow-accent)]">
                🚀 Zapisy na przygotowania do Matury 2026
              </div>
              <h1 id="hero-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Systemowe podejście do biologii. <br />
                Klucz do <span className="text-neon-green">wysokiego wyniku</span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl leading-relaxed">
                Biologia to nie nauka na pamięć, to system naczyń połączonych. Opanowałem go od zera i zdałem maturę rozszerzoną na 90% w 9 miesięcy. Nauczę Cię logicznego myślenia, które wpasowuje się w klucz CKE.
              </p>
            </AnimateIn>

            {/* CTAs — desktop only (mobile version is below photo) */}
            <AnimateIn animation="fade-up" delay={320} className="hidden lg:block w-full">
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

            {/* Social proof — desktop only */}
            <AnimateIn animation="fade-in" delay={420} className="hidden lg:flex">
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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none">

              {/* Main photo card */}
              <div
                className={cn(
                  "relative aspect-[3/4] w-full rounded-[var(--radius-2xl)] overflow-hidden",
                  "border border-[var(--color-border)]",
                  "shadow-[var(--shadow-card)] bg-[var(--color-bg-card)]"
                )}
              >
                {/* Photo */}
                <Image
                  src="/images/adam.png"
                  alt="Adam — Korepetytor Biologii"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 420px"
                />

                {/* Corner accents */}
                <span aria-hidden="true" className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[var(--color-accent)] rounded-tl-lg opacity-80 z-10" />
                <span aria-hidden="true" className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[var(--color-accent)] rounded-tr-lg opacity-80 z-10" />
              </div>

              {/* ── Floating stat: 90% ──────────────────────── */}
              <div
                className={cn(
                  "absolute -left-3 sm:-left-8 top-[5%] sm:top-[8%]",
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
                  "absolute -right-3 sm:-right-8 bottom-[8%] sm:bottom-[15%]",
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

        {/* ── Mobile CTAs + Social proof — below photo, hidden on desktop ── */}
        <AnimateIn animation="fade-up" delay={300} className="flex flex-col items-center gap-4 lg:hidden">
          <div className="flex flex-col gap-3 w-full">
            <Button
              id="hero-cta-primary-mobile"
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
              id="hero-cta-secondary-mobile"
              size="lg"
              variant="secondary"
              onClick={() =>
                document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Poznaj moją historię
            </Button>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
            <span aria-hidden="true" className="inline-block w-5 h-px bg-[var(--color-border)]" />
            Wynik potwierdzony świadectwem maturalnym
            <span aria-hidden="true" className="inline-block w-5 h-px bg-[var(--color-border)]" />
          </p>
        </AnimateIn>

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

    </section>
  );
}
