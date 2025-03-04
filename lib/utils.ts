import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat().format(value)
}

export function formatPercentage(value: number): string {
  return new Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100)
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "active":
      return "success"
    case "upcoming":
      return "info"
    case "completed":
      return "secondary"
    case "cancelled":
      return "destructive"
    default:
      return "secondary"
  }
}

