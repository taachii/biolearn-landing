import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CennikSectionProps {
  id?: string;
}

const PACKAGES = [
  {
    name: "Pogotowie ratunkowe 1:1",
    price: "100",
    period: "/ lekcja",
    description: "Idealna opcja przed sprawdzianem. Ty wybierasz temat, a my skupiamy się na rozwiązaniu bieżącego problemu.",
    features: [
      "Pełne 60 minut zajęć 1:1 online",
      "Omawiamy z góry wybrany przez Ciebie temat",
      "Uzupełnianie konkretnych braków",
      "Brak wiążącego harmonogramu"
    ],
    buttonText: "Zarezerwuj termin",
    isPopular: false
  },
  {
    name: "Grupa Maturalna 2027",
    price: "200",
    period: "/ miesiąc",
    description: "Kameralna grupa (3-4 osoby). Przerabiamy materiał od A do Z według mojego rygorystycznego harmonogramu.",
    features: [
      "4 spotkania w miesiącu o stałej porze",
      "Pełen ekosystem (quizy, fiszki, notatki)",
      "Nauka rozbijania klucza CKE",
      "Wzajemna motywacja i nauka w grupie"
    ],
    buttonText: "Dołącz do grupy",
    isPopular: true
  },
  {
    name: "Prowadzenie Indywidualne",
    price: "320",
    period: "/ miesiąc",
    description: "Ekskluzywne prowadzenie 1:1 do samej matury. Ja narzucam tempo i układam plan, a Ty po prostu robisz postępy.",
    features: [
      "4 spotkania 1:1 w miesiącu o stałej porze",
      "Indywidualnie skrojony plan nauki",
      "Pełen ekosystem (quizy, fiszki, notatki)",
      "Priorytetowe wsparcie na Discordzie 24/7"
    ],
    buttonText: "Aplikuj o miejsce",
    isPopular: false
  }
];

export function CennikSection({ id }: CennikSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12">
      <div className="relative max-w-6xl mx-auto text-center">
        <AnimateIn animation="fade-up" className="mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Prosty i <span className="text-neon-green">przejrzysty</span> cennik
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Wybierz model współpracy, który najlepiej odpowiada Twoim potrzebom. Bez ukrytych opłat i haczyków.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch text-left">
          {PACKAGES.map((pkg, i) => (
            <AnimateIn key={i} animation="fade-up" delay={i * 150} className="h-full">
              <div className={cn(
                "glass h-full flex flex-col rounded-[var(--radius-2xl)] overflow-hidden transition-all duration-500",
                pkg.isPopular 
                  ? "border-[#00FF66] shadow-[0_0_30px_rgba(0,255,102,0.15)] relative scale-105 z-10 md:-translate-y-4" 
                  : "border-[var(--color-border-subtle)] hover:border-[#00FF66]/50"
              )}>
                
                {pkg.isPopular && (
                  <div className="absolute top-0 left-0 right-0 py-1.5 bg-[#00FF66] text-black text-xs font-bold text-center uppercase tracking-widest">
                    Najczęściej wybierane
                  </div>
                )}
                
                <div className={cn("p-8 sm:p-10 flex flex-col flex-grow", pkg.isPopular ? "pt-12 sm:pt-14" : "")}>
                  <h3 className="font-display text-2xl font-bold mb-2 text-[var(--color-text-primary)]">{pkg.name}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6 h-16">{pkg.description}</p>

                  <div className="flex items-end gap-1 mb-8">
                    <span className="font-display text-5xl font-bold text-[var(--color-text-primary)]">
                      {pkg.price}
                    </span>
                    <span className="text-xl text-[var(--color-text-secondary)] font-medium mb-1">
                      PLN
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)] ml-1 mb-2">{pkg.period}</span>
                  </div>

                  <ul className="flex flex-col gap-4 mb-10 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-[#00FF66] shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.isPopular ? "primary" : "secondary"}
                    size="lg"
                    className={cn("w-full mt-auto", pkg.isPopular ? "bg-[#00FF66] text-black hover:bg-[#00cc52] shadow-[0_0_20px_rgba(0,255,102,0.3)] border-transparent" : "")}
                    onClick={() => document.getElementById("rezerwacja")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
