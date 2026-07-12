import { Mail, Phone, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import Link from "next/link";

interface KontaktSectionProps {
  id?: string;
}

export function KontaktSection({ id }: KontaktSectionProps) {
  return (
    <footer id={id} className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-border)] mt-12 bg-[var(--color-bg-base)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <AnimateIn animation="fade-right">
              <Link href="/" className="inline-block font-display font-bold text-2xl tracking-tight text-[var(--color-text-primary)] mb-4 focus-ring rounded">
                Adam<span className="text-[var(--color-accent)]">.</span>
              </Link>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
                Korepetycje z biologii oparte na systemowym rozumieniu, nie zakuwaniu. Sprawdzone — od zera do 90% i 100. centyla w 9 miesięcy.
              </p>
            </AnimateIn>
          </div>

          {/* Contact Details */}
          <div>
            <AnimateIn animation="fade-up" delay={100}>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest text-xs">Kontakt</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="mailto:kontakt@adam-biologia.pl" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors focus-ring rounded p-1 -ml-1">
                    <Mail size={16} />
                    <span>kontakt@adam-biologia.pl</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+48000000000" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors focus-ring rounded p-1 -ml-1">
                    <Phone size={16} />
                    <span>+48 000 000 000</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[var(--color-text-muted)] p-1 -ml-1">
                  <MapPin size={16} />
                  <span>Online / Cała Polska</span>
                </li>
              </ul>
            </AnimateIn>
          </div>

          {/* Socials / Links */}
          <div>
            <AnimateIn animation="fade-up" delay={200}>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest text-xs">Social Media</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors focus-ring rounded p-1 -ml-1">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors focus-ring rounded p-1 -ml-1">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors focus-ring rounded p-1 -ml-1">
                    TikTok
                  </a>
                </li>
              </ul>
            </AnimateIn>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-muted)]">
          <p>© {new Date().getFullYear()} Adam — Korepetytor Biologii. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-text-secondary)] transition-colors focus-ring rounded px-1">Polityka prywatności</Link>
            <Link href="#" className="hover:text-[var(--color-text-secondary)] transition-colors focus-ring rounded px-1">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
