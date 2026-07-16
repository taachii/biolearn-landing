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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-cyan)] mb-6 shadow-[var(--shadow-glow-cyan)]">
            <Calendar size={32} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Zrób <span className="text-neon-cyan">pierwszy krok</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            Zarezerwuj darmową 15-minutową rozmowę zapoznawczą. Zobaczymy na jakim jesteś etapie, omówimy Twoje cele i sprawdzimy, czy moja metoda jest dla Ciebie.
          </p>
          
          {/* Placeholder for Calendly or a simple button */}
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            <Button size="lg" variant="primary" className="shadow-[var(--shadow-glow-cyan)] border-transparent w-full md:w-auto">
              Zarezerwuj termin w Calendly
            </Button>
            <Button size="lg" variant="secondary" className="w-full md:w-auto" onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}>
              Zadaj pytanie e-mailem
            </Button>
          </div>
          
          <p className="text-xs text-[var(--color-text-muted)] mt-6">
            Liczba miejsc w miesiącu jest ograniczona. Decyduje kolejność zgłoszeń.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
