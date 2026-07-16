import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { MonitorPlay, Key, Video, Gamepad2, MessageCircle, FileText } from "lucide-react";

interface OfertaSectionProps {
  id?: string;
}

const OFERTA = [
  {
    title: "Interaktywne lekcje online",
    description: "Zajęcia prowadzę za pomocą Discorda, gdzie udostępniam ekran z iPada. Tłumaczę dopóki nie zrozumiesz i angażuję Cię w proces, żeby lekcje nie były zwykłym, pasywnym słuchaniem.",
    icon: MonitorPlay,
    cols: "lg:col-span-2"
  },
  {
    title: "Rozbijanie klucza CKE",
    description: "Analizujemy schematy oceniania na czynniki pierwsze. Nauczysz się pisać odpowiedzi idealnie pod klucz.",
    icon: Key,
    cols: "lg:col-span-2"
  },
  {
    title: "Nagrywane spotkania",
    description: "Za Twoją zgodą nagrywam lekcje. Mając do nich dostęp, możesz wrócić do najtrudniejszych zagadnień w dowolnej chwili.",
    icon: Video,
    cols: "lg:col-span-2"
  },
  {
    title: "Autorskie notatki",
    description: "Zapomnij o dziesiątkach repetytoriów. Otrzymujesz moje autorskie notatki i schematy, wyselekcjonowane prosto pod wymagania maturalne.",
    icon: FileText,
    cols: "lg:col-span-2"
  },
  {
    title: "Quizy i fiszki po lekcji",
    description: "Po każdych zajęciach otrzymujesz wyselekcjonowany quiz sprawdzający wiedzę oraz interaktywne fiszki do błyskawicznych powtórek.",
    icon: Gamepad2,
    cols: "lg:col-span-2"
  },
  {
    title: "Kontakt (Discord / Messenger)",
    description: "Zaciąłeś się przy trudnym zadaniu? Piszesz do mnie i rozbrajamy problem od ręki, bez czekania na kolejną lekcję.",
    icon: MessageCircle,
    cols: "lg:col-span-2"
  }
];

export function OfertaSection({ id }: OfertaSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <AnimateIn animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Co wchodzi w skład <span className="text-neon-cyan">współpracy?</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Moim celem nie jest odklepanie godziny i wzięcie pieniędzy. Wybierając te zajęcia, zyskujesz pełen ekosystem nauki, który ma dowieźć Cię do upragnionego wyniku.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {OFERTA.map((item, i) => (
            <AnimateIn 
              key={i} 
              animation="fade-up" 
              delay={i * 100} 
              className={cn("h-full", item.cols)}
            >
              <div className="glass h-full rounded-[var(--radius-xl)] p-8 border border-[var(--color-border-subtle)] hover:border-[var(--color-cyan)] transition-colors duration-500 group relative overflow-hidden">
                {/* Subtle hover gradient inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cyan-muted)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-glow-cyan)] text-[var(--color-cyan)]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-bold font-display text-[var(--color-text-primary)] text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
