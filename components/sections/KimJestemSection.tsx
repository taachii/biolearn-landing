import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { TrendingUp, Award, Clock, Target } from "lucide-react";

interface KimJestemSectionProps {
  id?: string;
}

const STATS = [
  { icon: TrendingUp, value: "90%",  label: "Matura rozszerzona", accent: "green" },
  { icon: Award,      value: "100.", label: "centyl w Polsce",     accent: "green" },
  { icon: Clock,      value: "9",    label: "miesięcy nauki",      accent: "cyan"  },
  { icon: Target,     value: "0",    label: "wiedzy na start",     accent: "cyan"  },
] as const;

export function KimJestemSection({ id }: KimJestemSectionProps) {
  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-10 overflow-hidden"
    >
      {/* subtle ambient */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent-muted) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ──────────────────────────────────── */}
          <AnimateIn animation="fade-right" className="flex flex-col gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Kim <span className="text-neon-green">jestem?</span>
            </h2>

            <div className="flex flex-col gap-4 text-[var(--color-text-secondary)] leading-relaxed text-lg">
              <p>
                Cześć, jestem <strong className="text-[var(--color-text-primary)]">Adam</strong> — maturzysta, który w ciągu
                zaledwie 9 miesięcy opanował biologię rozszerzoną od absolutnego zera do{" "}
                <strong className="text-neon-green">90% i 100. centyla</strong> w Polsce.
              </p>
              <p>
                {/* Placeholder — uzupełnij własnym tekstem */}
                Nie jestem "urodzonym biologiem". Zacząłem naukę bez żadnych podstaw
                i bez korepetytora — korzystając wyłącznie z własnoręcznie opracowanego systemu
                łączenia wiedzy w logiczne schematy zamiast zakuwania na pamięć.
              </p>
              <p>
                Teraz chcę przekazać tę metodę Tobie — szczególnie jeśli celujesz w studia medyczne
                i potrzebujesz naprawdę wysokiego wyniku na{" "}
                <strong className="text-[var(--color-text-primary)]">Maturze 2026</strong>.
              </p>
            </div>

            {/* Mini stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              {STATS.map(({ icon: Icon, value, label, accent }, i) => (
                <AnimateIn key={i} animation="zoom-in" delay={i * 80}>
                  <div className="glass rounded-[var(--radius-xl)] p-4 flex flex-col items-center gap-1.5 text-center">
                    <span
                      className={`flex items-center justify-center w-7 h-7 rounded-[var(--radius-md)] ${
                        accent === "green"
                          ? "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                          : "bg-[var(--color-cyan-muted)] text-[var(--color-cyan)]"
                      }`}
                    >
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span
                      className={`font-display font-bold text-2xl leading-none ${
                        accent === "green" ? "text-neon-green" : "text-neon-cyan"
                      }`}
                    >
                      {value}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] leading-tight font-medium">
                      {label}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>

          {/* ── RIGHT: Photo ─────────────────────────────────── */}
          <AnimateIn animation="fade-left" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Photo card */}
              <div
                className="relative aspect-[3/4] w-full rounded-[var(--radius-2xl)] overflow-hidden border shadow-[var(--shadow-card)] photo-card-bg transition-colors duration-300"
              >
                <Image
                  src="/images/adam.png"
                  alt="Adam — Korepetytor Biologii"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 400px"
                />
                {/* Corner accents */}
                <span aria-hidden="true" className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[var(--color-accent)] rounded-tl-lg opacity-80 z-10" />
                <span aria-hidden="true" className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[var(--color-accent)] rounded-tr-lg opacity-80 z-10" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-2.5 border border-[var(--color-border)] flex items-center gap-2 whitespace-nowrap shadow-[var(--shadow-glow-accent)]">
                <span className="text-[var(--color-accent)] text-sm" aria-hidden="true">✦</span>
                <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Wynik potwierdzony świadectwem</span>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
