"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ChevronDown } from "lucide-react";

interface FaqSectionProps {
  id?: string;
}

const FAQS = [
  {
    question: "Czy muszę kupować własne repetytoria i podręczniki?",
    answer: "Nie. Otrzymujesz ode mnie kompletny ekosystem nauki: autorskie notatki, fiszki i wyselekcjonowane schematy. Wystarczy Ci dostęp do internetu, chęci do nauki i Discord."
  },
  {
    question: "Jak od strony technicznej wyglądają zajęcia?",
    answer: "Łączymy się poprzez Discord (lub inny komunikator na Twoje życzenie). Udostępniam ekran ze swojego iPada, z którego na bazie autorskich notatek omawiam dany temat. Pod koniec zajęć otrzymujesz dostęp do dedykowanego quizu i fiszek stworzonych specjalnie do przerabianego materiału."
  },
  {
    question: "Jak zapisać się do grupy lub na Mentoring?",
    answer: "Zgłoszenia na pakiety miesięczne przyjmuję mailowo lub telefonicznie (dane znajdziesz w sekcji Kontakt). Ustalimy wspólnie stały, dogodny termin, który zostanie z Tobą przypisany aż do samej matury."
  },
  {
    question: "Co w przypadku, gdy opuszczę zajęcia w grupie?",
    answer: "Nic nie tracisz! Każde zajęcia (za zgodą grupy) są nagrywane i lądują na naszym prywatnym kanale. Otrzymujesz również komplet autorskich notatek i fiszek z danej lekcji, więc możesz nadrobić materiał w dowolnym momencie."
  },
  {
    question: "Jak wyglądają płatności i odwoływanie zajęć?",
    answer: "Pakiety miesięczne opłacane są z góry (BLIK / Przelew). Zajęcia typu \"Pogotowie 1:1\" opłacasz przy rezerwacji terminu. Pojedyncze spotkania 1:1 możesz bezpłatnie odwołać lub przenieść maksymalnie do 24 godzin przed ich startem. Szanujmy swój czas!"
  }
];

export function FaqSection({ id }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12">
      <div className="relative max-w-3xl mx-auto">
        <AnimateIn animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Zanim <span className="text-neon-cyan">zaczniesz</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Najważniejsze informacje o formie zajęć, materiałach i logistyce.
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <AnimateIn key={i} animation="fade-up" delay={i * 100}>
                <div className={cn(
                  "glass rounded-[var(--radius-lg)] overflow-hidden transition-all duration-[var(--duration-normal)]",
                  isOpen ? "border-[var(--color-cyan)] shadow-[var(--shadow-glow-cyan)]" : "hover:border-[var(--color-border-subtle)]"
                )}>
                  <button
                    type="button"
                    onClick={() => toggleOpen(i)}
                    className="flex items-center justify-between w-full p-5 sm:p-6 text-left focus-ring"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[var(--color-text-primary)] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "shrink-0 text-[var(--color-text-muted)] transition-transform duration-[var(--duration-normal)]",
                        isOpen && "rotate-180 text-[var(--color-cyan)]"
                      )}
                      size={20}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-[var(--duration-normal)]",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="px-5 sm:px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
