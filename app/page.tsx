import { Navbar }          from "@/components/layout/Navbar";
import { HeroSection }     from "@/components/sections/HeroSection";
import { SectionDivider }  from "@/components/ui/SectionDivider";
import { AnimateIn }       from "@/components/ui/AnimateIn";

import { HistoriaSection }   from "@/components/sections/HistoriaSection";
import { MetodaSection }     from "@/components/sections/MetodaSection";
import { OfertaSection }     from "@/components/sections/OfertaSection";
import { CennikSection }     from "@/components/sections/CennikSection";
import { FaqSection }        from "@/components/sections/FaqSection";
import { RezerwacjaSection } from "@/components/sections/RezerwacjaSection";
import { KontaktSection }    from "@/components/sections/KontaktSection";

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

      </main>
    </>
  );
}
