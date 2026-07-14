"use client";

import { ArrowRight, ChevronDown, TrendingUp, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

/* Floating proof chips shown around the headline */
const CHIPS = [
  { id: "chip-score",  label: "90%",         sub: "Matura rozszerzona", accent: "green", pos: "top-[18%] left-[4%]  lg:left-[8%]",  icon: TrendingUp, delay: 500 },
  { id: "chip-centyl", label: "100. centyl",  sub: "wśród maturzystów",  accent: "cyan",  pos: "top-[18%] right-[4%] lg:right-[8%]", icon: Award,       delay: 600 },
  { id: "chip-time",   label: "9 miesięcy",   sub: "od zera do matury",  accent: "green", pos: "bottom-[22%] left-[2%] lg:left-[6%]", icon: Clock,      delay: 700 },
] as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center items-center text-center pt-28 pb-20 px-6 sm:px-8 overflow-hidden"
    >
      {/* ── Backgrounds ─────────────────────────────────────────── */}
      {/* Dot grid — more visible */}
      <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-60" />

      {/* Top green bloom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,230,118,0.13) 0%, transparent 60%)" }}
      />
      {/* Bottom-left cyan glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(0,207,255,0.08) 0%, transparent 60%)" }}
      />

      {/* Decorative vertical lines */}
      <div aria-hidden="true" className="absolute inset-y-0 left-[15%] w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-40 hidden lg:block" />
      <div aria-hidden="true" className="absolute inset-y-0 right-[15%] w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-40 hidden lg:block" />

      {/* ── Floating proof chips ────────────────────────────────── */}
      {CHIPS.map(({ id, label, sub, accent, pos, icon: Icon, delay }) => (
        <AnimateIn
          key={id}
          animation="zoom-in"
          delay={delay}
          className={cn("absolute hidden lg:flex items-center gap-3 pointer-events-none", pos)}
        >
          <div className={cn(
            "glass rounded-[var(--radius-xl)] px-4 py-3 flex items-center gap-3 border",
            accent === "green"
              ? "border-[rgba(0,230,118,0.20)] shadow-[var(--shadow-glow-accent)]"
              : "border-[rgba(0,207,255,0.20)] shadow-[var(--shadow-glow-cyan)]"
          )}>
            <span className={cn(
              "flex items-center justify-center w-8 h-8 rounded-[var(--radius-md)] shrink-0",
              accent === "green" ? "bg-[var(--color-accent-muted)] text-[var(--color-accent)]" : "bg-[var(--color-cyan-muted)] text-[var(--color-cyan)]"
            )}>
              <Icon size={15} />
            </span>
            <div className="text-left">
              <div className={cn("font-display font-bold text-lg leading-none", accent === "green" ? "text-neon-green" : "text-neon-cyan")}>
                {label}
              </div>
              <div className="text-[10px] text-[var(--color-text-muted)] mt-0.5 font-medium">{sub}</div>
            </div>
          </div>
        </AnimateIn>
      ))}

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

        {/* Mobile proof chips — displayed inline below CTAs on mobile */}
        <AnimateIn animation="fade-up" delay={400} className="flex lg:hidden flex-wrap justify-center gap-2 mt-2">
          {CHIPS.map(({ id, label, sub, accent, icon: Icon }) => (
            <div key={id} className={cn(
              "glass rounded-full px-3 py-1.5 flex items-center gap-2 border text-xs",
              accent === "green" ? "border-[rgba(0,230,118,0.20)]" : "border-[rgba(0,207,255,0.20)]"
            )}>
              <Icon size={12} className={accent === "green" ? "text-[var(--color-accent)]" : "text-[var(--color-cyan)]"} />
              <span className={cn("font-bold", accent === "green" ? "text-neon-green" : "text-neon-cyan")}>{label}</span>
              <span className="text-[var(--color-text-muted)]">{sub}</span>
            </div>
          ))}
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
