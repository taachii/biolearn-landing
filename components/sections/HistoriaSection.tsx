import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BookOpen, BrainCircuit, Target } from "lucide-react";

interface HistoriaSectionProps {
  id?: string;
}

const TIMELINE = [
  {
    id: "start",
    year: "Strategia",
    title: "Optymalizacja nauki",
    description:
      "Od początku wiedziałem, że ilość materiału do opanowania z tego przedmiotu jest wręcz kolosalna, dlatego byłem świadomy tego, że do nauki muszę podejść z głową i odpowiednią strategią. Wraz z upływem kolejnych tygodni, zacząłem zauważać jakie metody nauki się sprawdzają, a które tylko niepotrzebnie marnują mój cenny czas, dzięki czemu byłem w stanie cały czas optymalizować sposób przygotowań.",
    icon: BookOpen,
  },
  {
    id: "proces",
    year: "Zrozumienie",
    title: "Ciekawość zamiast regułek",
    description:
      "Nauka na pamięć nigdy nie była w moim stylu, a uczenie się o jakimś zjawisku na zasadzie X powoduje Y \"bo tak\" absolutnie nie wchodziła u mnie w grę. Chciałem wiedzieć i rozumieć jak najwięcej, dlatego dociekałem i wchodziłem coraz głębiej w temat. Uważam, że to właśnie ta ciekawość i chęć zrozumienia biologii jako całości najbardziej przyczyniła się do mojego wyniku.",
    icon: BrainCircuit,
  },
  {
    id: "wynik",
    year: "Pamięć vs Logika",
    title: "Interakcje, nie tylko nazwy",
    description:
      "Nie twierdzę, że w biologii nie ma pamięciówki, bo owszem - jest. Nie da się przeskoczyć nauki nazewnictwa poszczególnych struktur u roślin, czy hormonów u człowieka, ale jest ogromna różnica między wiedzą, że coś się jakoś nazywa, a wiedzą w jaki sposób \"to coś\" wchodzi w interakcję z innymi \"cosiami\" :D",
    icon: Target,
  },
];

export function HistoriaSection({ id }: HistoriaSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12 overflow-hidden">
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
