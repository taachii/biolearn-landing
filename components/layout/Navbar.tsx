"use client";

/**
 * components/layout/Navbar.tsx
 *
 * Sticky navigation bar with:
 * - Glass morphism backdrop (becomes opaque on scroll)
 * - Smooth active-section highlighting via IntersectionObserver
 * - Mobile hamburger drawer
 * - Accessible keyboard navigation
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

/* ── Nav links ──────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Kim jestem?",    href: "#kim-jestem"   },
  { label: "Moja historia", href: "#historia"      },
  { label: "Oferta",        href: "#oferta"        },
  { label: "Cennik",        href: "#cennik"        },
  { label: "FAQ",           href: "#faq"           },
  { label: "Kontakt",       href: "#kontakt"       },
] as const;

/* ── Helpers ────────────────────────────────────────────── */
const getSectionTheme = (id: string) => {
  if (id === "kim-jestem" || id === "oferta" || id === "faq") return "cyan";
  return "green";
};

/* ── Component ──────────────────────────────────────────── */
export function Navbar() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState<string>("");
  const [isAtBottom,     setIsAtBottom]     = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  /* ── Scroll detection ─────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Clear active section when near the very top (hero area)
      if (window.scrollY < 100) {
        setActiveSection("");
      }
      
      // Detect if we are at the bottom of the page
      setIsAtBottom(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Active section via IntersectionObserver ──────────── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close mobile menu on outside click ──────────────── */
  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [mobileOpen]);

  /* ── Trap scroll when mobile menu is open ────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Smooth scroll helper ─────────────────────────────── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      {/* ── Main bar ──────────────────────────────────────── */}
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "glass border-b border-[var(--color-border)]",
          "transition-all duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        <nav
          aria-label="Główna nawigacja"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        >
          {/* ── Logo ───────────────────────────────────────── */}
          <a
            href="#"
            aria-label="Strona główna — Korepetytor Biologii"
            className="flex items-center group focus-ring rounded-[var(--radius-md)]"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-display font-bold text-2xl tracking-tight text-[var(--color-text-primary)] leading-none hidden sm:block">
              biolka<span className="text-neon-green">z</span>adamem
            </span>
          </a>

          {/* ── Desktop links ──────────────────────────────── */}
          <ul
            role="list"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              let isActive = activeSection === sectionId;
              
              if (isAtBottom) {
                isActive = sectionId === "kontakt";
              }

              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      "relative px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium",
                      "transition-colors duration-[var(--duration-fast)]",
                      "focus-ring animated-underline",
                      getSectionTheme(sectionId) === "cyan" ? "after:!bg-[var(--color-cyan)]" : "",
                      isActive
                        ? getSectionTheme(sectionId) === "cyan" ? "text-neon-cyan" : "text-neon-green"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    )}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="md"
              variant="primary"
              onClick={() =>
                document
                  .getElementById("rezerwacja")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Zapisz się na lekcję
            </Button>
          </div>

          {/* ── Mobile hamburger ───────────────────────────── */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "flex items-center justify-center w-10 h-10",
                "rounded-[var(--radius-md)] border border-[var(--color-border)]",
                "bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]",
                "hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]",
                "transition-all duration-[var(--duration-fast)] focus-ring"
              )}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu backdrop ──────────────────────────── */}
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden",
          "transition-opacity duration-[var(--duration-normal)]",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile menu drawer ────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-label="Menu nawigacyjne"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[min(80vw,320px)] lg:hidden",
          "flex flex-col",
          "glass border-l border-[var(--color-border)]",
          "transform transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border-subtle)]">
          <span className="font-display font-bold text-xl tracking-tight text-[var(--color-text-primary)]">
            biolka<span className="text-neon-green">z</span>adamem
          </span>
          <button
            type="button"
            aria-label="Zamknij menu"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center justify-center w-8 h-8",
              "rounded-[var(--radius-md)] text-[var(--color-text-muted)]",
              "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]",
              "transition-colors duration-[var(--duration-fast)] focus-ring"
            )}
          >
            <X size={16} />
          </button>
        </div>

        {/* Links */}
        <nav
          aria-label="Menu mobilne"
          className="flex-1 overflow-y-auto px-4 py-6"
        >
          <ul role="list" className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              let isActive = activeSection === sectionId;
              
              if (isAtBottom) {
                isActive = sectionId === "kontakt";
              }

              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3",
                      "rounded-[var(--radius-md)] text-sm font-medium",
                      "transition-all duration-[var(--duration-fast)] focus-ring",
                      isActive
                        ? getSectionTheme(sectionId) === "cyan"
                          ? "bg-[var(--color-cyan-muted)] text-[var(--color-cyan)] border border-[var(--color-cyan-glow)]"
                          : "bg-[var(--color-accent-muted)] text-[var(--color-accent)] border border-[var(--color-accent-glow)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]"
                    )}
                  >
                    {isActive && (
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0",
                        getSectionTheme(sectionId) === "cyan" ? "bg-[var(--color-cyan)] shadow-[0_0_5px_var(--color-cyan)]" : "bg-[var(--color-accent)] shadow-[0_0_5px_var(--color-accent)]"
                      )} />
                    )}
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div className="px-4 pb-6 pt-4 border-t border-[var(--color-border-subtle)]">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => {
              document
                .getElementById("rezerwacja")
                ?.scrollIntoView({ behavior: "smooth" });
              setMobileOpen(false);
            }}
          >
            Zapisz się na lekcję
          </Button>
        </div>
      </div>
    </>
  );
}
