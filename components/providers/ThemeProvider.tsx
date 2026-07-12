"use client";

/**
 * components/providers/ThemeProvider.tsx
 *
 * Manages dark/light theme state.
 * - Reads from localStorage on mount
 * - Falls back to OS preference
 * - Toggles `.light` class on <html>
 * - Exposes `useTheme()` hook
 */

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  /* ── Hydrate from localStorage / OS preference ─────────── */
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const osPrefers = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = stored ?? osPrefers;
    applyTheme(initial);
    setTheme(initial);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  if (theme === "light") {
    html.classList.add("light");
    html.classList.remove("dark");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
  }
}

export function useTheme() {
  return useContext(ThemeContext);
}
