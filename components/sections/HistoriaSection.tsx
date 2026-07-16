"use client";

import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LineChart, BrainCircuit, Waypoints } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
    icon: LineChart,
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
    icon: Waypoints,
  },
];

function TimelineItem({ item, index }: { item: typeof TIMELINE[0], index: number }) {
  const ref = useRef(null);
  // Using -45% top and bottom margins creates a small 10% trigger zone in the exact middle of the screen.
  // Because the timeline items are tall and have gaps, only one item can be in this 10% zone at a time, ensuring mutual exclusivity.
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <li ref={ref} className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 group">
      
      {/* Left side (Desktop) */}
      <div className={cn(
        "hidden sm:block flex-1 text-right",
        !isEven && "sm:order-3 sm:text-left"
      )}>
        <AnimateIn animation={isEven ? "fade-right" : "fade-left"} delay={index * 150}>
          <span className={cn(
            "font-mono font-semibold tracking-widest uppercase text-sm transition-colors duration-500",
            isInView ? "text-[var(--color-accent)] drop-shadow-[0_0_8px_var(--color-accent)]" : "text-[var(--color-text-muted)] opacity-50"
          )}>
            {item.year}
          </span>
        </AnimateIn>
      </div>

      {/* Node / Icon */}
      <div className={cn(
        "relative z-10 flex items-center justify-center w-14 h-14 rounded-full shrink-0",
        "glass border-2 transition-all duration-500",
        isInView 
          ? "border-[var(--color-accent)] text-[var(--color-accent)] shadow-[var(--shadow-glow-accent)] scale-110" 
          : "border-[var(--color-border)] text-[var(--color-text-muted)] scale-100",
        !isEven && "sm:order-2"
      )}>
        <Icon size={24} className="transition-transform duration-500" />
      </div>

      {/* Right side (Mobile + Desktop) */}
      <div className={cn(
        "flex-1 w-full pt-1 sm:pt-0",
        !isEven && "sm:order-1 sm:text-right"
      )}>
        <AnimateIn animation={isEven ? "fade-left" : "fade-right"} delay={index * 150}>
          <span className={cn(
            "sm:hidden font-mono font-semibold tracking-widest uppercase text-xs block mb-2 transition-colors duration-500",
            isInView ? "text-[var(--color-accent)] drop-shadow-[0_0_8px_var(--color-accent)]" : "text-[var(--color-text-muted)] opacity-50"
          )}>
            {item.year}
          </span>
          <div className={cn(
            "glass rounded-[var(--radius-xl)] p-6 transition-all duration-500",
            isInView ? "border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.03)] shadow-lg" : "border-transparent opacity-80"
          )}>
            <h3 className={cn("font-display text-xl font-bold mb-3 transition-colors duration-500", isInView ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]")}>{item.title}</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        </AnimateIn>
      </div>
    </li>
  );
}

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
            {TIMELINE.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
