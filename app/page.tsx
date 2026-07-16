import { Navbar }          from "@/components/layout/Navbar";
import { HeroSection }     from "@/components/sections/HeroSection";
import { SectionDivider }  from "@/components/ui/SectionDivider";

import { KimJestemSection }  from "@/components/sections/KimJestemSection";
import { HistoriaSection }   from "@/components/sections/HistoriaSection";
import { MetodaSection }     from "@/components/sections/MetodaSection";
import { OfertaSection }     from "@/components/sections/OfertaSection";
import { CennikSection }     from "@/components/sections/CennikSection";
import { FaqSection }        from "@/components/sections/FaqSection";
import { RezerwacjaSection } from "@/components/sections/RezerwacjaSection";
import { KontaktSection }    from "@/components/sections/KontaktSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Kim jestem? ─────────────────────────────────── */}
        <SectionDivider variant="wave" />
        <KimJestemSection  id="kim-jestem" />

        {/* ── Moja historia ───────────────────────────────── */}
        <SectionDivider variant="diagonal" flip />
        <HistoriaSection   id="historia"  />

        <SectionDivider variant="curve" />
        <MetodaSection     id="metoda"    />

        <SectionDivider variant="wave" flip />
        <OfertaSection     id="oferta"    />

        <SectionDivider variant="diagonal" />
        <CennikSection     id="cennik"    />

        <SectionDivider variant="curve" flip />
        <FaqSection        id="faq"       />

        <SectionDivider variant="wave" />
        <RezerwacjaSection id="rezerwacja"/>

        <KontaktSection    id="kontakt"   />

      </main>
    </>
  );
}
