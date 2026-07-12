import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BookOpen, BrainCircuit, Target } from "lucide-react";

interface HistoriaSectionProps {
  id?: string;
}

const TIMELINE = [
  {
    id: "start",
    year: "Sierpień 2025",
    title: "Rozpoczęcie nauki",
    description:
      "Nie miałem wcześniej pojęcia o biologii. Wiedziałem tylko, że muszę się jej nauczyć od podstaw i osiągnąć topowy wynik. Zrozumiałem, że standardowe zakuwanie z podręczników będzie bezcelowe.",
    icon: BookOpen,
  },
  {
    id: "proces",
    year: "Styczeń 2026",
    title: "Przejście na arkusze",
    description:
      "Zakończyłem przerabianie teorii. Zamiast uczyć się definicji na pamięć, zacząłem szukać połączeń przyczynowo-skutkowych. Odkryłem, jak czytać klucz maturalny i trenowałem wyłącznie na autentycznych zadaniach CKE.",
    icon: BrainCircuit,
  },
  {
    id: "wynik",
    year: "Lipiec 2026",
    title: "Rekrutacja na medycynę",
    description:
      "Z 90% i 100. centylem na świadectwie maturalnym, drzwi na uczelnie medyczne stanęły otworem. Dowiodłem, że zoptymalizowana praca własna daje wielokrotnie lepsze efekty niż lata bezmyślnego kucia.",
    icon: Target,
  },
];

export function HistoriaSection({ id }: HistoriaSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square"
        style={{
          background: "radial-gradient(circle, var(--color-accent-muted) 0%, transparent 60%)",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <AnimateIn animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Jak to <span className="text-neon-green">osiągnąłem?</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Moja droga nie była standardowa. Zamiast spędzać lata na ślęczeniu nad książkami, 
            podszedłem do tematu analitycznie.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Vertical line connecting timeline items */}
          <div
            className="absolute left-[27px] sm:left-1/2 top-4 bottom-4 w-px bg-[var(--color-border-subtle)] sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-12 sm:gap-16">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <li key={item.id} className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 group">
                  
                  {/* Left side (Desktop) */}
                  <div className={cn(
                    "hidden sm:block flex-1 text-right",
                    !isEven && "sm:order-3 sm:text-left"
                  )}>
                    <AnimateIn animation={isEven ? "fade-right" : "fade-left"} delay={index * 150}>
                      <span className="font-mono text-[var(--color-accent)] font-semibold tracking-widest uppercase text-sm">
                        {item.year}
                      </span>
                    </AnimateIn>
                  </div>

                  {/* Node / Icon */}
                  <div className={cn(
                    "relative z-10 flex items-center justify-center w-14 h-14 rounded-full shrink-0",
                    "glass border-2 border-[var(--color-border)] text-[var(--color-text-muted)]",
                    "transition-colors duration-[var(--duration-normal)]",
                    "group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:shadow-[var(--shadow-glow-accent)]",
                    !isEven && "sm:order-2"
                  )}>
                    <Icon size={24} />
                  </div>

                  {/* Right side (Mobile + Desktop) */}
                  <div className={cn(
                    "flex-1 w-full pt-1 sm:pt-0",
                    !isEven && "sm:order-1 sm:text-right"
                  )}>
                    <AnimateIn animation={isEven ? "fade-left" : "fade-right"} delay={index * 150}>
                      <span className="sm:hidden font-mono text-[var(--color-accent)] font-semibold tracking-widest uppercase text-xs block mb-2">
                        {item.year}
                      </span>
                      <div className="glass rounded-[var(--radius-xl)] p-6 hover:border-[var(--color-border-subtle)] transition-colors">
                        <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </AnimateIn>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
