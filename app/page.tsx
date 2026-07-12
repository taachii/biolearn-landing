import { Navbar }          from "@/components/layout/Navbar";
import { HeroSection }     from "@/components/sections/HeroSection";
import { SectionDivider }  from "@/components/ui/SectionDivider";
import { AnimateIn }       from "@/components/ui/AnimateIn";

/**
 * app/page.tsx — Landing Page root
 *
 * Sections are imported and composed here in order.
 * To add a section:
 *   1. Create components/sections/XxxSection.tsx
 *   2. Import it here
 *   3. Drop it in the correct spot with a <SectionDivider /> before it
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* ── Etap 1: Hero ──────────────────────────────── */}
        <HeroSection />

        {/* ── UPCOMING SECTIONS ─────────────────────────
            Odkomentuj i zaimplementuj kolejno.
            Każda sekcja poprzedzona SectionDivider.

          <SectionDivider variant="wave" />
          <HistoriaSection   id="historia"  />

          <SectionDivider variant="diagonal" flip />
          <MetodaSection     id="metoda"    />

          <SectionDivider variant="curve" />
          <OfertaSection     id="oferta"    />

          <SectionDivider variant="wave" flip />
          <CennikSection     id="cennik"    />

          <SectionDivider variant="diagonal" />
          <FaqSection        id="faq"       />

          <SectionDivider variant="curve" flip />
          <RezerwacjaSection id="rezerwacja"/>

          <SectionDivider variant="wave" />
          <KontaktSection    id="kontakt"   />
        ─────────────────────────────────────────────── */}

        {/* ── Placeholder sections ─────────────────────── */}
        {(
          [
            { id: "historia",   label: "Moja Historia"                 },
            { id: "metoda",     label: "Metoda"                        },
            { id: "oferta",     label: "Oferta"                        },
            { id: "cennik",     label: "Cennik"                        },
            { id: "faq",        label: "FAQ"                           },
            { id: "rezerwacja", label: "Rezerwacja / Calendly"         },
            { id: "kontakt",    label: "Kontakt"                       },
          ] as const
        ).map(({ id, label }, i) => (
          <div key={id}>
            <SectionDivider
              variant={["wave", "diagonal", "curve"][i % 3] as "wave" | "diagonal" | "curve"}
              flip={i % 2 === 1}
            />
            <AnimateIn animation="fade-up">
              <section
                id={id}
                aria-label={`Sekcja: ${label} (wkrótce)`}
                className="min-h-[60vh] flex items-center justify-center"
              >
                <p className="text-sm text-[var(--color-text-muted)] tracking-widest uppercase">
                  — Sekcja: {label} (wkrótce) —
                </p>
              </section>
            </AnimateIn>
          </div>
        ))}
      </main>
    </>
  );
}
