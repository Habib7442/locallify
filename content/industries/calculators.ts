import type { CalculatorModelId } from "./types";

export interface CalculatorResult {
  monthly: number;
  yearly: number;
  /** Optional breakdown lines shown under the result. */
  breakdown?: { label: string; value: number }[];
  /** How the monthly figure should be described. */
  monthlyLabel: string;
  yearlyLabel: string;
}

type Values = Record<string, number>;

const pct = (n: number) => Math.max(0, Math.min(100, n)) / 100;
const num = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

/** Pure functions — shared by the client calculator and unit checks. */
export function calculate(model: CalculatorModelId, v: Values): CalculatorResult {
  const missed = num(v.missed);
  const rate = pct(num(v.rate));
  const value = num(v.value);

  switch (model) {
    case "missed-leads": {
      const monthly = missed * rate * value;
      return { monthly, yearly: monthly * 12, monthlyLabel: "Lost per month", yearlyLabel: "Lost per year" };
    }
    case "repeat-visits": {
      const visits = num(v.visits) || 1;
      const yearly = missed * 12 * rate * value * visits;
      return { monthly: yearly / 12, yearly, monthlyLabel: "Lost per month", yearlyLabel: "Lost per year" };
    }
    case "recurring-clients": {
      const recurring = pct(num(v.recurring));
      const booked = missed * rate;
      const firstCleans = booked * value;
      const recurringValue = booked * recurring * value * 12;
      const monthly = firstCleans + recurringValue;
      return {
        monthly,
        yearly: monthly * 12,
        monthlyLabel: "Lost from one month of missed quotes",
        yearlyLabel: "Lost from a year of missed quotes",
        breakdown: [
          { label: "First cleans", value: firstCleans },
          { label: "Recurring clients’ next 12 months", value: recurringValue },
        ],
      };
    }
  }
}

export function formatMoney(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

/** Coarse bucket for analytics, so raw revenue numbers aren't sent anywhere. */
export function resultBucket(yearly: number): string {
  if (yearly < 10_000) return "<10k";
  if (yearly < 50_000) return "10k-50k";
  if (yearly < 250_000) return "50k-250k";
  return "250k+";
}
