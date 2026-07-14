import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CheckCircle2, MessageCircle, FileText, BarChart } from "lucide-react";

interface OfertaSectionProps {
  id?: string;
}

const OFERTA = [
  {
    title: "Indywidualne lekcje 1:1 online",
    description: "Pełne 60 minut skupione w 100% na Twoich brakach. Tłumaczę do skutku, używając metafor i schematów.",
    icon: CheckCircle2,
  },
  {
    title: "Materiały z laboratorium",
    description: "Dostajesz ode mnie autorskie notatki, schematy i fiszki, wyselekcjonowane specjalnie pod klucz CKE.",
    icon: FileText,
  },
  {
    title: "Ciągły kontakt na Discord/Messenger",
    description: "Zaciąłeś się przy zadaniu domowym? Piszesz do mnie i rozbrajamy problem razem, bez czekania na kolejną lekcję.",
    icon: MessageCircle,
  },
  {
    title: "Próbne diagnozy maturalne",
    description: "Regularne sprawdzanie postępów na autorskich, trudnych arkuszach, żeby na maturze nic Cię nie zaskoczyło.",
    icon: BarChart,
  },
];

export function OfertaSection({ id }: OfertaSectionProps) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-8 sm:px-10 lg:px-12 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <div>
            <AnimateIn animation="fade-right">
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Co wchodzi w skład <br />
                <span className="text-neon-green">współpracy?</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                Moim celem nie jest odklepanie godziny i wzięcie pieniędzy. Zależy mi na tym,
                żebyś zrozumiał materiał i osiągnął wymarzony wynik na uczelnię medyczną.
              </p>
              
              <ul className="flex flex-col gap-6">
                {OFERTA.map((item, i) => (
                  <AnimateIn key={i} animation="fade-right" delay={i * 100 + 200}>
                    <li className="flex gap-4 group">
                      <div className="shrink-0 mt-1">
                        <item.icon size={24} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--color-text-primary)] text-lg mb-1">{item.title}</h4>
                        <p className="text-[var(--color-text-secondary)] leading-snug">{item.description}</p>
                      </div>
                    </li>
                  </AnimateIn>
                ))}
              </ul>
            </AnimateIn>
          </div>

          {/* Right: Visual / Card */}
          <AnimateIn animation="fade-left" delay={300} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-cyan)] rounded-[var(--radius-2xl)] blur-2xl opacity-20" />
            <div className="relative glass rounded-[var(--radius-2xl)] p-8 sm:p-10 border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent-muted)] flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-[var(--color-accent)]">🔬</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Pełen ekosystem nauki</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Wybierając zajęcia, nie płacisz za czas. Płacisz za transformację z ucznia zagubionego w gąszczu informacji w eksperta rozumiejącego biologię na poziomie medycznym.
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-bg-card)] bg-[var(--color-bg-elevated)] flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[var(--color-bg-card)] bg-[var(--color-bg-elevated)] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)]">+90%</span>
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
