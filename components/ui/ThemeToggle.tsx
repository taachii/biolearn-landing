"use client";

/**
 * components/ui/ThemeToggle.tsx
 *
 * Self-contained dark/light mode toggle.
 * Uses data-theme attribute on <html> instead of class toggling
 * to avoid React hydration conflicts.
 */

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  /* ── Read initial theme on mount ────────────────────────── */
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme !== "light");
  }, []);

  /* ── Toggle ─────────────────────────────────────────────── */
  const toggle = () => {
    const html = document.documentElement;
    const currentlyLight = html.getAttribute("data-theme") === "light";
    const next = currentlyLight ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIsDark(next === "dark");
  };

  /* ── Don't render until client hydrated ────────────────── */
  if (isDark === null) return <div className="w-9 h-9" />;

  return (
    <button
      type="button"
      id="theme-toggle"
      aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
      onClick={toggle}
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-[var(--radius-md)]",
        "border border-[var(--color-border)]",
        "bg-[var(--color-bg-elevated)]",
        "text-[var(--color-text-secondary)]",
        "hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]",
        "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]",
        "focus-ring cursor-pointer",
        className
      )}
    >
      {isDark ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}
