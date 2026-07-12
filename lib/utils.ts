/**
 * lib/utils.ts
 * Generic utility functions shared across the entire codebase.
 * Designed to be reused in future app/ subdomain.
 */

import { type ClassValue, clsx } from "clsx";

/**
 * Merges class names conditionally.
 * Drop-in compatible with shadcn/ui patterns.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats a number with Polish locale.
 */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("pl-PL").format(n);
}
