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
    question: "Dla kogo są te korepetycje?",
    answer: "Przede wszystkim dla maturzystów, którzy celują w studia medyczne i potrzebują bardzo wysokiego wyniku (80%+). Niezależnie czy zaczynasz od zera, czy chcesz tylko doszlifować umiejętności pod klucz CKE – metoda działa."
  },
  {
    question: "Czy zajęcia odbywają się online czy stacjonarnie?",
    answer: "Wszystkie lekcje odbywają się w 100% online za pośrednictwem wybranego komunikatora (np. Google Meet, Skype, Discord) z wykorzystaniem wirtualnej tablicy."
  },
  {
    question: "Ile lekcji w tygodniu polecasz?",
    answer: "Standardowo zalecam 1-2 lekcje w tygodniu po 60 minut. To optymalny czas, aby omówić nowy materiał i na bieżąco rozwiewać wątpliwości z Twojej samodzielnej pracy."
  },
  {
    question: "Czy dostanę materiały do nauki?",
    answer: "Tak! Do każdej lekcji dostajesz autorskie notatki, schematy i zestawy wyselekcjonowanych zadań maturalnych. Nie musisz kupować dziesiątek repetytoriów."
  }
];

export function FaqSection({ id }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-3xl mx-auto">
        <AnimateIn animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Częste <span className="text-neon-green">pytania</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Wszystko, co musisz wiedzieć przed rozpoczęciem współpracy.
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <AnimateIn key={i} animation="fade-up" delay={i * 100}>
                <div className={cn(
                  "glass rounded-[var(--radius-lg)] overflow-hidden transition-all duration-[var(--duration-normal)]",
                  isOpen ? "border-[var(--color-accent)] shadow-[var(--shadow-glow-accent)]" : "hover:border-[var(--color-border-subtle)]"
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
                        isOpen && "rotate-180 text-[var(--color-accent)]"
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
