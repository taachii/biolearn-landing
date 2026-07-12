/**
 * components/ui/Badge.tsx
 * Small label chip — used for tags, labels, status indicators.
 */

import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export type BadgeVariant = "accent" | "cyan" | "neutral" | "success" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent:  "bg-[var(--color-accent-muted)] text-[var(--color-accent)] border border-[rgba(0,230,118,0.25)]",
  cyan:    "bg-[var(--color-cyan-muted)] text-[var(--color-cyan)] border border-[rgba(0,207,255,0.20)]",
  neutral: "bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
  success: "bg-[rgba(0,230,118,0.10)] text-[var(--color-success)] border border-[rgba(0,230,118,0.25)]",
  warning: "bg-[rgba(255,187,0,0.10)] text-[var(--color-warning)] border border-[rgba(255,187,0,0.25)]",
};

export function Badge({ variant = "accent", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
