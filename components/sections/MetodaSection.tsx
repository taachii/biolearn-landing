import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Network, SearchCode, Cpu } from "lucide-react";

interface MetodaSectionProps {
  id?: string;
}

const FEATURES = [
  {
    id: "system",
    title: "Myślenie systemowe",
    description: "Nie uczymy się suchych definicji. Tworzymy mapy myśli i szukamy powiązań między procesami, żebyś rozumiał zjawiska biologiczne jako jedną, spójną całość.",
    icon: Network,
  },
  {
    id: "klucz",
    title: "Rozbijanie klucza",
    description: "Analizujemy schematy oceniania CKE na czynniki pierwsze. Nauczysz się jak formułować wnioski i pisać odpowiedzi, które w 100% wpasowują się w klucz egzaminatora.",
    icon: SearchCode,
  },
  {
    id: "analityka",
    title: "Podejście analityczne",
    description: "Biologia to nauka ścisła. Do rozwiązywania zadań z genetyki i metabolizmu użyjemy logicznego dedukowania zamiast prób przypomnienia sobie treści podręcznika.",
    icon: Cpu,
  },
];

export function MetodaSection({ id }: MetodaSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12">
      <div className="relative max-w-7xl mx-auto">
        <AnimateIn animation="fade-up" className="text-center mb-16 sm:mb-24">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Metoda <span className="text-neon-cyan">zamiast</span> zakuwania
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Gdybym miał polegać na tradycyjnej edukacji, nigdy nie doszedłbym do 100. centyla.
            Mój proces bazuje na 3 twardych filarach.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateIn key={feature.id} animation="fade-up" delay={i * 150} className="h-full">
                <div className={cn(
                  "glass rounded-[var(--radius-2xl)] p-8 h-full flex flex-col items-start group",
                  "transition-all duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]",
                  "hover:-translate-y-2 hover:shadow-[var(--shadow-glow-cyan)] hover:border-[rgba(0,207,255,0.20)]"
                )}>
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] mb-6",
                    "bg-[var(--color-cyan-muted)] text-[var(--color-cyan)]",
                    "group-hover:scale-110 transition-transform duration-[var(--duration-normal)]"
                  )}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
