import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CennikSectionProps {
  id?: string;
}

export function CennikSection({ id }: CennikSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-4xl mx-auto text-center">
        <AnimateIn animation="fade-up" className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Prosty i <span className="text-neon-cyan">przejrzysty</span> cennik
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Żadnych ukrytych opłat, kruczków i długoterminowych umów.
          </p>
        </AnimateIn>

        <AnimateIn animation="zoom-in" delay={150}>
          <div className={cn(
            "glass max-w-md mx-auto rounded-[var(--radius-2xl)] overflow-hidden",
            "border border-[var(--color-border)] shadow-[var(--shadow-card)]",
            "relative group"
          )}>
            {/* Highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cyan)]" />

            <div className="p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold mb-2">Lekcja Indywidualna</h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-6">Pełne 60 minut zajęć 1:1 online</p>

              <div className="flex items-end justify-center gap-1 mb-8">
                <span className="font-display text-5xl font-bold text-[var(--color-text-primary)]">
                  [100]
                </span>
                <span className="text-xl text-[var(--color-text-secondary)] font-medium mb-1">
                  PLN
                </span>
                <span className="text-sm text-[var(--color-text-muted)] ml-1 mb-2">/h</span>
              </div>

              <ul className="flex flex-col gap-4 text-left mb-8">
                {[
                  "Indywidualne spotkanie online (Skype/Meet)",
                  "Dostęp do autorskich materiałów",
                  "Wsparcie na Discordzie w trakcie tygodnia",
                  "Zadania domowe z odpowiedziami"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => document.getElementById("rezerwacja")?.scrollIntoView({ behavior: "smooth" })}
              >
                Umów lekcję próbną
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
