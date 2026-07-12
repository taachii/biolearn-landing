/**
 * components/ui/Button.tsx
 * Generic button component — designed for reuse across landing page and future app.
 */

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-accent)] text-[#050c15] font-semibold",
    "hover:bg-[var(--color-accent-dim)] hover:shadow-[var(--shadow-glow-accent)]",
    "active:scale-[0.97]",
  ].join(" "),

  secondary: [
    "bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]",
    "border border-[var(--color-border)]",
    "hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    "active:scale-[0.97]",
  ].join(" "),

  ghost: [
    "text-[var(--color-text-secondary)]",
    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]",
    "active:scale-[0.97]",
  ].join(" "),

  outline: [
    "border border-[var(--color-accent)] text-[var(--color-accent)]",
    "hover:bg-[var(--color-accent-muted)]",
    "active:scale-[0.97]",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-[var(--radius-md)]",
  md: "px-6 py-3 text-base rounded-[var(--radius-lg)]",
  lg: "px-8 py-4 text-lg rounded-[var(--radius-lg)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 font-medium",
          "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]",
          "cursor-pointer select-none whitespace-nowrap",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "focus-ring",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
