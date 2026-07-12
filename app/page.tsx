import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

/**
 * app/page.tsx — Landing Page
 *
 * Sections are imported here and composed in order.
 * Adding a new section = import + drop in the correct spot.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />

        {/*
          ── UPCOMING SECTIONS (Etap 1) ──────────────────────
          Odkomentuj i zaimplementuj kolejno:

          <HistoriaSection   id="historia"  />
          <MetodaSection     id="metoda"    />
          <OfertaSection     id="oferta"    />
          <CennikSection     id="cennik"    />
          <FaqSection        id="faq"       />
          <RezerwacjaSection id="rezerwacja"/>
          <KontaktSection    id="kontakt"   />
        */}

        {/* Placeholder sections for IntersectionObserver targets */}
        <div id="historia"   className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: Moja Historia (wkrótce) —
        </div>
        <div id="metoda"     className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: Metoda (wkrótce) —
        </div>
        <div id="oferta"     className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: Oferta (wkrótce) —
        </div>
        <div id="cennik"     className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: Cennik (wkrótce) —
        </div>
        <div id="faq"        className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: FAQ (wkrótce) —
        </div>
        <div id="rezerwacja" className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: Rezerwacja / Calendly (wkrótce) —
        </div>
        <div id="kontakt"    className="h-screen flex items-center justify-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border-subtle)]">
          — Sekcja: Kontakt (wkrótce) —
        </div>
      </main>
    </>
  );
}
