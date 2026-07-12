"use client";

/**
 * components/ui/ThemeToggle.tsx
 *
 * Sun / Moon button for switching dark ↔ light mode.
 * Reads theme from ThemeProvider context.
 */

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

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
