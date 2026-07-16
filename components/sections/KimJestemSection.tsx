import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface KimJestemSectionProps {
  id?: string;
}

export function KimJestemSection({ id }: KimJestemSectionProps) {
  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* subtle ambient */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent-muted) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">

          {/* ── LEFT: Text ──────────────────────────────────── */}
          <AnimateIn animation="fade-right" className="flex flex-col gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Kim <span className="text-neon-green">jestem?</span>
            </h2>

            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-5">
              Cześć, jestem <strong className="text-[var(--color-text-primary)]">Adam</strong>. Z wykształcenia jestem... inżynierem informatyki, a biologię jeszcze niedawno kojarzyłem jedynie z tym, że jest trudna.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-5">
              W lipcu 2025 zdecydowałem, że praca informatyka nie jest czymś, w czym siebie widzę, dlatego postanowiłem spróbować moich sił w medycynie, do której od dłuższego czasu mnie ciągnęło.
              Miesiąc później wystartowałem z przygotowaniami <strong className="text-[var(--color-text-primary)] font-semibold">od absolutnego zera</strong>. Pomimo tego, że naukę biologii łączyłem z dyżurami na basenie jako ratownik i pisaniem pracy inżynierskiej, zaledwie po <strong className="text-neon-cyan font-bold">9 miesiącach</strong> przygotowań, w maju 2026r. napisałem arkusz maturalny z biologii rozszerzonej na <strong className="text-neon-green font-bold text-xl">90%</strong>, co otworzyło mi drzwi na <strong className="text-[var(--color-text-primary)] font-semibold">studia lekarskie</strong>.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-5">
              Moim celem jest pokazanie Ci, że biologia wcale nie musi być trudna. W przeszłości udzielałem korepetycji z matematyki i pomogłem wielu osobom osiągnąć satysfakcjonujące wyniki, więc doskonale wiem, jak tłumaczyć nawet najbardziej skomplikowane tematy <strong className="text-[var(--color-text-primary)] font-semibold">w logiczny i sensowny sposób w luźnej atmosferze</strong>.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
              Ze mną nie tylko zrozumiesz biologię, ale też opanujesz <strong className="text-[var(--color-text-primary)] font-semibold">techniki optymalnego uczenia się i skutecznych powtórek</strong>, które testowałem na własnej skórze.
            </p>
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

              {/* Progress illustration under the photo */}
              <div className="w-full mt-10 px-2 relative" aria-hidden="true">
                {/* Exponential Curve SVG */}
                <svg viewBox="0 0 300 90" className="w-full h-auto overflow-visible">
                  {/* Curve */}
                  <path
                    d="M 30 75 C 180 75, 230 65, 280 15"
                    fill="none"
                    stroke="var(--color-cyan)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(0,207,255,0.4)]"
                  />
                  {/* Labels */}
                  <text x="0" y="72" fill="var(--color-text-muted)" fontSize="16" fontWeight="700" className="font-mono">0%</text>
                  <text x="245" y="0" fill="var(--color-cyan)" fontSize="26" fontWeight="800" className="font-display drop-shadow-[0_0_10px_rgba(0,207,255,0.5)]">90%</text>
                </svg>
                
                {/* X-Axis for 9 months */}
                <div className="relative mt-2 flex justify-between items-start text-xs font-mono font-medium text-[var(--color-text-muted)] px-3">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-border)] via-[var(--color-border-subtle)] to-[var(--color-cyan-glow)] rounded-full" />
                  
                  {/* Start tick */}
                  <div className="relative pt-2">
                    <div className="absolute top-0 left-1/2 w-[2px] h-2 bg-[var(--color-border)] -translate-x-1/2" />
                    <span>Start</span>
                  </div>
                  
                  {/* Center label */}
                  <div className="relative pt-2 text-[var(--color-text-secondary)] font-semibold flex flex-col items-center">
                    <span className="italic opacity-80">9 miesięcy nauki</span>
                  </div>
                  
                  {/* End tick */}
                  <div className="relative pt-2">
                    <div className="absolute top-0 left-1/2 w-[2px] h-2 bg-[var(--color-cyan)] -translate-x-1/2 shadow-[0_0_6px_var(--color-cyan)]" />
                    <span className="text-[var(--color-cyan)]">Cel</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
