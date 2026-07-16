import { Mail, Phone, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import Link from "next/link";

const InstagramIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TikTokIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);

interface KontaktSectionProps {
  id?: string;
}

export function KontaktSection({ id }: KontaktSectionProps) {
  return (
    <footer id={id} className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-8 sm:px-10 lg:px-12 border-t border-[var(--color-border)] mt-12 bg-[var(--color-bg-base)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <AnimateIn animation="fade-right">
              <Link href="/" className="inline-block font-display font-bold text-2xl tracking-tight text-[var(--color-text-primary)] mb-4 focus-ring rounded">
                biolka<span className="text-neon-green">z</span>adamem
              </Link>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
                Korepetycje z biologii oparte na rozumieniu mechanizmów, a nie uczeniu się na pamięć.
              </p>
            </AnimateIn>
          </div>

          {/* Contact Details */}
          <div>
            <AnimateIn animation="fade-up" delay={100}>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest text-xs">Kontakt</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="mailto:naukazadamem@gmail.com" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-cyan)] transition-colors focus-ring rounded p-1 -ml-1">
                    <Mail size={16} />
                    <span>naukazadamem@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+48690011300" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-cyan)] transition-colors focus-ring rounded p-1 -ml-1">
                    <Phone size={16} />
                    <span>+48 690 011 300</span>
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
                  <a href="#" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-cyan)] transition-colors focus-ring rounded p-1 -ml-1">
                    <InstagramIcon size={16} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-cyan)] transition-colors focus-ring rounded p-1 -ml-1">
                    <TikTokIcon size={16} />
                    <span>TikTok</span>
                  </a>
                </li>
              </ul>
            </AnimateIn>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-muted)]">
          <p>© {new Date().getFullYear()} naukazadamem. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-text-secondary)] transition-colors focus-ring rounded px-1">Polityka prywatności</Link>
            <Link href="#" className="hover:text-[var(--color-text-secondary)] transition-colors focus-ring rounded px-1">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
