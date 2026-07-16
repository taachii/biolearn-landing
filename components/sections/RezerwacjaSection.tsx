"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";

interface RezerwacjaSectionProps {
  id?: string;
}

export function RezerwacjaSection({ id }: RezerwacjaSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12 overflow-hidden">
      {/* Ambient flares removed */}

      <div className="relative max-w-3xl mx-auto text-center glass rounded-[var(--radius-2xl)] p-8 sm:p-16 border border-[var(--color-border)] shadow-[var(--shadow-card)]">
        <AnimateIn animation="zoom-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-accent)] mb-6 shadow-[var(--shadow-glow-accent)]">
            <Calendar size={32} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Gotowy na <span className="text-neon-green">wspólną naukę?</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Wybierz formę zajęć, która Cię interesuje, i zrób pierwszy krok do maturalnego sukcesu. Ilość miejsc w grupach jest ograniczona.
          </p>
          
          <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full text-left">
            {/* Opcja 1: Pakiety */}
            <div className="bg-[var(--color-bg-base)] rounded-[var(--radius-lg)] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[var(--color-border)] hover:border-[#00FF66]/50 transition-colors">
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] text-lg">Zapisy do grupy lub na zajęcia 1:1</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">Napisz lub zadzwoń. Ustalimy wspólnie dogodny, stały termin, który zostanie przypisany do Ciebie aż do matury.</p>
              </div>
              <a href="mailto:naukazadamem@gmail.com" className="w-full sm:w-auto shrink-0">
                <Button variant="primary" className="w-full">Napisz e-mail</Button>
              </a>
            </div>

            {/* Opcja 2: Pogotowie */}
            <div className="bg-[var(--color-bg-base)] rounded-[var(--radius-lg)] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[var(--color-border)] hover:border-[#00FF66]/50 transition-colors">
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] text-lg">Pogotowie ratunkowe 1:1</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">Potrzebujesz jednorazowej pomocy przed sprawdzianem? Wybierz wolny termin z kalendarza.</p>
              </div>
              <Button variant="secondary" className="w-full sm:w-auto shrink-0">
                Otwórz Cal.com
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
