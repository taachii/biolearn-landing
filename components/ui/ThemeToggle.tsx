"use client";

/**
 * components/ui/ThemeToggle.tsx
 *
 * Self-contained dark/light mode toggle.
 * Directly reads/writes the `light` class on <html> and persists
 * the preference in localStorage. No Context required.
 */

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  // Start with null to avoid hydration mismatch
  const [isDark, setIsDark] = useState<boolean | null>(null);

  /* ── Read initial theme on mount ────────────────────────── */
  useEffect(() => {
    const html = document.documentElement;
    setIsDark(!html.classList.contains("light"));
  }, []);

  /* ── Toggle ─────────────────────────────────────────────── */
  const toggle = () => {
    const html = document.documentElement;
    const goLight = html.classList.contains("dark") || !html.classList.contains("light");

    if (goLight) {
      html.classList.add("light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Don't render until client-side to avoid hydration mismatch
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
